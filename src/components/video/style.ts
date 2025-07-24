import { COLORS } from "@/constants/colors";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, type ButtonProps } from "@mantine/core";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  position: relative;
  cursor: none;
  width: 100%;
  height: 100%;
`;

export const StaticText = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.position === "left" ? "left: 25%;" : "right: 28%;")}
  transform: translateY(-50%);
  z-index: 4;

  p {
    font-size: 24px;
    font-family: "Almarai", sans-serif;
  }

  @media (max-width: 600px) {
    ${(props) => (props.position === "left" ? "left: 20px;" : "right: 20px;")}
  }
`;

export const PlayButtonCenterWrapper = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 5;
  border: 1px solid white;
  border-radius: 50%;
  width: 102px;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
  .circle {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    opacity: 0.95;
  }
`;

export const FloatingPlayButton = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 5;
  border: 1px solid white;
  border-radius: 50%;
  width: 102px;
  height: 102px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

export const PlayButton = styled(Button)<ButtonProps>`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff !important;
  color: ${COLORS.MAIN_COLOR};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pulse} 3s ease-in-out infinite;
  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;
