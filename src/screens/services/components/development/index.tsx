import React from "react";
import { COLORS } from "@/constants/colors";
import { Grid, Stack, Text, Title } from "@mantine/core";
import { DEVELOPMENT } from "./constants";
import { Content, Left, Right } from "./style";
import Image from "next/image";
import { IconArrowUpRight } from "@/assets/icons/arrow-up-right";
import { useRouter } from "next/router";
import { AnimatedButton } from "@/components/animate-button";

export const Development = () => {
  const router = useRouter();

  return (
    <Stack p={{ base: "60px 20px", lg: "100px 50px" }} bg={COLORS.MAIN_WHITE}>
      <Grid gutter="50px" w="100%">
        {DEVELOPMENT.map((dev, i: number) => {
          const isEven = dev.id % 2 === 0;
          return (
            <Grid.Col
              span={{ base: 12, lg: 12, md: 12 }}
              key={dev.id}
              data-aos="fade-up"
            >
              <Content
                isEven={isEven}
                className={DEVELOPMENT.length !== i + 1 ? "last-content" : ""}
              >
                <Left>
                  <Stack gap="20px" align="center">
                    <Text>{dev.number}</Text>
                    <Title>{dev.name}</Title>
                    <Text>{dev.description}</Text>
                    <AnimatedButton
                      defaultText="View projects"
                      hoverText="View projects"
                      onClick={() => router.push(dev.link)}
                      rightSection={<IconArrowUpRight />}
                    />
                  </Stack>
                </Left>
                <Right>
                  <Image src={dev.image} alt={dev.name} />
                </Right>
              </Content>
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
};
