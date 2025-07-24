import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";

export const Left = styled("div")`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const Right = styled("div")`
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Content = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 50px;
  border-bottom: 1px solid transparent;
  padding-bottom: 50px;

  &.last-content {
    border-bottom: 1px solid ${COLORS.MAIN_COLOR};
  }

  ${({ isEven }: { isEven: boolean }) =>
    isEven
      ? `
        flex-direction: row;
        & > div:first-of-type {
          order: 2; 
        }
        & > div:last-of-type {
          order: 1; 
        }
      `
      : `
        flex-direction: row;
        & > div:first-of-type {
          order: 1; 
        }
        & > div:last-of-type {
          order: 2; 
        }
      `}

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;

    & > div:first-of-type {
      order: 1;
    }
    & > div:last-of-type {
      order: 2;
    }
  }

  p {
    color: var(--Colors-Brand-100, #e84511);
    text-align: center;
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
  }

  h1 {
    color: var(--Colors-Brand-100, #e84511);
    text-align: center;
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 60px;
    letter-spacing: -0.6px;
    text-transform: uppercase;
  }

  button {
    border-radius: 30px;
    color: var(--Colors-Brand-100, #e84511) !important;
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    text-transform: uppercase;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 1200px) {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
      line-height: 1.1;
    }
  }
`;
