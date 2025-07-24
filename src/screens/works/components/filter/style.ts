import styled from "@emotion/styled";

export const List = styled("ul")`
  display: flex;
  align-items: center;
  gap: 40px;
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
  }
`;
