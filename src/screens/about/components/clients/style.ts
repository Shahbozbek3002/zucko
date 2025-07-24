import styled from "@emotion/styled";

export const ClientsSection = styled("section")`
  padding: 100px 50px 0 50px;
  background-color: #fff;
  svg {
    opacity: 0.8;
  }

  @media (max-width: 800px) {
    padding: 60px 20px 0 20px;
  }
`;

export const Left = styled("div")`
  width: 50%;
`;
export const Right = styled("div")`
  width: 50%;
`;
