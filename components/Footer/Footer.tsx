import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Container>
      <h1>Footer</h1>
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
