import styled from "@emotion/styled";

export const Card = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  h1 {
    color: var(--Colors-Brand-100, #e84511);
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px; /* 100% */
    letter-spacing: -0.4px;
    text-transform: uppercase;
    margin-top: 15px;
  }
`;
