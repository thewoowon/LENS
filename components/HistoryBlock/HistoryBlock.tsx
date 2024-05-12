import styled from "@emotion/styled";

type HistoryBlockProps = {
  date: string;
  title: string;
  content: string;
};

const HistoryBlock = ({ date, title, content }: HistoryBlockProps) => {
  return (
    <Container>
      <div>
        <span>{date}</span>
        <span>{title}</span>
        <span>{content}</span>
      </div>
    </Container>
  );
};

export default HistoryBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
