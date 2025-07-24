import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const StatisticsSection = styled("div")`
  padding: 100px 50px;
  background-color: ${COLORS.MAIN_BACKGROUND};

  span {
    color: ${COLORS.MAIN_COLOR};
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 120px;
    font-style: normal;
    font-weight: 800;
    line-height: 120px; /* 100% */
    letter-spacing: -1.2px;
    text-transform: uppercase;
  }

  p {
    color: ${COLORS.MAIN_COLOR};
    font-family: "Almarai", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }

  @media (max-width: 800px) {
    padding: 60px 20px;

    span {
      font-size: 90px;
    }
    p {
      font-size: 16px;
    }
  }
`;
