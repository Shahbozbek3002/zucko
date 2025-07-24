import React from "react";
import { Divider, Flex, Grid, Group, Stack, Title } from "@mantine/core";
import { HeroSection } from "./style";
import { COLORS } from "@/constants/colors";
import { IconArrowUpRight } from "@/assets/icons/arrow-up-right";
import { AnimatedButton } from "@/components/animate-button";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { BreadText } from "@/styles/global";
import { AnimatedZoomText } from "@/components/animate-text/text";
import { HoverPlayImage } from "./image";
import { BlurInUpCharacter } from "@/components/blur-text";

export const Hero = () => {
  const router = useRouter();

  return (
    <HeroSection>
      <motion.div>
        <Stack gap="40px">
          <BreadText>/ Create</BreadText>
          <Title>
            <AnimatedZoomText
              textParts={["Engaging experiences", "from abstract ideas"]}
            />
          </Title>
          <Divider color={COLORS.MAIN_COLOR} mt={-20} />
          <Grid align="end">
            <Grid.Col span={{ base: 12, lg: 6, md: 12 }}>
              <HoverPlayImage />
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 6, md: 12 }}>
              <Flex direction="column" w="100%" gap="40px">
                <BlurInUpCharacter
                  text="We’re a brand and digital studio based in Miami, USA, offering complete solutions from concept to execution, to build, transform and leverage your business. We assist and educate our client in making the best use of the solutions we build with them."
                  delay={0.3}
                  duration={3}
                />
                <Group>
                  <AnimatedButton
                    defaultText="About us"
                    hoverText="About us"
                    rightSection={<IconArrowUpRight />}
                    onClick={() => router.push("/about")}
                  />
                  <AnimatedButton
                    defaultText="Say Hi!"
                    hoverText="Say Hi!"
                    rightSection={<IconArrowUpRight />}
                    onClick={() => router.push("/contacts")}
                  />
                </Group>
              </Flex>
            </Grid.Col>
          </Grid>
        </Stack>
      </motion.div>
    </HeroSection>
  );
};
