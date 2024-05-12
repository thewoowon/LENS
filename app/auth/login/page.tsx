"use client";

import OAuthLogin from "@/components/OAuthLogin";
import styled from "@emotion/styled";

const LoginPage = () => {
  return (
    <Container>
      <OAuthLogin />
    </Container>
  );
};

export default LoginPage;

const Container = styled.main`
  display: flex;
  height: 100vh;
  padding: 56px 0 0 0;
  width: 100%;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
