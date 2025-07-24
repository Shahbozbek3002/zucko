import { type ReactNode } from "react";
import styled from "@emotion/styled";
import { Button } from "@mantine/core";

interface IButtonProps {
  children: ReactNode;
  bg: string;
  rightSection: ReactNode;
}

export const CustomButton = styled(Button)<IButtonProps>`
  border: 1px solid transparent;
  text-align: right;
  font-family: "Almarai", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
`;
