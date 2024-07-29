"use client";

import styled from "@emotion/styled";
import { forwardRef, useEffect, useState } from "react";
import { marked } from "marked";
import parse from "html-react-parser";
import customAxios from "@/lib/axios";
import Bounce from "@/components/bounce";
import { Parser } from "json2csv";

type LensChatProps = {
  chat: string;
  data?: any[];
  sql?: string;
  loading?: boolean;
};

const LensChat = forwardRef<HTMLDivElement, LensChatProps>(
  ({ chat, data, sql, loading }, ref) => {
    const [markdownContent, setMarkdownContent] = useState<string>("");
    const [execQueryData, setExecQueryData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleOnClick = async (query: string) => {
      setIsLoading(true);
      const result = await customAxios("/v1/query/execute_query", {
        method: "POST",
        data: {
          text: query,
        },
      })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          return error.response;
        });
      setIsLoading(false);
      setExecQueryData(result);
    };

    const sqlHandler = (sql: string) => {
      // sql에서 ["SELECT","FROM","WHERE"]은 div로 감싸서 반환 그리고 #FF7F50 색상으로 표시
      // ["INNER JOIN","CROSS JOIN","LEFT JOIN","RIGHT JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "ROLLUP","CUBE","START WITH"]은 div로 감싸서 반환 그리고 #308B5F 색상으로 표시

      // 처음에는 \n으로 split하고 그 다음에 " "으로 split해서 map을 돌린다.
      const sqlBreakline = sql.split("\n").map((line) => line.trim());

      return sqlBreakline.map((line, idx1) => {
        return (
          <div
            style={{
              display: "flex",
              padding: "2px 0",
              flexWrap: "wrap",
            }}
            key={idx1}
          >
            {line.split(" ").map((word, idx2) => {
              if (word === "SELECT" || word === "FROM" || word === "WHERE") {
                return (
                  <div
                    key={`${idx1}_${idx2}`}
                    style={{ color: "#FF7F50", padding: "0 5px" }}
                  >
                    {word}
                  </div>
                );
              } else if (
                [
                  "INNER JOIN",
                  "CROSS JOIN",
                  "LEFT JOIN",
                  "RIGHT JOIN",
                  "LEFT OUTER JOIN",
                  "RIGHT OUTER JOIN",
                  "ROLLUP",
                  "CUBE",
                  "START WITH",
                ].includes(word)
              ) {
                return (
                  <div
                    key={`${idx1}_${idx2}`}
                    style={{ color: "#308B5F", padding: "0 5px" }}
                  >
                    {word}
                  </div>
                );
              }
              return (
                <div key={`${idx1}_${idx2}`} style={{ padding: "0 3px" }}>
                  {word}
                </div>
              );
            })}
          </div>
        );
      });
    };

    const downloadFile = (
      data: any[],
      fileName: string,
      delimiter: string,
      type: string
    ) => {
      // 필드를 동적으로 추출
      const fields = data.length > 0 ? Object.keys(data[0]) : [];
      const opts = { fields, delimiter };

      try {
        const parser = new Parser(opts);
        const output = parser.parse(data);

        const blob = new Blob([output], { type: `${type};charset=utf-8;` });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (err) {
        console.error(err);
      }
    };

    const downloadCSV = () => {
      downloadFile(execQueryData, "data.csv", ",", "text/csv");
    };

    const downloadTSV = () => {
      downloadFile(
        execQueryData,
        "data.tsv",
        "\t",
        "text/tab-separated-values"
      );
    };

    const downloadTXT = () => {
      const text = execQueryData
        .map((item) => {
          return Object.entries(item)
            .map(([key, value]) => `${key}: ${value}`)
            .join("\n");
        })
        .join("\n\n");

      const blob = new Blob([text], { type: "text/plain;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    useEffect(() => {
      const markdown = async () => {
        setMarkdownContent(await marked(chat));
      };

      markdown();
    }, [chat]);

    if (loading) {
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
            <Bounce />
          </div>
        </Container>
      );
    }

    if (sql) {
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
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              minHeight: "350px",
              maxHeight: "350px",
              overflowX: "auto",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                overflowX: "auto",
                overflowY: "auto",

                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <DataContainer>
                {isLoading && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: "16px",
                      color: "#2E2E2E",
                      gap: "16px",
                    }}
                  >
                    <Bounce />
                    데이터를 불러오는 중입니다...
                  </div>
                )}
                {!isLoading &&
                execQueryData &&
                Array.isArray(execQueryData) &&
                execQueryData.length > 0 ? (
                  <table
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "0 10px",
                      overflowX: "auto",
                      backgroundColor: "white",
                      border: "1px solid #E5E5E5",
                      color: "black",
                      overflowY: "scroll",
                    }}
                  >
                    {execQueryData.slice(0, 1).map((row, idx1) => (
                      <thead
                        key={idx1}
                        style={{
                          display: "flex",
                          gap: "10px",
                          height: "50px",
                          borderBottom: "1px solid #E5E5E5",
                          overflowX: "auto",
                          overflowY: "hidden",

                          // 스크롤바 숨기기
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }}
                      >
                        {Object.keys(row).map((key: string, idx2: number) => (
                          <th
                            key={idx2}
                            style={{
                              flex: "1",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              minWidth: "200px",
                              overflowX: "auto",
                              overflowY: "hidden",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              padding: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            <div>{key}</div>
                          </th>
                        ))}
                      </thead>
                    ))}
                    <tbody>
                      {execQueryData &&
                        Array.isArray(execQueryData) &&
                        execQueryData.length > 0 &&
                        execQueryData.map((row, idx1) => (
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
                            {Object.keys(row).map(
                              (key: string, idx2: number) => (
                                <td
                                  key={idx2}
                                  style={{
                                    flex: "1",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    minWidth: "200px",
                                    overflowX: "auto",
                                    overflowY: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    padding: "10px",
                                  }}
                                >
                                  <div>{row[key]}</div>
                                </td>
                              )
                            )}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: "16px",
                      color: "#2E2E2E",
                      gap: "16px",
                    }}
                  >
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 128 128"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="64"
                        cy="64.0001"
                        rx="64"
                        ry="64.0001"
                        fill="black"
                      />
                      <mask
                        id="mask0_97_5"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="128"
                        height="129"
                      >
                        <ellipse
                          cx="64"
                          cy="64.0001"
                          rx="64"
                          ry="64.0001"
                          fill="black"
                        />
                      </mask>
                      <G mask="url(#mask0_97_5)">
                        <path d="M-7.06201 131.973L63.1173 -30.8965L30.8966 77.6829L123.586 0.882795L89.1587 100.635L146.979 67.9725L52.9656 151.393L104.607 29.5725L-7.06201 131.973Z" />
                      </G>
                    </svg>
                    데이터가 없어요 😢
                  </div>
                )}
              </DataContainer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "10px",
                  color: "white",
                  height: "fit-content",
                }}
              >
                <Button onClick={downloadCSV}>
                  CSV
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 10L1 13H13V10" stroke="white" />
                    <path
                      d="M6.64645 10.3536C6.84171 10.5488 7.15829 10.5488 7.35355 10.3536L10.5355 7.17157C10.7308 6.97631 10.7308 6.65973 10.5355 6.46447C10.3403 6.2692 10.0237 6.2692 9.82843 6.46447L7 9.29289L4.17157 6.46447C3.97631 6.2692 3.65973 6.2692 3.46447 6.46447C3.2692 6.65973 3.2692 6.97631 3.46447 7.17157L6.64645 10.3536ZM6.5 -3.05979e-08L6.5 10L7.5 10L7.5 3.05979e-08L6.5 -3.05979e-08Z"
                      fill="white"
                    />
                  </svg>
                </Button>
                <Button onClick={downloadTSV}>
                  TSV
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 10L1 13H13V10" stroke="white" />
                    <path
                      d="M6.64645 10.3536C6.84171 10.5488 7.15829 10.5488 7.35355 10.3536L10.5355 7.17157C10.7308 6.97631 10.7308 6.65973 10.5355 6.46447C10.3403 6.2692 10.0237 6.2692 9.82843 6.46447L7 9.29289L4.17157 6.46447C3.97631 6.2692 3.65973 6.2692 3.46447 6.46447C3.2692 6.65973 3.2692 6.97631 3.46447 7.17157L6.64645 10.3536ZM6.5 -3.05979e-08L6.5 10L7.5 10L7.5 3.05979e-08L6.5 -3.05979e-08Z"
                      fill="white"
                    />
                  </svg>
                </Button>
                <Button onClick={downloadTXT}>
                  SQL
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 10L1 13H13V10" stroke="white" />
                    <path
                      d="M6.64645 10.3536C6.84171 10.5488 7.15829 10.5488 7.35355 10.3536L10.5355 7.17157C10.7308 6.97631 10.7308 6.65973 10.5355 6.46447C10.3403 6.2692 10.0237 6.2692 9.82843 6.46447L7 9.29289L4.17157 6.46447C3.97631 6.2692 3.65973 6.2692 3.46447 6.46447C3.2692 6.65973 3.2692 6.97631 3.46447 7.17157L6.64645 10.3536ZM6.5 -3.05979e-08L6.5 10L7.5 10L7.5 3.05979e-08L6.5 -3.05979e-08Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>
            </div>
            <SQLContainer>
              <SQL>{sqlHandler(sql)}</SQL>
              <div
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "24px",
                  top: "12px",
                  right: "12px",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF7F50",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleOnClick(sql);
                }}
              >
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 128 128"
                  id="Layer_1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M107.574,55.165L38.623,15.364C37.044,14.452,35.287,14,33.524,14c-1.762,0-3.519,0.453-5.096,1.365  c-3.157,1.82-5.098,5.186-5.098,8.831v79.611c0,3.644,1.94,7.008,5.098,8.83c1.577,0.912,3.334,1.363,5.096,1.363  c1.763,0,3.52-0.451,5.099-1.363l68.951-39.811c3.153-1.822,5.095-5.186,5.095-8.832C112.669,60.351,110.728,56.987,107.574,55.165z  "
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
            </SQLContainer>
          </div>
        </Container>
      );
    }

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
        {data && Array.isArray(data) && data.length > 0 && (
          <table
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "0 10px",
              backgroundColor: "white",
              border: "1px solid #E5E5E5",
              color: "black",
            }}
          >
            {data.slice(0, 1).map((row, idx1) => (
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      overflowX: "auto",
                      overflowY: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      padding: "10px",
                      fontWeight: "bold",
                      minWidth: "64px",
                    }}
                  >
                    <div>{key}</div>
                  </td>
                ))}
              </thead>
            ))}
            <tbody>
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
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          overflowX: "auto",
                          overflowY: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          padding: "10px",
                          minWidth: "64px",
                        }}
                      >
                        <div>{row[key]}</div>
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        )}
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
  max-width: 1000px;

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

const DataContainer = styled.div`
  flex: 1;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  overflow-x: scroll;
  overflow-y: scroll;

  scrollbar-width: none;
  ㅡms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SQLContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  position: relative;
`;

const SQL = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  background-color: #011931;
  color: white;
  padding: 26px;
  border-radius: 10px;
  font-weight: semibold;
  position: relative;

  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const G = styled.g`
  transition: fill 0.5s;
  fill: white;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.5s;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: #2e2e2e;
  }
`;
