import React from "react";
import { List, ListItem, Wrapper } from "./style";
import { Grid, Image, Stack, Text, Title } from "@mantine/core";
import type { ContentProps } from "@/types/content";

export const Content = ({
  leftContent = [],
  rightContent = [],
  problem = [],
  challenge = [],
  solution = [],
  images = [],
}: ContentProps) => {
  return (
    <Wrapper>
      <Stack gap="50px">
        <Grid align="flex-end">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="30px">
              {leftContent?.map((item) => {
                return (
                  <Stack gap="3px" key={item.id}>
                    <Title order={3}>{item.title}</Title>
                    <Text>{item.breadCrumb}</Text>
                  </Stack>
                );
              })}
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap={20}>
              {rightContent?.map((right) => {
                return (
                  <Title order={2} key={right.id}>
                    {right.title}
                  </Title>
                );
              })}
            </Stack>
          </Grid.Col>
        </Grid>
        {images?.[0] && <Image src={images?.[0].src} alt={images?.[0].alt} />}
        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Title order={2}>/ The problem</Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <List>
              {problem.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                );
              })}
            </List>
          </Grid.Col>
        </Grid>
        {images?.[1] && <Image src={images?.[1].src} alt={images?.[1].alt} />}
        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Title order={2}>/ The Challenge</Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <List>
              {challenge.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                );
              })}
            </List>
          </Grid.Col>
        </Grid>
        {images?.[2] && <Image src={images?.[2].src} alt={images?.[2].alt} />}
        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Title order={2}>/ The solution</Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <List>
              {solution.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                );
              })}
            </List>
          </Grid.Col>
        </Grid>
        {images?.[3] && <Image src={images?.[3].src} alt={images?.[3].alt} />}
      </Stack>
    </Wrapper>
  );
};
