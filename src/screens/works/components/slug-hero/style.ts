import styled from "@emotion/styled";

export const HeroSection = styled.section<{ bg: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 90vh;
    padding: 0 3%;
  }
`;

export const Content = styled.div`
  position: absolute;
  z-index: 2;
  color: #fff;
  bottom: 100px;

  h1 {
    color: var(--Colors-Base-white, #fff);
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 120px;
    font-style: normal;
    font-weight: 800;
    line-height: 120px;
    letter-spacing: -1.2px;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 40px;
      line-height: 48px;
    }
  }

  p {
    color: var(--Colors-Base-white, #fff);
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
