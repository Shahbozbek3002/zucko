/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import Podium from "@/assets/images/works/podium.png";
import VisionPrime from "@/assets/images/works/vision-prime.avif";
import WaveCareApp from "@/assets/images/works/wave-care-app.png";
import Fractal from "@/assets/images/works/fractal.avif";
import { Content, Section } from "./style";
import { BreadText } from "@/styles/global";
import { Flex, Title } from "@mantine/core";
import { AnimatedButton } from "@/components/animate-button";
import { IconArrowUpRight } from "@/assets/icons/arrow-up-right";
import { useRouter } from "next/router";

const backgroundImages = [
  Podium.src,
  VisionPrime.src,
  WaveCareApp.src,
  Fractal.src,
];

const words = ["PODIUM AW23", "VISION PRIME", "WAVE CAR APP", "FRACTAL"];

export const LatestWorks = () => {
  const router = useRouter();
  const [bgImage, setBgImage] = useState<string>(Podium.src);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRefs.current) return;

      const centerY = window.innerHeight / 2;

      const distances = titleRefs.current.map((el, idx) => {
        if (!el) return { idx, distance: Infinity };
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - centerY);
        return { idx, distance };
      });

      const closest = distances.reduce((prev, curr) =>
        curr.distance < prev.distance ? curr : prev
      );

      if (closest.idx !== activeIndex) {
        setActiveIndex(closest.idx);
        setBgImage(backgroundImages[closest.idx]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <Section bgImage={bgImage}>
      <BreadText style={{ color: "#fff" }}>/ Latest Works</BreadText>
      <Content ref={contentRef}>
        {words.map((word, index) => (
          <Title
            key={word}
            ref={(el) => (titleRefs.current[index] = el)}
            style={{
              color: activeIndex === index ? "#fff" : "#ffffff80",
              opacity: activeIndex === index ? 1 : 0.5,
              transition: "all 0.3s ease-in-out",
            }}
          >
            {word}
          </Title>
        ))}
      </Content>
      <Flex justify="flex-end">
        <AnimatedButton
          defaultText="All works"
          hoverText="All works"
          rightSection={<IconArrowUpRight stroke="#fff" />}
          onClick={() => router.push("/works/all")}
          color="#fff"
        />
      </Flex>
    </Section>
  );
};
