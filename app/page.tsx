"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const snapScrollArray: {
  title: string[];
  description: string;
  image: string;
  alt: string;
}[] = [
  {
    title: ["SQL이 이렇게", "쉬워질수가!"],
    description: "LENS와 함께라면 가능합니다",
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
    description: "LENS의 능력은 무한합니다",
    image: "/images/figure_3.png",
    alt: "main_lens_chat",
  },
  {
    title: ["정말 쉽고 빠른", "다운로드"],
    description: "LENS의 능력을 느껴보세요",
    image: "/images/figure_4.png",
    alt: "main_lens_chat",
  },
];

export default function Home() {
  const router = useRouter();
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
            는 데이터 분석가를 위한 데이터 추출 및 EDA 자동화 솔루션입니다
          </SubTitle>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.20)",
              padding: "2px",
              borderRadius: "8px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Button
              onClick={() => {
                // TODO: 로그인 되어 있는지 확인 필요
                router.push("/chat");
              }}
            >
              지금 바로 시작하기
            </Button>
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
          <ImageContainer>
            <Image
              src={"/main_lens_chat.png"}
              width={1542}
              height={1188}
              alt="main_lens_chat"
              priority
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
            />
          </ImageContainer>
        </motion.div>
      </Section>
      {/* <SnapScrollSection>
        {snapScrollArray.map((item, index) => (
          <SnapItem key={index}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                height: "100%",
              }}
            >
              <SnapTitle>{item.title[0]}</SnapTitle>
              <SnapTitle>{item.title[1]}</SnapTitle>
              <SnapDescription>{item.description}</SnapDescription>
            </motion.div>
            <SnapImage
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={item.image} alt={item.alt} width={400} height={400} />
            </SnapImage>
          </SnapItem>
        ))}
      </SnapScrollSection> */}
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

  @media (max-width: 700px) {
    font-size: 48px;
    line-height: 52px;
  }

  @media (max-width: 500px) {
    font-size: 32px;
    line-height: 36px;
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

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
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
  margin: 0 auto;
`;

const SnapItem = styled.div`
  scroll-snap-align: start;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 160px 0;
`;

const Button = styled.button`
  background: linear-gradient(180deg, #ffffff 0%, #e1ffe1 100%);
  border: none;
  color: #333333;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  padding: 16px 32px;
  border-radius: 8px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(180deg, #e1ffe1 0%, #ffffff 100%);
  }

  @media (max-width: 1440px) {
    font-size: 20px;
  }

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  max-width: 1542px;
  max-height: 1188px;
  background-color: rgba(255, 255, 255, 0.06);
  padding: 100px 60px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);

  @media (max-width: 1440px) {
    padding: 80px 40px;
  }

  @media (max-width: 1200px) {
    padding: 60px 30px;
  }

  @media (max-width: 1000px) {
    padding: 40px 20px;
  }

  @media (max-width: 700px) {
    padding: 20px 10px;
  }

  @media (max-width: 500px) {
    padding: 10px 10px;
  }
`;

// fontSize: "120px",
// fontWeight: 700,
// lineHeight: "132px",

const SnapTitle = styled.div`
  font-size: 120px;
  font-weight: 700;
  line-height: 132px;

  @media (max-width: 1440px) {
    font-size: 100px;
    line-height: 110px;
  }

  @media (max-width: 1200px) {
    font-size: 80px;
    line-height: 88px;
  }

  @media (max-width: 1000px) {
    font-size: 60px;
    line-height: 66px;
  }

  @media (max-width: 700px) {
    font-size: 40px;
    line-height: 44px;
  }

  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 33px;
  }
`;

const SnapDescription = styled.div`
  font-size: 32px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 1440px) {
    font-size: 28px;
  }

  @media (max-width: 1200px) {
    font-size: 24px;
  }

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const SnapImage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  @media (max-width: 1200px) {
    display: none;
  }
`;
