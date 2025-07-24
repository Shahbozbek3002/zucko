import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  position: relative;
  width: 300px;
  cursor: none;
`;

export const StaticText = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.position === "left" ? "left: 20px;" : "right: 20px;")}
  transform: translateY(-50%);
  z-index: 4;

  p {
    font-size: 24px;
    font-family: "Almarai", sans-serif;
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
