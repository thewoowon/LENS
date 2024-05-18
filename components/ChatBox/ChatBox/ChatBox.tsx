import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Controller, Control } from "react-hook-form";
import { COLORS } from "@/styles/colors";
import { debounce } from "lodash";

type ChatBoxProps = {
  onSubmit: () => void;
  control: Control<{
    chat: string;
  }>;
  isLoading?: boolean;
};

const ChatBox = ({ onSubmit, control, isLoading }: ChatBoxProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "20px";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        96
      )}px`;
    }
  };

  const handleSubmitDebounced = debounce((onSubmit: () => void) => {
    onSubmit();
  }, 300);

  const addNewLineDebounced = debounce(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (!event?.currentTarget?.value) return;
      event.preventDefault();
      event.currentTarget.value += "\n";
      adjustHeight();
    },
    300
  );

  const onkeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // 디바운싱 처리
    if (isLoading) {
      return;
    }
    if (e.key === "Enter" && !e.currentTarget.value) {
      console.log("빈값은 안됩니다.");
      e.preventDefault();
      return;
    }
    // shift + enter는 줄바꿈
    if (e.shiftKey && e.key === "Enter") {
      //줄바꿈
      addNewLineDebounced(e);
      return;
    }
    if (e.key === "Enter" && e.currentTarget.value.includes("\n")) {
      // submit이 아닌 줄바꿈
      adjustHeight();
      return;
    }
    // 현재 value에 \n이 없으면 submit
    if (e.key === "Enter" && !e.currentTarget.value.includes("\n")) {
      e.preventDefault();
      handleSubmitDebounced(onSubmit);
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [isLoading]);

  return (
    <Form>
      <Controller
        name="chat"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <textarea
            {...field}
            ref={textareaRef}
            onInput={adjustHeight}
            onKeyDown={onkeyDown}
            className="resize-none"
            placeholder="LENS와 대화를 시작하세요."
          />
        )}
      />
      {/* <TextArea
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={onKeyDown}
        placeholder="LENS와 대화를 시작하세요."
      /> */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <button onClick={onSubmit} type="submit">
          {isLoading ? (
            // 여기에는 흰색 사각형 넣어주세요
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="10" height="10" fill="white" />
            </svg>
          ) : (
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
          )}
        </button>
      </div>
    </Form>
  );
};

export default ChatBox;

const Form = styled.form`
  width: 100%;
  max-height: 200px;
  padding: 13px;
  border: solid 1px #e5e5e1;
  background-color: white;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  overflow: hidden;
  align-items: center;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  textarea {
    flex: 1;
    font-size: 16px;
    &:focus {
      outline: none;
    }
    background-color: transparent;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    width: 36px;
    height: 36px;
    background-color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
