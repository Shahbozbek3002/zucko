import React from "react";
import { ClientsSection, Left, Right } from "./style";
import { Flex, Grid } from "@mantine/core";
import { BreadText } from "@/styles/global";
import { CLIENTS } from "./constants";
import { useViewportSize } from "@mantine/hooks";

export const Clients = () => {
  const { width } = useViewportSize();

  return (
    <ClientsSection>
      <Flex
        justify="space-between"
        align="flex-start"
        direction={{ base: "column", lg: "row" }}
        gap={50}
      >
        <Left>
          <BreadText component="p">/ clients we work with</BreadText>
        </Left>
        <Right>
          <Grid gutter={30}>
            {CLIENTS.map(({ id, Icon }) => {
              return (
                <Grid.Col
                  span={{ base: 12, lg: 6 }}
                  key={id}
                  h={width > 800 ? "160px" : "100px"}
                >
                  <Icon />
                </Grid.Col>
              );
            })}
          </Grid>
        </Right>
      </Flex>
    </ClientsSection>
  );
};
