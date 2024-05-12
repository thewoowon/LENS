import styled from "@emotion/styled";

type TableBlockProps = {
  name: string;
  alias: string;
  primaryKey: string;
  foreignKey: string;
};

const TableBlock = ({
  name,
  alias,
  primaryKey,
  foreignKey,
}: TableBlockProps) => {
  return (
    <Container>
      <div>
        <span>{name}</span>
        <span>{alias}</span>
        <span>{primaryKey}</span>
        <span>{foreignKey}</span>
      </div>
    </Container>
  );
};

export default TableBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
