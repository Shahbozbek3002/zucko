/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import type { ButtonProps } from "@mantine/core";
import { type ReactNode, useState, forwardRef } from "react";
import { COLORS } from "@/constants/colors";
import { ButtonWrapper, MotionIconWrapper, MotionText, Span } from "./style";

interface AnimatedButtonProps extends ButtonProps {
  defaultText: string;
  hoverText: string;
  rightSection?: ReactNode;
  color?: string;
}

export const AnimatedButton = forwardRef<
  HTMLButtonElement,
  AnimatedButtonProps & { onClick?: () => void }
>(
  ({
    defaultText,
    hoverText,
    rightSection,
    color = COLORS.MAIN_COLOR,
    ...props
  }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <ButtonWrapper
        {...props}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        textColor={color}
        bg="transparent"
        rightSection={
          rightSection ? (
            <MotionIconWrapper
              animate={{ rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {rightSection}
            </MotionIconWrapper>
          ) : undefined
        }
      >
        <MotionText
          animate={{ y: hovered ? "-100%" : "0%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Span>{defaultText}</Span>
          <Span>{hoverText}</Span>
        </MotionText>
      </ButtonWrapper>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
