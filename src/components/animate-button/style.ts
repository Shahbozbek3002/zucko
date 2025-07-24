import styled from "@emotion/styled";
import { Button, type ButtonProps } from "@mantine/core";
import { motion } from "framer-motion";

interface StyledButtonProps extends ButtonProps {
  textColor: string;
}

export const ButtonWrapper = styled(Button)<StyledButtonProps>`
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  padding: 0;
  background: transparent;
  font-family: "Almarai", sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  height: 40px;
  display: flex;
  align-items: center;
  font-weight: 400;
  color: ${(props) => props.textColor} !important;
`;

export const TextContainer = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
`;

export const MotionText = motion(TextContainer);

export const Span = styled.span`
  height: 40px;
  line-height: 40px;
  display: block;
`;

export const MotionIconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
