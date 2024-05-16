"use client";
import { ChatBox, LensChat, UserChat } from "@/components/ChatBox";
import HistoryBlock from "@/components/HistoryBlock";
import SQLBlock from "@/components/SQLBlock";
import TableBlock from "@/components/TableBlock";
import { historyArray, SQLArray, tableArray } from "@/contants";
import styled from "@emotion/styled";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormType = {
  chat: string;
};

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

  const { getValues, watch, setValue, handleSubmit, control } =
    useForm<FormType>({
      defaultValues: {
        chat: "",
      },
    });

  const createChat = (chat: string) => {
    setChatContext([
      ...chatContext,
      {
        chat,
        role: "user",
      },
    ]);
    setTimeout(() => {
      setChatContext([
        ...chatContext,
        {
          chat,
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

  const onSubmit = (data: { chat: string }) => {
    setValue("chat", "");
    setIsLoading(true);
    createChat(data.chat);
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
                return <UserChat key={index} chat={chat} />;
              }
              return <LensChat key={index} chat={chat} />;
            })}
          </ChatContext>
          <ChatBox
            onSubmit={handleSubmit(onSubmit)}
            control={control}
            isLoading={isLoading}
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
  // 5개의 색상을 선형 그라디언트로 배경색을 지정
  background: linear-gradient(180deg, #f9f9f9 0%, #f0f0f0 100%);
  padding: 20px 30px;
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
    text-decoration: underline;
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
