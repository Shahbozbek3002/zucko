import { motion } from "framer-motion";

interface AnimatedZoomTextProps {
  textParts: string[];
  className?: string;
}

export const AnimatedZoomText = ({
  textParts,
  className,
}: AnimatedZoomTextProps) => {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      {textParts.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: "block" }}>
          {line.split("").map((char, i) => (
            <motion.span
              key={`${lineIndex}-${i}`}
              initial={{ opacity: 0, scaleY: 0, transformOrigin: "center" }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              style={{
                // display: "inline-block",
                // whiteSpace: "pre",
                willChange: "transform, opacity",
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};
