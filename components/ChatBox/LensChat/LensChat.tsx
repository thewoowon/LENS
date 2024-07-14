import styled from "@emotion/styled";
import { forwardRef, useEffect, useState } from "react";
import { marked } from 'marked';
import parse from "html-react-parser";

type LensChatProps = {
  chat: string;
  data?: any[];
};

const LensChat = forwardRef<HTMLDivElement, LensChatProps>(
  ({ chat, data }, ref) => {
    const [markdownContent, setMarkdownContent] = useState<string>("");

    useEffect(() => {
      const markdown = async () => {
        setMarkdownContent(await marked(chat));
      }

      markdown();
    }, [chat]);

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
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="11" fill="black" />
            <mask
              id="mask0_2050_151"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="22"
              height="22"
            >
              <circle cx="11" cy="11" r="11" fill="black" />
            </mask>
            <g mask="url(#mask0_2050_151)">
              <path
                d="M-1.21289 22.6828L10.8492 -5.31033L5.31125 13.3517L21.2423 0.151736L15.325 17.2966L25.263 11.6828L9.10435 26.0207L17.9802 5.08277L-1.21289 22.6828Z"
                fill="white"
              />
            </g>
          </svg>
          <div>LENS</div>
        </div>
        <div
          style={{
            paddingLeft: "32px",
          }}
        >
          {parse(markdownContent)}
        </div>
        {
          data &&
          Array.isArray(data) &&
          data.length > 0 &&
          <table
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "0 10px",
              width: "100%",
              maxWidth: "1000px",
              overflowX: "auto",
              backgroundColor: "white",
              border: "1px solid #E5E5E5",
              color: "black",
            }}
          >
            {
              data.slice(0, 1).map((row, idx1) => (
                <thead
                  key={idx1}
                  style={{
                    display: "flex",
                    gap: "10px",
                    height: "50px",
                    borderBottom: "1px solid #E5E5E5",
                    overflowX: "auto",
                    overflowY: "hidden",
                  }}
                >
                  {Object.keys(row).map((key: string, idx2: number) => (
                    <td
                      key={idx2}
                      style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        width: "100px",
                        overflowX: "auto",
                        overflowY: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      <div>{key}</div>
                    </td>
                  ))}
                </thead>
              ))}
            {data &&
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((row, idx1) => (
                <tr
                  key={idx1}
                  style={{
                    display: "flex",
                    gap: "10px",
                    height: "50px",
                    borderBottom: "1px solid #E5E5E5",
                    overflowX: "auto",
                    overflowY: "hidden",
                  }}
                >
                  {Object.keys(row).map((key: string, idx2: number) => (
                    <td
                      key={idx2}
                      style={{
                        flex: "1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        width: "100px",
                        overflowX: "auto",
                        overflowY: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        padding: "10px",
                      }}
                    >
                      <div>{row[key]}</div>
                    </td>
                  ))}
                </tr>
              ))}
          </table>
        }
      </Container>
    );
  }
);

export default LensChat;

LensChat.displayName = "LensChat";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 10px;

  tr {
    scrollbar-width: none;
    ㅡms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  td {
    scrollbar-width: none;
    ㅡms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
