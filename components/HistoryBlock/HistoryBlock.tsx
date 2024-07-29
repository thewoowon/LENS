import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

type HistoryBlockProps = {
  history: MessageWithSessionType;
};

const HistoryBlock = ({ history }: HistoryBlockProps) => {
  const router = useRouter();
  return (
    <Container>
      <Item onClick={() => {
        router.push(`/chat/${history.session_code}`);
      }}>
        {
          // 30자 이상일 경우 30자까지만 표시
          history.message_text.length > 32
            ? history.message_text.substring(0, 32) + "..."
            : history.message_text
        }
      </Item>
    </Container>
  );
};

export default HistoryBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  font-size: 14px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;