import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Drawer from "@mui/material/Drawer";
import { Box, ListItem } from "@mui/material";
import useAuthStore from "@/store/useAuthStore";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { isLoggedIn, login, logout, } = useAuthStore();

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  useEffect(() => {
    const getAccessToken = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        login();
      } else {
        logout();
      }
    };

    getAccessToken();
  }, []);
  return (
    <Container>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4rem",
          }}
        >
          <Logo
            onClick={() => {
              router.push("/");
            }}
          >
            <svg
              width="101"
              height="24"
              viewBox="0 0 101 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.92 19L31.16 17.08V4.888H34.328V16.696H44.264L45.224 18.736C45.224 18.8 45.008 18.864 44.576 18.928C44.144 18.976 43.4 19 42.344 19H30.92ZM47.3731 19V4.888H62.3011V7.192H50.5411V10.504H59.5171V12.88H50.5411V16.696H62.3971L63.3571 18.736C63.3571 18.8 63.1411 18.864 62.7091 18.928C62.2771 18.976 61.5331 19 60.4771 19H47.3731ZM65.9881 19V6.808L65.7481 4.888H69.2041L77.3641 13.432L78.3001 14.728H78.5641V4.888H81.7321V19H78.6841L70.3321 10.312L69.3961 9.184H69.1561V19H65.9881ZM88.2643 19C87.1763 19 86.3763 18.952 85.8643 18.856C85.3523 18.76 85.0963 18.648 85.0963 18.52L86.0563 16.432C86.4243 16.496 87.3363 16.56 88.7923 16.624C90.2643 16.672 92.2803 16.696 94.8403 16.696H95.2963C95.9843 16.696 96.4722 16.576 96.7603 16.336C97.0483 16.08 97.1923 15.656 97.1923 15.064V14.584C97.1923 14.024 97.0723 13.624 96.8323 13.384C96.6083 13.144 96.0963 13.024 95.2963 13.024H89.7283C88.1123 13.024 86.9363 12.728 86.2003 12.136C85.4643 11.528 85.0963 10.544 85.0963 9.184V8.8C85.0963 8.096 85.2243 7.448 85.4803 6.856C85.7523 6.264 86.2083 5.792 86.8483 5.44C87.4883 5.072 88.3683 4.888 89.4883 4.888H96.0163C97.1043 4.888 97.9843 4.944 98.6562 5.056C99.3283 5.168 99.6643 5.288 99.6643 5.416L99.1843 7.432C98.7683 7.384 97.8243 7.336 96.3523 7.288C94.8803 7.224 92.9043 7.192 90.4243 7.192L90.1603 7.168C89.4243 7.168 88.9283 7.32 88.6723 7.624C88.4163 7.912 88.2803 8.28 88.2643 8.728V9.136C88.2643 9.664 88.4083 10.064 88.6963 10.336C89.0003 10.592 89.4963 10.72 90.1843 10.72H95.5123C96.5363 10.72 97.4083 10.824 98.1283 11.032C98.8483 11.24 99.4003 11.624 99.7843 12.184C100.168 12.728 100.36 13.536 100.36 14.608V14.992C100.36 16.192 100.048 17.16 99.4243 17.896C98.8163 18.632 97.7523 19 96.2323 19H88.2643Z"
                fill="white"
              />
              <circle cx="12" cy="12" r="12" fill="black" />
              <mask
                id="mask0_0_1"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <circle cx="12" cy="12" r="12" fill="black" />
              </mask>
              <g mask="url(#mask0_0_1)">
                <path
                  d="M-1.32422 24.745L11.8344 -5.79297L5.79302 14.5657L23.1723 0.165652L16.7172 18.8691L27.5585 12.745L9.93095 28.3863L19.6137 5.54496L-1.32422 24.745Z"
                  fill="white"
                />
              </g>
            </svg>
          </Logo>
          <Nav>
            <NavItem
              selected={pathName.startsWith("/chat")}
              onClick={() => {
                router.push("/chat");
              }}
            >
              채팅
            </NavItem>
            <NavItem
              selected={pathName.startsWith("/schema")}
              onClick={() => {
                toast.info("준비 중인 기능입니다. 커밍순!");
                // router.push("/schema");
              }}
            >
              스키마
            </NavItem>
            <NavItem
              selected={pathName.startsWith("/upload")}
              onClick={() => {
                toast.info("준비 중인 기능입니다. 커밍순!");
                // router.push("/upload");
              }}
            >
              애널리틱스
            </NavItem>
          </Nav>
        </div>
        <Login
          onClick={() => {
            if (isLoggedIn) {
              setProfileOpen(!profileOpen);
            } else {
              router.push("/auth/login");
            }
          }}
        >
          {isLoggedIn ? <Profile>
            <svg width={"28px"} height={"28px"} version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><g id="info" /><g id="icons"><g id="user"><ellipse cx="12" cy="8" rx="5" ry="6" /><path d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z" /></g></g></svg>
          </Profile> : "로그인"}
          <ModalBox open={profileOpen} onClose={() => {
            setProfileOpen(false);
          }
          } logout={() => {
            localStorage.removeItem("accessToken");
            logout();
            toast.info("로그아웃 되었습니다.");
          }} />
        </Login>
        <HamburgerMenu
          onClick={(e) => {
            toggleDrawer(e);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4H22V6H2V4ZM2 11H22V13H2V11ZM2 18H22V20H2V18Z"
              fill="white"
            />
          </svg>
        </HamburgerMenu>
        <Drawer
          anchor={"right"}
          open={open}
          onClose={(e) => {
            setOpen(false);
          }}
          sx={{
            ".MuiDrawer-paper": {
              backgroundColor: "black",
              fontFamily: "Pretendard Variable",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "200px",
              paddingY: "36px",
              gap: "24px",
            }}
          >
            {[
              { name: "채팅", url: "/chat" },
              { name: "스키마", url: "/schema" },
              { name: "애널리틱스", url: "/analytics" },
            ].map((item, index) => (
              <NavItem
                key={index}
                selected={pathName.startsWith(`/${item.url}`)}
                onClick={() => {
                  router.push(`${item.url}`);
                  setOpen(false);
                }}
              >
                {item.name}
              </NavItem>
            ))}
            <LoginMobile
              onClick={() => {
                if (isLoggedIn) {
                  localStorage.removeItem("accessToken");
                  logout();
                  toast.info("로그아웃 되었습니다.");
                } else {
                  router.push("/auth/login");
                }
                setOpen(false);
              }}
            >
              {isLoggedIn ? "로그아웃" : "로그인"}
            </LoginMobile>
          </Box>
        </Drawer>
      </div>
    </Container>
  );
};

export default Header;

const ModalBox = ({
  open,
  onClose,
  logout,
}: {
  open?: boolean;
  onClose?: () => void;
  logout?: () => void;
}) => {
  const router = useRouter();
  if (!open) return null;
  return (
    <ModalContainer>
      {[
        { mode: "chat", label: "채팅" },
        { mode: "mypage", label: "마이페이지" },
        { mode: "logout", label: "로그아웃" },
      ].map((item) => (
        <ListItem
          sx={{
            width: "100%",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#333333",
            },
          }}
          key={item.mode}
          onClick={() => {
            if (item.mode === "logout") {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              logout && logout();
              onClose && onClose();
            } else if (item.mode === "mypage") {
              router.push("/mypage");
            } else {
              router.push("/chat");
            }
          }}
        >

          {item.label}
        </ListItem>
      ))}
    </ModalContainer>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px;
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  background-color: black;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavItem = styled.div<{
  selected?: boolean;
}>`
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  color: ${(props) => (props.selected ? "white" : "#828282")};
  transition: color 0.2s ease-in-out;
  position: relative;

  &:hover {
    color: white;
  }

  ${(props) =>
    props.selected &&
    `
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background-color: #FFD600;
      position: absolute;
      top: 0;
      right: -8px;
      border-radius: 50%;
    }
  `}
`;

const Login = styled.div`
  position: relative;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  color: #828282;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const LoginMobile = styled.div`
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  color: #828282;
  display: none;
  transition: color 0.2s ease-in-out;

  @media (max-width: 1000px) {
    display: block;
  }

  &:hover {
    color: white;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: block;
    font-size: 1.5rem;
  }
`;


const Profile = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #333333;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 40px;
  right: calc(50% - 50px);
  width: 100px;
  height: fit-content;
  background-color: black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0px 2px 2px 2px rgba(255, 255, 255, 0.2);
  font-size: 0.8rem;
`;