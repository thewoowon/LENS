import React from "react";
import styled from "@emotion/styled";

type ChatBoxProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

const ChatBox = ({ value, onChange, onSubmit }: ChatBoxProps) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.currentTarget.value) {
      return;
    }
    if (e.shiftKey && e.key === "Enter") {
      if (!e.currentTarget.value.includes("\n")) {
        return;
      }
    }
    if (e.key === "Enter" && e.currentTarget.value.includes("\n")) {
      return;
    }
    // 현재 value에 \n이 없으면 submit
    if (e.key === "Enter" && !e.currentTarget.value.includes("\n")) {
      e.preventDefault();
      onSubmit();
    }
  };
  return (
    <Form>
      <TextArea
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={onKeyDown}
        placeholder="LENS와 대화를 시작하세요."
      />
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Button onClick={onSubmit} type="submit">
          <svg
            width="23"
            height="27"
            viewBox="0 0 23 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24.1235L10.4785 0L5.66762 16.0823L19.5072 4.70702L14.3668 19.4818L23 14.6441L8.96275 27L16.6734 8.95642L0 24.1235Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>
    </Form>
  );
};

export default ChatBox;

const Form = styled.form`
  width: 100%;
  max-height: 100px;
  padding: 13px;
  border: solid 1px #e5e5e1;
  background-color: white;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  height: 100%;
  overflow: hidden;
`;

const TextArea = styled.textarea`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  resize: none;
`;

const Button = styled.button`
  width: 36px;
  height: 36px;
  background-color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
