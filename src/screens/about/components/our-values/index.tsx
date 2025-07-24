import React, { Fragment } from "react";
import { Left, ProjectsSection } from "./style";
import { BreadText } from "@/styles/global";
import { Divider, Flex, Text, Title } from "@mantine/core";
import { PROGRAMMING_DIRECTIONS } from "./constants";
import { COLORS } from "@/constants/colors";

export const OurValues = () => {
  return (
    <ProjectsSection>
      <Left>
        <BreadText style={{ color: "#fff" }}>/ our values</BreadText>
      </Left>
      <Flex direction="column" gap="40px" className="flex-container">
        {PROGRAMMING_DIRECTIONS.map((dir) => {
          return (
            <Fragment key={dir.id}>
              <Flex
                data-aos="fade-left"
                gap={{ base: "26px", lg: "30px" }}
                direction={{ base: "column", md: "row" }}
              >
                <Text className="numbers">0{dir.id}</Text>
                <Title>{dir?.name}</Title>
                <Flex direction="column" gap="15px">
                  <Text className="description">{dir.description}</Text>
                </Flex>
              </Flex>
              {dir.id !== PROGRAMMING_DIRECTIONS.length && (
                <Divider className="hr" color={COLORS.MAIN_COLOR} />
              )}
            </Fragment>
          );
        })}
      </Flex>
    </ProjectsSection>
  );
};
