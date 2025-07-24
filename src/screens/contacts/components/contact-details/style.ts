import styled from "@emotion/styled";

export const Left = styled("div")``;

export const Right = styled("ul")`
  display: flex;
  gap: 40px;
  width: 50%;
  .stack {
    gap: 20px;
  }
  li,
  .hero-title {
    list-style: none;
    color: var(--Colors-Brand-100, #e84511);
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    text-transform: uppercase;
    &:first-of-type {
      margin-left: 0;
    }
  }

  @media (max-width: 1200px) {
    li {
      font-size: 18px;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;

    li {
      font-size: 16px;
    }

    .stack {
      gap: 10px;
    }
  }
`;
