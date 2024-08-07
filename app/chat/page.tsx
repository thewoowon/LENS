"use client";
import { ChatBox, LensChat, UserChat } from "@/components/ChatBox";
import HistoryBlock from "@/components/HistoryBlock";
import SQLBlock from "@/components/SQLBlock";
import TableBlock from "@/components/TableBlock";
import customAxios from "@/lib/axios";
import { highlightSQL } from "@/utils/highlightSQL";
import { isValidJson } from "@/utils/isValidJson";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormType = {
  chat: string;
};

export type Mode = "chat" | "sql" | "schema";

const ChatPage = ({
  params,
}: {
  params: { sessionId: string | undefined };
}) => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [chatContext, setChatContext] = useState<
    {
      chat: string;
      role: "user" | "lens";
      data?: any[];
    }[]
  >([]);
  const [selectedTab, setSelectedTab] = useState<"table" | "SQL" | "history">(
    "history"
  );
  const [chatHistory, setChatHistory] = useState<MessageWithSessionType[]>([]);
  const [tableArray, setTableArray] = useState<TableType[]>([]);
  const [SQLArray, setSQLArray] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [mode, setMode] = useState<Mode>("chat");

  const { getValues, watch, setValue, handleSubmit, control } =
    useForm<FormType>({
      defaultValues: {
        chat: "",
      },
    });

  const onSubmit = async (data: { chat: string }) => {
    setValue("chat", "");
    setIsLoading(true);
    setChatContext([
      ...chatContext,
      {
        chat: mode === "sql" ? highlightSQL(data.chat) : data.chat,
        role: "user",
      },
    ]);

    // 토큰 유무를 확인하고 바로 로그인 페이지로 이동
    if (!localStorage.getItem("accessToken")) {
      window.location.href = "/auth/login";
      return;
    }

    if (mode === "sql") {
      try {
        // 단순 실행으로 히스토리는 저장하지 않음 -> 하지만
        // 실행이 되었을 때는 히스토리에 저장
        const result = await customAxios("/v1/query/execute_query", {
          method: "POST",
          data: {
            text: data.chat,
          },
        })
          .then((res) => {
            return res.data;
          })
          .catch((error) => {
            return error.response;
          });

        if (result.status === 400) {
          setChatContext([
            ...chatContext,
            {
              chat: "쿼리 실행 중 오류가 발생했습니다.",
              role: "lens",
            },
          ]);
          setIsLoading(false);
          return;
        }

        setChatContext([
          ...chatContext,
          {
            chat: mode === "sql" ? highlightSQL(data.chat) : data.chat,
            role: "user",
          },
          {
            chat: "쿼리 결과입니다.",
            role: "lens",
            data: result,
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else if (mode === "chat") {
      try {
        const response = await fetch("/api/stream", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: data.chat,
            accessToken: localStorage.getItem("accessToken"),
            // 첫번째 대화는 세션이 없습니다.
            sessionId: params.sessionId,
          }),
        });

        if (response.status === 307 && !params.sessionId) {
          const { redirect_path } = await response.json();
          router.replace(redirect_path);
          return;
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let result = "";

        while (true) {
          const { done, value } = (await reader?.read()) ?? {};
          if (done) break;
          result += decoder.decode(value, { stream: true });
          setChatContext([
            ...chatContext,
            {
              chat: data.chat,
              role: "user",
            },
            {
              chat: result,
              role: "lens",
            },
          ]);
        }
      } catch (error) {
        toast.error("스트림 통신 중에 에러가 발생했어요.");
        setChatContext([
          ...chatContext,
          {
            chat: "쿼리 실행 중 오류가 발생했습니다.",
            role: "lens",
          },
        ]);
        setIsLoading(false);
        return;
      }
    } else {
      setChatContext([
        ...chatContext,
        {
          chat: data.chat,
          role: "user",
        },
        {
          chat: "스키마는 준비 중입니다.",
          role: "lens",
          data: [],
        },
      ]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [chatContext]);

  useEffect(() => {
    // params.sessionId를 통해서 -> 챗 히스토리
    const getHistory = async () => {
      try {
        const response = await customAxios(`/v1/history/get_history`, {
          method: "GET",
        });

        const { data } = response;
        setChatHistory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getHistory();
  }, []);

  useEffect(() => {
    // params.sessionId를 통해서 -> 테이블 정보
    const getTableArray = async () => {
      try {
        const response = await customAxios(`/v1/table/get_table_list`, {
          method: "GET",
        });

        const { data } = response;
        setTableArray(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getTableArray();
  }, []);

  useEffect(() => {
    // params.sessionId를 통해서 -> SQL 히스토리
    const getSQLArray = async () => {
      try {
        const response = await customAxios(`/v1/history/get_sql_history`, {
          method: "GET",
        });

        const { data } = response;
        setSQLArray(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getSQLArray();
  }, []);

  // 메세지를 시작한다면....

  return (
    <Container>
      <LeftSide>
        <Tabs>
          <Tab
            selected={selectedTab === "history"}
            onClick={() => {
              setSelectedTab("history");
            }}
          >
            히스토리
          </Tab>
          <Tab
            selected={selectedTab === "table"}
            onClick={() => {
              setSelectedTab("table");
            }}
          >
            테이블
          </Tab>
          <Tab
            selected={selectedTab === "SQL"}
            onClick={() => {
              setSelectedTab("SQL");
            }}
          >
            SQL
          </Tab>
        </Tabs>
        {selectedTab === "history" && (
          <LeftScrollWrapper>
            {chatHistory.map((history, index) => {
              return <HistoryBlock key={index} history={history} />;
            })}
          </LeftScrollWrapper>
        )}
        {selectedTab === "table" && (
          <LeftScrollWrapper>
            {tableArray.map((table, index) => {
              return <TableBlock key={index} table={table} />;
            })}
          </LeftScrollWrapper>
        )}
        {selectedTab === "SQL" && (
          <LeftScrollWrapper>
            {SQLArray.map((sql, index) => {
              return (
                <SQLBlock
                  key={index}
                  sql={sql}
                  onClick={() => {
                    setMode("sql");
                    setValue("chat", sql.message_text);
                  }}
                />
              );
            })}
          </LeftScrollWrapper>
        )}
      </LeftSide>
      <ChatArea>
        <Title>
          {mode === "sql"
            ? "SQL 모드입니다."
            : chatContext.length === 0
              ? "채팅을 시작해보세요."
              : chatContext[0].role === "user" && chatContext[0].chat}
        </Title>
        <Wrapper>
          <ChatContext>
            {chatContext.map((context, index) => {
              const { chat, role, data } = context;
              if (role === "user") {
                return <UserChat key={index} chat={chat} ref={scrollRef} />;
              }
              return (
                <LensChat key={index} chat={chat} data={data} ref={scrollRef} />
              );
            })}
          </ChatContext>
          <ChatBox
            onSubmit={handleSubmit(onSubmit)}
            control={control}
            isLoading={isLoading}
            mode={mode}
            setMode={setMode}
          />
        </Wrapper>
      </ChatArea>
    </Container>
  );
};

export default ChatPage;

const Container = styled.main`
  display: flex;
  height: 100vh;
  padding: 56px 0 0 0;
  width: 100%;
`;

const LeftSide = styled.div`
  min-width: 300px;
  max-width: 350px;
  height: 100%;
  border-right: 1px solid #e5e5e5;
  background: linear-gradient(180deg, #f9f9f9 0%, #f0f0f0 100%);
  padding: 20px 30px;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const ChatArea = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e5e5e5;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatContext = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding 45px 50px 36px 50px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tabs = styled.div`
  display: flex;
  padding: 10px 26px;
  gap: 24px;
`;

const Tab = styled.div<{
  selected?: boolean;
}>`
  width: 74px;
  padding: 10px 0;
  cursor: pointer;
  border-radius: 10px;
  color: ${(props) => (props.selected ? "black" : "#828282")};
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  &:hover {
    color: black;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #3e3e3e;
  padding: 26px 40px;
  border-bottom: 1px solid #dbdbd5;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  padding: 45px 40px 36px 40px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeftScrollWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
