"use client";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Main>
      <Section>
        <svg
          width="1920"
          height="1080"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1920" height="1080" fill="black" />
          <mask
            id="mask0_2085_2"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1920"
            height="1080"
          >
            <rect width="1920" height="1080" fill="black" />
          </mask>
          <g mask="url(#mask0_2085_2)" className="lens-content">
            <path
              d="M645 1224.77L1364.83 -446L1034.34 667.85L1985.06 -119.995L1631.93 903.298L2225 568.237L1260.7 1424L1790.39 174.315L645 1224.77Z"
              fill="white"
            />
            <path
              d="M645 1224.77L1364.83 -446L1034.34 667.85L1985.06 -119.995L1631.93 903.298L2225 568.237L1260.7 1424L1790.39 174.315L645 1224.77Z"
              fill="white"
            />
          </g>
        </svg>
      </Section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  overflow: hidden;
  width: 100%;
`;
