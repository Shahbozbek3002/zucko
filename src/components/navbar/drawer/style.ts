import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const List = styled(motion.ul)`
  padding: 0;
  margin: 0;
  p {
    color: #fff;
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    text-transform: uppercase;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  border: none;
  outline: none;
  a {
    border: none;
    outline: none;
    color: #fff;
    font-family: "Big Shoulders Display", sans-serif;
    font-size: 90px;
    font-style: normal;
    font-weight: 800;
    line-height: 90px;
    letter-spacing: -0.9px;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    display: inline-block;
    transition: transform 0.5s ease;
    &::before {
      content: "";
      position: absolute;
      left: -100px;
      top: 50%;
      transform: translateY(-50%) scaleX(0);
      transform-origin: left;
      height: 2px;
      width: 80px;
      background-color: #fff;
      transition: transform 0.5s ease;
    }

    &:hover {
      transform: translateX(100px);
    }

    &:hover::before {
      transform: translateY(-50%) scaleX(1);
    }
    &.active {
      transform: translateX(100px);
    }

    &.active::before {
      transform: translateY(-50%) scaleX(1);
    }
  }
  &.contact {
    padding: 12px 0;
    a {
      color: ${COLORS.MAIN_WHITE};
      font-size: 40px;
      font-style: normal;
      font-weight: 800;
      line-height: 40px;
      letter-spacing: -0.4px;
      text-transform: uppercase;
      &:hover {
        transform: inherit;
      }
      &::before {
        content: "";
        position: inherit;
      }
    }
  }

  @media (max-width: 1200px) {
    a {
      font-size: 80px;
      line-height: 80px;
    }
  }
  @media (max-width: 800px) {
    a {
      font-size: 56px;
      line-height: 1.1;
    }
  }
`;
