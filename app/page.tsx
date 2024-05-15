"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";

const snapScrollArray: {
  title: string[];
  description: string;
  image: string;
  alt: string;
}[] = [
  {
    title: ["SQL이 이렇게", "쉬워질수가!"],
    description: "LENS와 함께라면",
    image: "/images/figure_1.png",
    alt: "main_lens_chat",
  },
  {
    title: ["복잡한 SQL?", "걱정 마세요"],
    description: "LENS가 도와드릴게요",
    image: "/images/figure_2.png",
    alt: "main_lens_chat",
  },
  {
    title: ["채팅으로", "시작하는 SQL"],
    description: "LENS와 함께라면",
    image: "/images/figure_3.png",
    alt: "main_lens_chat",
  },
  {
    title: ["쉽고 빠른", "다운로드"],
    description: "LENS가 도와드릴게요",
    image: "/images/figure_4.png",
    alt: "main_lens_chat",
  },
];

export default function Home() {
  return (
    <Main>
      <Section height="100vh">
        <Fader />
        <PurpleGradient />
        <Noise>
          <div></div>
        </Noise>
        <div
          style={{
            flex: "none",
            height: "648px",
            pointerEvents: "none",
            position: "absolute",
            right: "-432px",
            top: "-97px",
            width: "1305px",
            zIndex: 8,
          }}
        >
          <RightSideEdge />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            gap: "40px",
            marginBottom: "120px",
          }}
        >
          <MainTitle>
            <div>데이터베이스 쿼리 작성</div>
            <div>이제는 쉽고 빠르게</div>
          </MainTitle>
          <SubTitle>
            <span
              style={{
                fontFamily: " Goldman, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              LENS
            </span>
            는 데이터 분석가를 위한 데이터 추출 및 EDA 자동화 솔루션 입니다
          </SubTitle>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.20)",
              padding: "2px",
              borderRadius: "8px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <button
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #E1FFE1 100%)",
                border: "none",
                color: "#333333",
                fontSize: "24px",
                fontWeight: 700,
                cursor: "pointer",
                padding: "16px 32px",
                borderRadius: "8px",
                transition: "background 0.2s ease-in-out",
              }}
            >
              지금 바로 시작하기
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              // width={1542}
              // height={1188}
              maxWidth: "1542px",
              maxHeight: "1188px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              padding: "100px 60px",
              borderRadius: "20px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.06)",
            }}
          >
            <Image
              src={"/main_lens_chat.png"}
              width={1542}
              height={1188}
              alt="main_lens_chat"
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
            />
          </div>
        </motion.div>
      </Section>
      <SnapScrollSection>
        {snapScrollArray.map((item, index) => (
          <SnapItem key={index}>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "120px",
                  fontWeight: 700,
                  lineHeight: "132px",
                }}
              >
                {item.title[0]}
              </div>
              <div
                style={{
                  fontSize: "120px",
                  fontWeight: 700,
                  lineHeight: "132px",
                }}
              >
                {item.title[1]}
              </div>
              <div>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 400,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {item.description}
                </span>
              </div>
            </motion.div>
            <motion.div>
              <Image src={item.image} alt={item.alt} width={400} height={400} />
            </motion.div>
          </SnapItem>
        ))}
      </SnapScrollSection>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: black;
  color: white;
  padding-top: 60px;
  overflow-x: hidden;
  position: relative;
  height: 100%;
`;

const Section = styled.section<{
  width?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  overflow: hidden;
  width: ${(props) => props.width || "100%"};
  height: min-content;
  position: relative;
  padding: 180px 40px 120px;
`;

const Fader = styled.div`
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  flex: none;
  inset: 64px 0 1535px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 500px;
`;

const PurpleGradient = styled.div`
  background: radial-gradient(
    211.50000000000003% 113.1% at -66.4% 35.9%,
    #32cd32 39.13195153221485%,
    rgba(0, 255, 0, 0.8) 51.424349881796694%,
    rgba(154, 205, 50, 0.7) 67.59505338573997%,
    var(--token-ee053477-e115-4fec-a5f5-cdc637ed6ddc, rgba(255, 244, 79, 0.9))
      77.36876020980384%,
    rgba(255, 255, 224, 0.9) 90%,
    rgba(144, 238, 144, 0.8) 100%
  );
  flex: none;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  inset: 70px 0 0;
`;

const RightSideEdge = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0px;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.03) 11.872%,
    rgba(0, 0, 0, 0.1) 22.496%,
    rgba(0, 0, 0, 0.22) 32.184%,
    rgba(0, 0, 0, 0.35) 41.248%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.65) 58.752%,
    rgba(0, 0, 0, 0.78) 67.816%,
    rgba(0, 0, 0, 0.9) 77.504%,
    rgba(0, 0, 0, 0.97) 88.128%,
    rgb(0, 0, 0) 100%
  );
  transform: rotate(45deg) translateZ(0px);
`;

const MainTitle = styled.div`
  font-size: 128px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: white;
  z-index: 2;
  text-align: center;
  line-height: 140px;
  width: 100%;

  @media (max-width: 1440px) {
    font-size: 112px;
    line-height: 120px;
  }

  @media (max-width: 1200px) {
    font-size: 96px;
    line-height: 100px;
  }

  @media (max-width: 1000px) {
    font-size: 64px;
    line-height: 70px;
  }
`;

const SubTitle = styled.div`
  font-size: 28px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.8);
  z-index: 2;
  text-align: center;
  line-height: 40px;
  width: 100%;

  @media (max-width: 1440px) {
    font-size: 24px;
    line-height: 36px;
  }

  @media (max-width: 1200px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Noise = styled.div`
  flex: none;
  inset: 0;
  opacity: 0.06;
  overflow: visible;
  pointer-events: none;
  position: absolute;
  z-index: 1;

  & > div {
    width: 100%;
    height: 100%;
    background-size: 100px;
    background-repeat: repeat;
    background-image: url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png);
    opacity: 1;
    border-radius: 0;
  }
`;

const SnapScrollSection = styled.section`
  width: 100%;
  color: white;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const SnapItem = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
