import styled from "@emotion/styled";

type SQLBlockProps = {
  sql: MessageType;
};

const SQLBlock = ({ sql }: SQLBlockProps) => {
  const sqlHandler = (sql: string) => {
    // sql에서 ["SELECT","FROM","WHERE"]은 div로 감싸서 반환 그리고 #FF7F50 색상으로 표시
    // ["INNER JOIN","CROSS JOIN","LEFT JOIN","RIGHT JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "ROLLUP","CUBE","START WITH"]은 div로 감싸서 반환 그리고 #308B5F 색상으로 표시

    // 처음에는 \n으로 split하고 그 다음에 " "으로 split해서 map을 돌린다.
    const sqlBreakline = sql.split("\n").map((line) => line.trim());

    return sqlBreakline.map((line, idx1) => {
      return (
        <div style={{
          display: "flex",
          padding: "2px 0",
        }} key={idx1}>
          {
            line.split(" ").map((word, idx2) => {
              if (word === "SELECT" || word === "FROM" || word === "WHERE") {
                return (
                  <div key={`${idx1}_${idx2}`} style={{ color: "#FF7F50", padding: "0 5px" }}>
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
                  <div key={`${idx1}_${idx2}`} style={{ color: "#308B5F", padding: "0 5px" }}>
                    {word}
                  </div>
                );
              }
              return <div key={`${idx1}_${idx2}`} style={{ padding: "0 3px" }}>{word}</div>;
            })
          }
        </div >
      )
    })
  };

  return (
    <Container>
      <SQL>{sqlHandler(sql.message_text)}</SQL>
    </Container>
  );
};

export default SQLBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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

  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
