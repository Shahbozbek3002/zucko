import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const Wrapper = styled("section")`
  padding: 100px 50px;
  background-color: ${COLORS.MAIN_COLOR};
  display: flex;
  position: relative;

  @media (max-width: 800px) {
    padding: 60px 20px;
    flex-direction: column;
  }
`;

export const Left = styled("div")`
  width: 50%;

  p {
    color: var(--Colors-Base-white, #fff);
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
  }

  img {
    position: absolute;
    bottom: 100px;
  }

  @media (max-width: 800px) {
    width: 100%;

    img {
      position: inherit;
      width: 100%;
      object-fit: cover;
      margin-top: 20px;
    }
  }
`;

export const Right = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  h1 {
    color: var(--Colors-Base-white, #fff);
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 60px; /* 100% */
    letter-spacing: -0.6px;
    text-transform: uppercase;
  }

  p {
    color: var(--Colors-Base-white, #fff);
    font-family: "Almarai", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px;
    text-transform: uppercase;
    span {
      padding-left: 100px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;

    .stack {
      margin-top: 40px;
    }
    p {
      font-size: 18px;
      line-height: 1.1;
    }

    h1 {
      font-size: 40px;
      line-height: 1;
    }
  }
`;
