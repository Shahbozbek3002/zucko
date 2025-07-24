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
      <BreadText>/ Contacts</BreadText>
      <Content>
        <Stack ta="center" gap={0}>
          <BlurInUpCharacter
            text="Get in Touch"
            delay={0.1}
            duration={1}
            characterClassName="hero-title"
          />
        </Stack>

        <Flex w="100%" justify="flex-end">
          <BlurInUpCharacter
            text="With our forte in creative direction, photography, film
            and art direction, your vision becomes an adventure we embark on as
            Zucko to bring to life. Just like finding the perfect pair of jeans,
            no creative solution is one-size-fits-all and we’re all ears."
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
