import React from "react";
import { Flex, Stack } from "@mantine/core";
import { BreadText } from "@/styles/global";
import { Content } from "./style";
import { BlurInUpCharacter } from "@/components/blur-text";
import { useViewportSize } from "@mantine/hooks";

interface Props {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: Props) => {
  const { width } = useViewportSize();

  return (
    <Stack gap="40px">
      <BreadText>/ works</BreadText>
      <Content>
        <BlurInUpCharacter
          text={title}
          delay={0.15}
          duration={0.8}
          characterClassName="hero-title"
        />
        <Flex w="100%" justify={{ base: "center", lg: "end" }}>
          <BlurInUpCharacter
            delay={0.15}
            duration={3}
            text={description}
            characterClassName="hero-description"
            width={width < 1200 ? "100%" : "50%"}
          />
        </Flex>
      </Content>
    </Stack>
  );
};
