"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IconHeroImage from "@/assets/images/hero-image.svg";
import { PlayButton } from "./style";
import { Text, Modal } from "@mantine/core";
import { COLORS } from "@/constants/colors";
import {
  Wrapper,
  StaticText,
  PlayButtonCenterWrapper,
  FloatingPlayButton,
} from "./image.style";
import Image from "next/image";

export const HoverPlayImage = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorCoords, setCursorCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [opened, setOpened] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setHovered(false);
    setOpened(true);
  };

  return (
    <>
      <Wrapper
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <Image
          src={IconHeroImage}
          alt="hero-image"
          priority
          style={{ width: "100%", height: "100%" }}
        />
        <StaticText position="left">
          <Text
            fw={600}
            size="24px"
            c={COLORS.MAIN_COLOR}
            style={{ pointerEvents: "none" }}
          >
            Show
          </Text>
        </StaticText>
        <StaticText position="right">
          <Text
            fw={600}
            size="24px"
            c={COLORS.MAIN_COLOR}
            style={{ pointerEvents: "none" }}
          >
            reel
          </Text>
        </StaticText>

        <AnimatePresence>
          {!hovered && (
            <PlayButtonCenterWrapper
              key="center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="circle">
                <PlayButton>▶</PlayButton>
              </div>
            </PlayButtonCenterWrapper>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {hovered && (
            <FloatingPlayButton
              key="hover"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                top: cursorCoords.y,
                left: cursorCoords.x,
              }}
            >
              <PlayButton>▶</PlayButton>
            </FloatingPlayButton>
          )}
        </AnimatePresence>
      </Wrapper>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)} // Bu ishlashi uchun modal overlay kerak
        centered
        withCloseButton={false}
        padding={0}
        radius={0}
        size="auto"
        overlayProps={{
          blur: 4,
          backgroundOpacity: 0.75,
        }}
        styles={{
          content: {
            background: "transparent",
            boxShadow: "none",
            padding: 0,
            overflow: "visible",
          },
          inner: {
            padding: 0,
          },
        }}
      >
        {/* Diqqat: onClick bu yerda kerak emas */}
        <div
          style={{
            position: "relative",
            width: "80vw",
            maxWidth: "1000px",
            paddingBottom: "56.25%",
            height: 0,
          }}
          onClick={() => setOpened(false)}
        >
          <iframe
            src="https://www.youtube.com/embed/smPos0mJvh8?autoplay=1"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </Modal>
    </>
  );
};
