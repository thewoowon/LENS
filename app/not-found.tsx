"use client";

import Link from "next/link";
import styled from "@emotion/styled";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        gap: "16px",
      }}
    >
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
      <div>존재하지 않는 경로에요 🤣</div>
      <Link
        href="/"
        style={{
          marginTop: "16px",
          color: "#0070f3",
          textDecoration: "none",
        }}
      >
        홈으로 가기
      </Link>
    </div>
  );
}

const G = styled.g`
  transition: fill 0.5s;
  fill: white;
`;
