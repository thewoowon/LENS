import styled from "@emotion/styled";

type SQLBlockProps = {
  sql: string;
};

const SQLBlock = ({ sql }: SQLBlockProps) => {
  return (
    <Container>
      <div>{sql}</div>
    </Container>
  );
};

export default SQLBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
