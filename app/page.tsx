"use client";
import {
  AliExpress,
  Amazon,
  Google,
  Microsoft,
  Netflix,
  Samsung,
  Toyota,
  Zerply,
} from "@/components/Company";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import styled from "@emotion/styled";
import { Typography, Grid, Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const comment: {
  name: string;
  review: string;
  image: string;
  alt: string;
  position: string;
}[] = [
    {
      name: "김철수",
      review: "LENS 덕분에 SQL 쿼리 작성이 정말 쉬워졌어요. 이제는 복잡한 데이터도 간편하게 처리할 수 있습니다!",
      image: "/images/lens_figure_1.png",
      alt: "김철수의 사진",
      position: "데이터 분석가"
    },
    {
      name: "박영희",
      review: "생성형 AI 서비스 LENS는 마치 마법 같아요. 몇 번의 클릭만으로 원하는 데이터를 정확히 뽑아낼 수 있어요.",
      image: "/images/lens_figure_2.png",
      alt: "박영희의 사진",
      position: "비즈니스 애널리스트"
    },
    {
      name: "이민수",
      review: "LENS를 사용한 후, SQL 쿼리 작성 시간이 절반으로 줄었어요. 업무 효율성이 크게 향상되었습니다.",
      image: "/images/lens_figure_3.png",
      alt: "이민수의 사진",
      position: "소프트웨어 엔지니어"
    },
    {
      name: "최지은",
      review: "SQL 쿼리에 익숙하지 않은 사람도 LENS 덕분에 쉽게 배울 수 있어요. 정말 혁신적인 도구입니다!",
      image: "/images/lens_figure_4.png",
      alt: "최지은의 사진",
      position: "프로젝트 매니저"
    },
    {
      name: "홍길동",
      review: "LENS를 사용한 후로 데이터베이스 관리가 훨씬 수월해졌어요. 이제는 복잡한 쿼리도 문제없습니다.",
      image: "/images/lens_figure_5.png",
      alt: "홍길동의 사진",
      position: "데이터베이스 관리자"
    },
    {
      name: "윤미래",
      review: "LENS는 저의 최고의 비밀 무기예요. 덕분에 팀의 데이터 분석 역량이 크게 향상되었습니다.",
      image: "/images/lens_figure_6.png",
      alt: "윤미래의 사진",
      position: "마케팅 전문가"
    }
  ];


const reasons: {
  reason: string;
  description: string;
  image: string;
}[] = [
    {
      reason: "업무 효율성 극대화",
      description: "LENS는 SQL 쿼리 작성 시간을 크게 줄여줍니다.",
      image: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/5617a243-fb35-4add-ef60-2771aa576d00/public",
    },
    {
      reason: "초보자도 쉽게 사용 가능",
      description: "SQL 쿼리에 익숙하지 않은 사용자도 LENS를 통해 쉽게 데이터베이스 작업을 수행할 수 있습니다.",
      image: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/228f71b9-ce38-4294-b6ce-42ffbde6ce00/public",
    },
    {
      reason: "정확하고 신뢰성 있는 쿼리 생성",
      description: "LENS는 고도의 정확성을 자랑하는 AI 알고리즘을 기반으로, 오류 없이 신뢰할 수 있는 SQL 쿼리를 생성해줍니다.",
      image: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e2297c5c-b972-469f-3748-893b5f2cf900/public",
    },
  ]

export default function Home() {
  const router = useRouter();

  const leanPlainRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (leanPlainRef.current) {
        const rect = leanPlainRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementMidPoint = rect.top + rect.height / 2;
        const screenMidPoint = windowHeight / 2;
        const offset = Math.abs(screenMidPoint - elementMidPoint);
        const maxOffset = windowHeight / 2;

        if (offset < maxOffset) {
          const rotateX = (offset / maxOffset) * 30;
          controls.start({ rotateX: rotateX });
        } else {
          controls.start({ rotateX: 30 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 위치에서 호출

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
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
                fontFamily: "Goldman, sans-serif",
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
          <motion.div
            ref={leanPlainRef}
            initial={{ rotateX: 30 }}
            animate={controls}
            transition={{ duration: 0.3, delay: 0.1 }}
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
        </motion.div>
        <FaderReverse />
      </Section>
      <Section>
        <ScrollAnimation>
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: "20px",
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "20px",
            }}
          >
            {[
              AliExpress,
              Amazon,
              Google,
              Microsoft,
              Netflix,
              Samsung,
              Toyota,
              Zerply,
            ].map((Company, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Company />
                </div>
              );
            })}
          </motion.div>
        </ScrollAnimation>
      </Section>
      <Section>
        <ScrollAnimation>
          <motion.div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Typography
              style={{
                fontSize: "44px",
                marginBottom: "40px",
                fontWeight: "bolder",
              }}
            >
              SQL로 데이터를 분석하는{" "}
              <span
                style={{
                  fontWeight: 700,
                  fontStyle: "normal",
                  color: "#FFF100",
                }}
              >
                프로 일잘러
              </span>
              가 되는 길
            </Typography>
            <Typography variant="body1" textAlign={"center"} lineHeight={"28px"}>
              SQL로 데이터 분석의 신이 되어 프로 일잘러로 거듭나는 방법이 여기
              있었네요. <br />
              여러분! 이제 더 이상 두려워하지 마세요. 복잡한 데이터도 LENS와
              함께면 말랑말랑해집니다! <br />
              데이터베이스와 친해지는 첫걸음부터, 쿼리의 신이 되는 비법까지
              아낌없이 주는 LENS.
              <br /> 이젠 여러분도 데이터 앞에서 당당히 &quot;나, 프로
              일잘러야&quot; 외칠 준비 되셨나요? <br />
              지금 바로 LENS를 시작해 보세요!
            </Typography>
          </motion.div>
        </ScrollAnimation>
        <Grid sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          marginTop: "40px",

          "@media (max-width: 1440px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },

          "@media (max-width: 700px)": {
            gridTemplateColumns: "repeat(1, 1fr)",
          },
        }}>
          {
            comment.map((item, index) => {
              return (
                <Box
                  key={index}
                  display={"flex"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  maxWidth={"400px"}
                  minWidth={"300px"}
                  width={"100%"}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    padding: "36px",
                    gap: "20px",
                    borderRadius: "20px",
                  }}
                >
                  <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                  }}>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: 60,
                      height: 60,
                    }}>
                      <Image
                        src={item.image}
                        width={50}
                        height={50}
                        alt={`${item.name}의 사진`}
                      />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                      <Typography sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}>{item.name}
                      </Typography>
                      <Typography sx={{
                        fontSize: "12px",
                        fontWeight: "light",
                      }}>{item.position}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    {
                      item.review
                    }
                  </Box>
                </Box>
              );

            })
          }
        </Grid>
      </Section>
      <Section>
        <ScrollAnimation>
          <motion.div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Typography
              style={{
                fontSize: "44px",
                marginBottom: "40px",
                fontWeight: "bolder",
              }}
            >
              LENS를 사용해야 하는 이유
            </Typography>
            <Grid sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
              marginTop: "40px",

              "@media (max-width: 1440px)": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },

              "@media (max-width: 700px)": {
                gridTemplateColumns: "repeat(1, 1fr)",
              },
            }}>
              {
                reasons.map((item, index) => {
                  return (<Box key={index} sx={{
                    gap: "20px",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    minWidth: "300px",
                    maxWidth: "400px",
                    height: "fit-content",
                  }}>
                    <Box sx={{
                      width: "100%",
                      height: "350px",
                      minWidth: "300px",
                      maxWidth: "400px",
                      padding: "36px",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}>
                      <Image
                        src={item.image}
                        alt={`사진`}
                        fill
                      />
                    </Box>
                    <Typography sx={{
                      fontSize: "28px",
                      fontWeight: "bold",
                    }}>{item.reason}</Typography>
                    <Typography>{item.description}</Typography>
                  </Box>)
                })
              }
            </Grid>
          </motion.div>
        </ScrollAnimation>
      </Section>
    </Main >
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
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
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

// Fader를 180도 회전한 반전 그라디언트
const FaderReverse = styled.div`
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  flex: none;
  inset: 64px 0 1535px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 500px;
  transform: rotate(180deg);
  top: calc(100% - 500px);
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

const Button = styled.button`
  background: linear-gradient(180deg, #ffffff 0%, #e1ffe1 100%);
  border: none;
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  padding: 16px 32px;
  border-radius: 8px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(180deg, #e1ffe1 0%, #ffffff 100%);
  }

  @media (max-width: 1440px) {
    font-size: 18px;
  }

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  @media (max-width: 700px) {
    font-size: 12px;
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
