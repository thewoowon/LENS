"use client";

import useAuthStore from "@/store/useAuthStore";
import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CallbackPage = () => {
  const router = useRouter();
  const { isLoggedIn, login, logout, } = useAuthStore();


  useEffect(() => {
    const getQueryParams = (): { [key: string]: string } => {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const queryParams: {
        [key: string]: string;
      } = {};

      params.forEach((value, key) => {
        queryParams[key] = value;
      });

      return queryParams;
    };

    const handleGoogle = async () => {
      const { code } = getQueryParams();
      const result = await axios({
        method: "POST",
        url: "/api/auth/login",
        data: {
          code,
        },
      }).then((res) => res.data);

      localStorage.setItem("accessToken", result["access_token"]);
      localStorage.setItem("refreshToken", result["refresh_token"]);
      login();
      router.push("/");
    };

    handleGoogle();
  }, [router, login]);

  return (
    <Container>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="black" />
        <mask
          id="mask0_2485_10"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="64"
          height="64"
        >
          <circle cx="32" cy="32" r="32" fill="black" />
        </mask>
        <g mask="url(#mask0_2485_10)">
          <path
            d="M-3.53101 65.9862L31.5587 -15.4482L15.4483 38.8414L61.7931 0.441413L44.5793 50.3173L73.4897 33.9862L26.4828 75.6966L52.3035 14.7862L-3.53101 65.9862Z"
            fill="white"
          />
        </g>
      </svg>

      <div className="text-2xl text-white font-bold">로그인 중...</div>
    </Container>
  );
};

export default CallbackPage;

const Container = styled.main`
  display: flex;
  height: 100vh;
  padding: 56px 0 0 0;
  width: 100%;
  background-color: black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 36px;
`;
