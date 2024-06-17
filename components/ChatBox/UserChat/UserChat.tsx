import styled from "@emotion/styled";
import parse from "html-react-parser";
import { forwardRef } from "react";

type UserChatProps = {
  // html일 경우 파싱이 필요한 경우가 있음
  chat: string;
};

const UserChat = forwardRef<HTMLDivElement, UserChatProps>(({ chat }, ref) => {
  return (
    <Container ref={ref}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontWeight: "bold",
          color: "#2E2E2E",
        }}
      >
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="11" fill="#2E2E2E" />
          <circle cx="11" cy="8" r="4" fill="white" />
          <path
            d="M4.00275 19.0008C4.00275 19.0008 5 13 10.9694 13.0014C16.9388 13.0028 18.0205 18.9843 18.0205 18.9843C18.0205 18.9843 16.2999 20.4304 15.0023 21.0013C13.5268 21.6504 10.9703 21.8843 10.9703 21.8843C10.9703 21.8843 8.45517 21.641 7.00226 21.0013C5.71365 20.4339 4.00275 19.0008 4.00275 19.0008Z"
            fill="white"
          />
          <path
            d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM0.808392 11C0.808392 16.6287 5.37133 21.1916 11 21.1916C16.6287 21.1916 21.1916 16.6287 21.1916 11C21.1916 5.37133 16.6287 0.808392 11 0.808392C5.37133 0.808392 0.808392 5.37133 0.808392 11Z"
            fill="#2E2E2E"
          />
        </svg>
        <div>You</div>
      </div>
      <div
        style={{
          paddingLeft: "32px",
        }}
      >
        {chat.split("\n").map((line, index) => (
          <div key={index}>{parse(line)}</div>
        ))}
      </div>
    </Container>
  );
});

export default UserChat;

UserChat.displayName = "UserChat";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 10px;
`;
