import styled from "@emotion/styled";

export const List = styled("ul")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  a {
    color: var(--Colors-Brand-100, #e84511);
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
    cursor: pointer;
    &.active {
      color: rgb(29, 53, 50);
    }
  }

  @media (max-width: 800px) {
    a {
      font-size: 16px;
    }
  }
`;

export const FlexContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const Card = styled("div")`
  width: 50%;
  h1 {
    color: var(--Colors-Brand-100, #e84511);
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 100% */
    letter-spacing: -0.6px;
    text-transform: uppercase;
    margin-top: 30px;
  }

  p {
    color: var(--Colors-Brand-100, #e84511);
    font-feature-settings: "liga" off, "clig" off;
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    text-transform: uppercase;
    margin-bottom: 50px;
  }

  @media (max-width: 800px) {
    width: 100%;

    h1 {
      font-size: 40px;
      margin-top: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const ImageContainer = styled("div")`
  position: relative;
  overflow: hidden;
  height: 370px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;
  }

  &:hover::after {
    opacity: 1;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 2;
    pointer-events: none;
  }

  &:hover svg {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    height: auto;
  }
`;
