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
  date: string;
  title: string;
  content: string;
}[] = [
  {
    date: "2021-01-01",
    title: "TITLE1",
    content: "CONTENT1",
  },
  {
    date: "2021-01-02",
    title: "TITLE2",
    content: "CONTENT2",
  },
  {
    date: "2021-01-03",
    title: "TITLE3",
    content: "CONTENT3",
  },
];
