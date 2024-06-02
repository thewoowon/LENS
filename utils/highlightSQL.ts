// SQL 키워드 리스트
const DML = ["SELECT", "INSERT", "UPDATE", "DELETE"];
const DDL = ["CREATE", "ALTER", "DROP", "TRUNCATE"];
const DCL = ["GRANT", "REVOKE"];
const TCL = ["COMMIT", "ROLLBACK", "SAVEPOINT"];
const OTHER_KEYWORDS = [
  "FROM",
  "WHERE",
  "JOIN",
  "INNER",
  "LEFT",
  "RIGHT",
  "FULL",
  "OUTER",
  "ON",
  "GROUP",
  "BY",
  "ORDER",
  "HAVING",
  "AS",
  "AND",
  "OR",
  "NOT",
  "IN",
  "IS",
  "NULL",
  "LIKE",
  "TABLE",
  "DATABASE",
  "VIEW",
  "INDEX",
  "SEQUENCE",
  "TRIGGER",
  "PROCEDURE",
  "FUNCTION",
];

// 키워드에 따른 색상 매핑
const keywordColorMap = {
  DML: "#55f4ff",
  DDL: "#07bc0c",
  DCL: "#e74c3c",
  TCL: "#bb86fc",
  OTHER: "orange",
};

// SQL 문자열을 하이라이트된 HTML로 변환하는 함수
export const highlightSQL = (sql: string) => {
  let highlightedSQL = sql;

  // 모든 키워드를 대문자로 변환하고 하이라이트
  const allKeywords = [...DML, ...DDL, ...DCL, ...TCL, ...OTHER_KEYWORDS];
  allKeywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, "gi");
    let color = keywordColorMap.OTHER;

    if (DML.includes(keyword.toUpperCase())) color = keywordColorMap.DML;
    if (DDL.includes(keyword.toUpperCase())) color = keywordColorMap.DDL;
    if (DCL.includes(keyword.toUpperCase())) color = keywordColorMap.DCL;
    if (TCL.includes(keyword.toUpperCase())) color = keywordColorMap.TCL;

    highlightedSQL = highlightedSQL.replace(
      regex,
      `<span style="color: ${color}">${keyword.toUpperCase()}</span>`
    );
  });

  // 최종적으로 <pre> 태그로 감싸서 리턴
  highlightedSQL = `<pre>${highlightedSQL}</pre>`;

  // 스타일링된 div로 감싸서 리턴
  highlightedSQL = `<div style="width:100%;background-color: #011931; padding: 16px; border-radius: 8px; color:white; border:2px solid rgb(255, 127, 80)">${highlightedSQL}</div>`;

  return highlightedSQL;
};
