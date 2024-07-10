import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="64" cy="64.0001" rx="64" ry="64.0001" fill="black" />
            <mask
              id="mask0_97_5"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="128"
              height="129"
            >
              <ellipse cx="64" cy="64.0001" rx="64" ry="64.0001" fill="black" />
            </mask>
            <G mask="url(#mask0_97_5)">
              <path d="M-7.06201 131.973L63.1173 -30.8965L30.8966 77.6829L123.586 0.882795L89.1587 100.635L146.979 67.9725L52.9656 151.393L104.607 29.5725L-7.06201 131.973Z" />
            </G>
          </svg>
          <span
            style={{
              fontFamily: "Goldman, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "48px",
              color: "white",
            }}
          >
            LENS
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "black",
          }}
        ></div>

        <div>
          <p style={{ color: "white" }}>© 2024. All rights reserved.</p>
        </div>
      </InnerContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  border-top: 1px solid #e5e5e5;
  width: 100%;
  background-color: black;
  z-index: 1000;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
`;

const G = styled.g`
  transition: fill 0.5s;
  fill: white;
`;
