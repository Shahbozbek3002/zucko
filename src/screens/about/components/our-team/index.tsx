import { COLORS } from "@/constants/colors";
import { BreadText } from "@/styles/global";
import { Grid, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { TEAM_MEMBERS } from "./constants";
import { Card } from "./style";
import Image from "next/image";

export const OurTeam = () => {
  return (
    <Stack p={{ base: "60px 20px", lg: "100px 50px" }} bg={COLORS.MAIN_WHITE}>
      <Grid gutter={{ base: "32px", lg: "24px" }}>
        <Grid.Col span={{ base: 12, lg: 3 }}>
          <BreadText style={{ color: COLORS.MAIN_COLOR }}>/ Our team</BreadText>
        </Grid.Col>
        {TEAM_MEMBERS.map((user) => {
          return (
            <Grid.Col key={user.id} span={{ base: 12, lg: 3, md: 4, sm: 6 }}>
              <Card>
                <Image src={user.image} alt={user.name} />
                <Title>{user.name}</Title>
                <Text>{user.profession}</Text>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
};
