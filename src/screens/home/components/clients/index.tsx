import React from "react";
import { ClientsSection } from "./style";
import { Grid } from "@mantine/core";
import { BreadText } from "@/styles/global";
import { CLIENTS } from "./constants";
import { useViewportSize } from "@mantine/hooks";

export const Clients = () => {
  const { width } = useViewportSize();

  return (
    <ClientsSection>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6, md: 12 }} mb="20px">
          <BreadText component="p">/ clients we work with</BreadText>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6, md: 12 }}>
          <Grid gutter={30}>
            {CLIENTS.map(({ id, Icon }) => {
              return (
                <Grid.Col
                  key={id}
                  h={width < 800 ? 85 : 160}
                  span={{ base: 12, md: 12, lg: 6 }}
                >
                  <Icon />
                </Grid.Col>
              );
            })}
          </Grid>
        </Grid.Col>
      </Grid>
    </ClientsSection>
  );
};
