export const tableArray: {
  name: string;
  alias: string;
  primaryKey: string;
  foreignKey: string;
}[] = [
    {
      name: "TABLE1",
      alias: "T1",
      primaryKey: "ID",
      foreignKey: "FK",
    },
    {
      name: "TABLE2",
      alias: "T2",
      primaryKey: "ID",
      foreignKey: "FK",
    },
    {
      name: "TABLE3",
      alias: "T3",
      primaryKey: "ID",
      foreignKey: "FK",
    },
  ];

export const SQLArray: string[] = [
  "SELECT * FROM TABLE",
  "SELECT * FROM TABLE WHERE ID = 1",
  "SELECT * FROM TABLE WHERE ID = 2",
];

export const historyArray: {
  id: number;
  message_text: string;
  message_type: "chat" | "sql" | "schema";
  sender_type: "user" | "lens" | "system";
  session_id: number;
  timestamp: string;
  user_id: number;
}[] = [];
