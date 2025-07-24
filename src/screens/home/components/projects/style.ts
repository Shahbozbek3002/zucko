import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const ProjectsSection = styled("section")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 50px;
  background-color: ${COLORS.MAIN_COLOR};
  svg {
    path {
      stroke: #fff;
    }
  }

  h1 {
    color: #fff;
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 90px;
    font-style: normal;
    font-weight: 800;
    line-height: 90px;
    letter-spacing: -0.9px;
    text-transform: uppercase;
  }

  .numbers {
    color: #fff;
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
  }
  .description {
    color: #fff;
    font-family: "Almarai", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }
  button {
    padding: 0;
    width: fit-content;
  }

  @media (max-width: 800px) {
    padding: 60px 20px;

    h1 {
      font-size: 56px;
    }
    .description,
    .numbers {
      font-size: 16px;
      line-height: 1.3;
    }
  }
`;
