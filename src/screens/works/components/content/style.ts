import styled from "@emotion/styled";

export const Wrapper = styled("section")`
  padding: 100px 50px;
  background-color: #fff;

  h3,
  p {
    color: #e84511;
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
  }

  p {
    text-transform: inherit;
  }

  h2 {
    color: #e84511;
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
  }

  img {
    width: 100%;
  }

  @media (max-width: 800px) {
    padding: 60px 20px;
  }
`;

export const List = styled("ul")``;

export const ListItem = styled("li")`
  color: #e84511;
  font-family: "Almarai", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 125% */
`;
