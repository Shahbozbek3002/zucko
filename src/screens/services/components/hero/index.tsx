import React from "react";
import { Flex, Stack } from "@mantine/core";
import { BreadText } from "@/styles/global";
import { Content } from "./style";
import { BlurInUpCharacter } from "@/components/blur-text";
import { useViewportSize } from "@mantine/hooks";

export const Hero = () => {
  const { width } = useViewportSize();

  return (
    <Stack gap="50px">
      <BreadText>/ Services</BreadText>
      <Content>
        <Stack gap={0} ta="center">
          <BlurInUpCharacter
            text="We only make digital products and services"
            delay={0.15}
            duration={2}
            characterClassName="hero-title"
          />
        </Stack>

        <Flex w="100%" justify={{ base: "center", lg: "end" }}>
          <BlurInUpCharacter
            text="You won’t find any beasts of burden at Zucko. What you will find is
            a wild and unstoppable force dedicated to strategic thinking, great
            design and technical finesse."
            delay={0.15}
            duration={3}
            characterClassName="hero-description"
            width={width < 1200 ? "100%" : "50%"}
          />
        </Flex>
      </Content>
    </Stack>
  );
};
