import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const ProjectsSection = styled("section")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 50px;
  background-color: ${COLORS.MAIN_BACKGROUND};
  svg {
    path {
      stroke: #fff;
    }
  }

  h1 {
    color: ${COLORS.MAIN_COLOR};
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 90px;
    font-style: normal;
    font-weight: 800;
    line-height: 90px;
    letter-spacing: -0.9px;
    text-transform: uppercase;
    min-width: 300px;
  }

  .numbers {
    color: ${COLORS.MAIN_COLOR};
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
  }
  .description {
    color: ${COLORS.MAIN_COLOR};
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

  .hr {
    background-color: ${COLORS.MAIN_COLOR};
  }

  @media (max-width: 800px) {
    padding: 60px 20px;
    flex-direction: column;

    .flex-container {
      margin-top: 40px;
    }

    h1 {
      font-size: 56px;
    }
  }
`;

export const Left = styled("div")`
  min-width: 280px;
  p {
    color: ${COLORS.MAIN_COLOR} !important;
  }
`;
