import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const Wrapper = styled("footer")`
  background-color: ${COLORS.MAIN_BACKGROUND};
  .footer-title {
    white-space: nowrap;
    color: ${COLORS.MAIN_COLOR};
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 320px;
    font-style: normal;
    font-weight: 800;
    line-height: 320px;
    text-transform: uppercase;
    padding-top: 10px;
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
    .footer-title {
      font-size: 120px;
      line-height: inherit;
    }
    .vector {
      width: 100px;
      height: 100px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const List = styled("ul")``;

export const ListItem = styled("li")`
  list-style: none;
  color: ${COLORS.MAIN_COLOR};
  font-family: "Almarai", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  text-transform: uppercase;

  @media (max-width: 800px) {
    line-height: inherit;
  }
`;
