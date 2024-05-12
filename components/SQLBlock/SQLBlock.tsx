import styled from "@emotion/styled";

type SQLBlockProps = {
  sql: string;
};

const SQLBlock = ({ sql }: SQLBlockProps) => {
  const sqlHandler = (sql: string) => {
    // sql에서 ["SELECT","FROM","WHERE"]은 div로 감싸서 반환 그리고 #FF7F50 색상으로 표시
    // ["INNER JOIN","CROSS JOIN","LEFT JOIN","RIGHT JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "ROLLUP","CUBE","START WITH"]은 div로 감싸서 반환 그리고 #308B5F 색상으로 표시

    return sql.split(" ").map((word, index) => {
      if (word === "SELECT" || word === "FROM" || word === "WHERE") {
        return (
          <div key={index} style={{ color: "#FF7F50", padding: "0 5px" }}>
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
          <div key={index} style={{ color: "#308B5F", padding: "0 5px" }}>
            {word}
          </div>
        );
      }
      return word;
    });
  };

  return (
    <Container>
      <SQL>{sqlHandler(sql)}</SQL>
    </Container>
  );
};

export default SQLBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const SQL = styled.div`
  flex: 1;
  display: flex;
  font-size: 14px;
  background-color: #011931;
  color: white;
  padding: 26px;
  border-radius: 10px;
  font-weight: semibold;
`;
