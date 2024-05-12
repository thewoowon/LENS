import Link from "next/link";
import { useState } from "react";
import styled from "@emotion/styled";

const OAuthLogin = () => {
  const [session, setSession] = useState(null);
  return (
    <div className="flex flex-col font-sans-kr">
      {session ? (
        <div
          style={{ height: "500px" }}
          className="flex flex-col justify-center items-center font-sans-kr-light"
        >
          <div
            className="relative text-5xl"
            style={{ fontFamily: "Kashie-Mercy" }}
          >
            LENS
          </div>
          <div className="text-xl">안녕하세요!</div>
          <div className="flex flex-col justify-center items-center py-3 text-blue-500">
            <Link
              className="border-b-2 border-b-white hover:border-b-blue-500 cursor-pointer"
              href="/"
            >
              {"-> "} 메인으로 이동하기
            </Link>
            <Link
              className="border-b-2 border-b-white hover:border-b-blue-500 cursor-pointer"
              href="/auth/signout"
            >
              {"-> "}로그아웃하기
            </Link>
          </div>
        </div>
      ) : (
        <>
          <span className="font-sans-kr-light">
            사용자의 로그인 정보가 없습니다. 로그인해주세요.
          </span>
          <br />
          <ButtonBig className="m-2 flex justify-center items-center shadow-lg hover:bg-blue-600 bg-blue-500 text-white">
            <span className="px-2">구글 로그인</span>
          </ButtonBig>
          <ButtonBig className="m-2 flex justify-center items-center shadow-lg hover:bg-blue-600 bg-blue-500 text-white">
            <span className="px-2">네이버 로그인</span>
          </ButtonBig>
        </>
      )}
    </div>
  );
};

export default OAuthLogin;

const ButtonBig = styled.button`
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
