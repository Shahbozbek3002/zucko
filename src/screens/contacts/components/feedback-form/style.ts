import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const Wrapper = styled("form")`
  margin: -10px;
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

  button {
    color: var(--Colors-Base-white, #fff);
    text-align: center;
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    text-transform: uppercase;
    background-color: #1d3532 !important;
    svg {
      path {
        stroke: ${COLORS.MAIN_WHITE};
      }
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 40px;
      line-height: 1;
    }
  }
`;
