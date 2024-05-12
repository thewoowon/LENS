import styled from "@emotion/styled";

type LensChatProps = {
  chat: string;
};

const LensChat = ({ chat }: LensChatProps) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontWeight: "bold",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="11" fill="black" />
          <mask
            id="mask0_2050_151"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="22"
            height="22"
          >
            <circle cx="11" cy="11" r="11" fill="black" />
          </mask>
          <g mask="url(#mask0_2050_151)">
            <path
              d="M-1.21289 22.6828L10.8492 -5.31033L5.31125 13.3517L21.2423 0.151736L15.325 17.2966L25.263 11.6828L9.10435 26.0207L17.9802 5.08277L-1.21289 22.6828Z"
              fill="white"
            />
          </g>
        </svg>
        <div>LENS</div>
      </div>
      <div
        style={{
          paddingLeft: "32px",
        }}
      >
        {chat}
      </div>
    </Container>
  );
};

export default LensChat;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 10px;
`;
