import styled from "@emotion/styled";

type HistoryBlockProps = {
  date: string;
  title: string;
  onClick?: () => void;
};

const HistoryBlock = ({ date, title, onClick }: HistoryBlockProps) => {
  return (
    <Container>
      <Item onClick={onClick}>
        <div>{date}</div>
        <div>{title}</div>
      </Item>
    </Container>
  );
};

export default HistoryBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;