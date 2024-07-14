import styled from "@emotion/styled";

type SQLBlockProps = {
  sql: MessageType;
  onClick: () => void;
};

const SQLBlock = ({ sql, onClick }: SQLBlockProps) => {
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
      <SQL>{sqlHandler(sql.message_text)}
        <div style={{
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
        }} onClick={onClick}>
          <svg width="16px" height="16px" viewBox="0 0 128 128" id="Layer_1" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M107.574,55.165L38.623,15.364C37.044,14.452,35.287,14,33.524,14c-1.762,0-3.519,0.453-5.096,1.365  c-3.157,1.82-5.098,5.186-5.098,8.831v79.611c0,3.644,1.94,7.008,5.098,8.83c1.577,0.912,3.334,1.363,5.096,1.363  c1.763,0,3.52-0.451,5.099-1.363l68.951-39.811c3.153-1.822,5.095-5.186,5.095-8.832C112.669,60.351,110.728,56.987,107.574,55.165z  " fill="#FFFFFF" /></svg>
        </div>
      </SQL>
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
  position: relative;

  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
