import React, { Fragment } from "react";
import { ProjectsSection } from "./style";
import { BreadText } from "@/styles/global";
import { Divider, Flex, Grid, Text, Title } from "@mantine/core";
import { PROGRAMMING_DIRECTIONS } from "./constants";
import { AnimatedButton } from "@/components/animate-button";
import { IconArrowUpRight } from "@/assets/icons/arrow-up-right";
import { useRouter } from "next/router";

export const Projects = () => {
  const router = useRouter();

  return (
    <ProjectsSection>
      <Grid gutter={30} w="100%">
        <Grid.Col span={{ base: 12, lg: 6, md: 12 }}>
          <BreadText style={{ color: "#fff" }}>/ What we do</BreadText>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6, md: 12 }}>
          <Flex direction="column" gap="40px" w="100%">
            {PROGRAMMING_DIRECTIONS.map((dir) => {
              return (
                <Fragment key={dir.id}>
                  <Flex
                    gap={{ base: "10px", md: "30px" }}
                    direction={{ base: "column", md: "row" }}
                    data-aos="fade-left"
                  >
                    <Text className="numbers">0{dir.id}</Text>
                    <Title>{dir?.name}</Title>
                    <Flex direction="column" gap="15px">
                      <Text className="description">{dir.description}</Text>
                      <AnimatedButton
                        defaultText="View Projects"
                        hoverText="View Projects"
                        rightSection={<IconArrowUpRight />}
                        color="#fff"
                        onClick={() => router.push(dir.link)}
                      />
                    </Flex>
                  </Flex>
                  {dir.id !== PROGRAMMING_DIRECTIONS.length && <Divider />}
                </Fragment>
              );
            })}
          </Flex>
        </Grid.Col>
      </Grid>
    </ProjectsSection>
  );
};
