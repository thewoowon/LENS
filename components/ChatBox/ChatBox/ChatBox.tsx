import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Controller, Control, useWatch } from "react-hook-form";
import { debounce } from "lodash";
import { Mode } from "@/app/chat/page";
import { toast } from "react-toastify";
import { forwardRef } from "react";

type ChatBoxProps = {
  onSubmit: () => void;
  control: Control<{
    chat: string;
  }>;
  isLoading?: boolean;
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

const ChatBox = forwardRef<HTMLDivElement, ChatBoxProps>(
  ({ onSubmit, control, isLoading, mode, setMode }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [open, setOpen] = useState(false);
    // watch the chat field value
    const chatValue = useWatch({
      control,
      name: "chat",
    });

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

    const modeIcon = (mode: "chat" | "sql" | "schema") => {
      switch (mode) {
        case "chat":
          return (
            <svg
              data-name="Layer 1"
              id="Layer_1"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>{`
                .cls-1 {
                  fill: #062b31;
                }
              `}</style>
              </defs>
              <title />
              <path
                className="cls-1"
                d="M64,20.5c24,0,43.5,17.76,43.5,39.59S88,99.69,64,99.69a47.6,47.6,0,0,1-11.71-1.46l-2.38-.6-2.18,1.12-9,4.63V92.44l-2.56-2C26.2,82.93,20.5,71.85,20.5,60.09,20.5,38.26,40,20.5,64,20.5M64,14C36.39,14,14,34.64,14,60.09c0,14.32,7.08,27.11,18.19,35.57V114l18.5-9.48A54,54,0,0,0,64,106.19c27.61,0,50-20.64,50-46.09S91.61,14,64,14Z"
              />
              <polygon
                className="cls-1"
                points="33.19 74.06 58.77 46.62 71.76 59.7 94.81 47.1 69.13 75.13 56.53 61.36 33.19 74.06"
              />
            </svg>
          );
        case "sql":
          return (
            <svg
              id="icon"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>
                  {`
            .cls-2 {
              fill: none;
            }
          `}
                </style>
              </defs>
              <title />
              <polygon points="24 21 24 9 22 9 22 23 30 23 30 21 24 21" />
              <path d="M18,9H14a2,2,0,0,0-2,2V21a2,2,0,0,0,2,2h1v2a2,2,0,0,0,2,2h2V25H17V23h1a2,2,0,0,0,2-2V11A2,2,0,0,0,18,9ZM14,21V11h4V21Z" />
              <path d="M8,23H2V21H8V17H4a2,2,0,0,1-2-2V11A2,2,0,0,1,4,9h6v2H4v4H8a2,2,0,0,1,2,2v4A2,2,0,0,1,8,23Z" />
              <rect
                className="cls-2"
                data-name="&lt;Transparent Rectangle&gt;"
                height="32"
                id="_Transparent_Rectangle_"
                width="32"
              />
            </svg>
          );
        case "schema":
          return (
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <rect fill="none" height="256" width="256" />
              <rect
                fill="none"
                height="56"
                rx="8"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
                width="56"
                x="24"
                y="100"
              />
              <rect
                fill="none"
                height="64"
                rx="8"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
                width="64"
                x="160"
                y="40"
              />
              <rect
                fill="none"
                height="64"
                rx="8"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
                width="64"
                x="160"
                y="152"
              />
              <line
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
                x1="80"
                x2="120"
                y1="128"
                y2="128"
              />
              <path
                d="M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              />
            </svg>
          );
        default:
          return null;
      }
    };

    const ModeBox = ({
      open,
      onClose,
    }: {
      open?: boolean;
      onClose?: () => void;
      onChange?: (mode: Mode) => void;
    }) => {
      if (!open) return null;
      return (
        <div
          style={{
            position: "absolute",
            bottom: "44px",
            left: "6px",
            width: "300px",
            height: "150px",
            backgroundColor: "white",
            border: "1px solid #e5e5e5",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "8px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {[
            { mode: "chat", label: "채팅" },
            { mode: "sql", label: "SQL" },
            { mode: "schema", label: "스키마" },
          ].map((item) => (
            <ListItem
              key={item.mode}
              onClick={() => {
                if (item.mode === "schema") {
                  toast.warn("스키마 모드는 준비 중입니다.");
                  return;
                }
                setMode(item.mode as Mode);
                onClose && onClose();
              }}
              disabled={item.mode === "schema"}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {modeIcon(item.mode as Mode)}
              </div>
              {item.label}
            </ListItem>
          ))}
        </div>
      );
    };

    useEffect(() => {
      adjustHeight();
    }, [isLoading]);

    return (
      <Form mode={mode} isLoading={isLoading || false} isEmpty={!chatValue}>
        {/* {mode === "sql" && (
        <MoveLine viewBox="0 0 200 200" preserveAspectRatio="xMinYMin meet">
          <MoveRect x="1" y="1" width="198" height="198"/>
        </MoveLine>
      )} */}
        <Utils
          mode={mode}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {modeIcon(mode)}
          <ModeBox open={open} onClose={() => setOpen(false)} />
        </Utils>
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
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <button
            onClick={onSubmit}
            type="submit"
            disabled={isLoading || !chatValue}
          >
            {isLoading ? (
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
  }
);

export default ChatBox;

ChatBox.displayName = "ChatBox";

const Form = styled.form<{
  mode: Mode;
  isLoading: boolean;
  isEmpty: boolean;
}>`
  width: 100%;
  max-height: 200px;
  max-width: 1000px;
  padding: 13px;
  border: solid 1px #e5e5e1;
  background-color: white;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  align-items: center;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  transition: background-color 0.2s ease-in-out;

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
    background-color: ${(props) =>
      props.isLoading || props.isEmpty
        ? "rgb(200, 200, 200)"
        : props.mode === "sql"
          ? "rgb(255, 127, 80)"
          : "black"};
    border: none;
    border-radius: 8px;
    cursor: ${(props) =>
      props.isLoading || props.isEmpty ? "not-allowed" : "pointer"};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${(props) =>
    props.mode === "sql" &&
    `
      background-color: #011931;
      border: 2px solid rgb(255, 127, 80);
      color: white;
      max-height: 360px;
  `}
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

const Utils = styled.div<{
  mode?: Mode;
}>`
  width: 36px;
  height: 36px;
  padding: 4px;
  margin-right: 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: relative;

  ${(props) =>
    props.mode === "sql" &&
    `
      background-color: white;
    `}
`;

const ListItem = styled.div<{ disabled: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  height: 50px;
  border-radius: 8px;
  gap: 10px;
  &:last-child {
    border-bottom: none;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}

  &:hover {
    background-color: #f5f5f5;
  }
  color: black;
`;

const MoveLine = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const MoveRect = styled.rect`
  fill: none;
  stroke: red;
  stroke-width: 2;
  stroke-dasharray: 50 700; /* 첫 번째 값은 선의 길이, 두 번째 값은 빈 공간의 길이 */
  stroke-dashoffset: 0;
  animation:
    moveLine 8s linear infinite,
    sparkle 1s ease-in-out infinite alternate;

  @keyframes moveLine {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -800;
    }
  }

  @keyframes sparkle {
    0% {
      stroke: red;
    }
    50% {
      stroke: yellow;
    }
    100% {
      stroke: red;
    }
  }
`;
