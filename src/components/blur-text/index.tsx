/* eslint-disable react/display-name */
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { memo } from "react";
import { COLORS } from "@/constants/colors";

interface CharacterProps {
  isFirst?: boolean;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
  textTransform?: string;
  lineHeight?: string;
  fontFamily?: string;
}

interface BlurInUpCharacterProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  characterStyle?: Partial<CharacterProps>;
  characterClassName?: string;
  width?: string;
}

const Character = styled(motion.span)<CharacterProps>`
  color: ${(props) => props.color || COLORS.MAIN_COLOR};
  font-family: ${(props) => props.fontFamily || "'Almarai', sans-serif"};
  font-size: ${(props) => props.fontSize || "24px"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineHeight || "30px"};
  text-transform: ${(props) => props.textTransform || "uppercase"};
  ${(props) => props.isFirst && "margin-left: 50px;"}
`;

export const BlurInUpCharacter = memo(
  ({
    text,
    delay = 0,
    duration = 0.5,
    className,
    characterStyle,
    characterClassName,
    width,
  }: BlurInUpCharacterProps) => {
    const characters = text.split("");

    return (
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: duration / characters.length,
              delayChildren: delay,
            },
          },
        }}
        className={className}
        style={{ display: "inline-block", width: width }}
      >
        {characters.map((char, i) => (
          <Character
            key={`${char}-${i}`}
            isFirst={i === 0}
            {...characterStyle}
            className={characterClassName}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              },
            }}
          >
            {char}
          </Character>
        ))}
      </motion.div>
    );
  }
);
