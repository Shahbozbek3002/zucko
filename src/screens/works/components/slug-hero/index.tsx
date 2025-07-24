import React from "react";
import { Content, HeroSection } from "./style";
import { Stack, Text, Title } from "@mantine/core";

interface SlugHeroProps {
  title: string;
  breadCrumb: string;
  bgImage: { src: string };
}

export const SlugHero = ({ breadCrumb, title, bgImage }: SlugHeroProps) => {
  return (
    <HeroSection bg={bgImage.src}>
      <Content>
        <Stack gap="10px">
          <Text>{breadCrumb}</Text>
          <Title>{title}</Title>
        </Stack>
      </Content>
    </HeroSection>
  );
};
