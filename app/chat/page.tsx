"use client";
import { ChatBox, LensChat, UserChat } from "@/components/ChatBox";
import HistoryBlock from "@/components/HistoryBlock";
import SQLBlock from "@/components/SQLBlock";
import TableBlock from "@/components/TableBlock";
import { historyArray, SQLArray, tableArray } from "@/contants";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ChatPage = () => {
  const [chatContext, setChatContext] = useState<
    {
      chat: string;
      role: "user" | "lens";
    }[]
  >([]);
  const [selectedTab, setSelectedTab] = useState<"table" | "SQL" | "history">(
    "table"
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<{
    message: string;
  }>({
    defaultValues: {
      message: "",
    },
  });

  const createChat = (message: string) => {
    setChatContext([
      ...chatContext,
      {
        chat: message,
        role: "user",
      },
    ]);
    setTimeout(() => {
      setChatContext([
        ...chatContext,
        {
          chat: message,
          role: "user",
        },
        {
          chat: "저는 렌즈입니다. 잠시만 기다려주세요.",
          role: "lens",
        },
      ]);
      setIsLoading(false);
    }, 3000);
  };

  const onSubmit = (data: { message: string }) => {
    setValue("message", "");
    setIsLoading(true);

    createChat(data.message);
  };

  return (
    <Container>
      <LeftSide>
        <Tabs>
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
          <Tab
            selected={selectedTab === "history"}
            onClick={() => {
              setSelectedTab("history");
            }}
          >
            히스토리
          </Tab>
        </Tabs>
        {selectedTab === "table" && (
          <div>
            {tableArray.map((table, index) => {
              return <TableBlock key={index} {...table} />;
            })}
          </div>
        )}
        {selectedTab === "SQL" && (
          <div>
            {SQLArray.map((sql, index) => {
              return <SQLBlock key={index} sql={sql} />;
            })}
          </div>
        )}
        {selectedTab === "history" && (
          <div>
            {historyArray.map((history, index) => {
              return <HistoryBlock key={index} {...history} />;
            })}
          </div>
        )}
      </LeftSide>
      <ChatArea>
        <Title>
          고객 테이블에서 주문이 있는 고객 중, “배송 중”과 “배송 전” 상태인
          고객만 추출해서 고객 ID별, 주문일자별로 주문가격을 ROLLUP해줘.
        </Title>
        <Wrapper>
          <ChatContext>
            {chatContext.map((context, index) => {
              const { chat, role } = context;
              if (role === "user") {
                return <UserChat key={index} chat={chat}></UserChat>;
              }
              return <LensChat key={index} chat={chat}></LensChat>;
            })}
          </ChatContext>
          <ChatBox
            value={watch("message") || ""}
            onChange={(value) => {
              setValue("message", value);
            }}
            onSubmit={handleSubmit(onSubmit)}
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
  min-width: 350px;
  height: 100%;
  border-right: 1px solid #e5e5e5;
  background-color: #ebf3e8;
  padding: 20px 30px;
`;

const ChatArea = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e5e5e5;
`;

const ChatContext = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding 45px 50px 36px 50px;
  overflow-y: auto;
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
  background-color: ${(props) => (props.selected ? "white" : "none")};
  color: #333;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: #3e3e3e;
  padding: 26px 50px;
  border-bottom: 1px solid #dbdbd5;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  padding: 45px 50px 36px 50px;
`;
