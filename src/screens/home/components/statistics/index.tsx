/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { StatisticsSection } from "./style";
import { Divider, Flex, Grid, Stack, Text } from "@mantine/core";
import { BreadText } from "@/styles/global";
import CountUp from "react-countup";
import { COLORS } from "@/constants/colors";

export const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countKey, setCountKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setCountKey((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef?.current);
      }
    };
  }, []);

  return (
    <StatisticsSection ref={sectionRef}>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6, md: 12 }}>
          <BreadText>/ In the numbers</BreadText>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6, md: 12 }}>
          <Stack w="100%">
            <Grid gutter={50}>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Flex direction="column" gap="16px">
                  <Flex>
                    {isVisible && <CountUp key={countKey} end={12} />}
                    <span>M</span>
                  </Flex>
                  <Divider color={COLORS.MAIN_COLOR} />
                  <Text>combined client valuation</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Flex direction="column" gap="16px">
                  <Flex>
                    {isVisible && <CountUp key={countKey + 1} end={14} />}
                  </Flex>
                  <Divider color={COLORS.MAIN_COLOR} />
                  <Text>products brought to market</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Flex direction="column" gap="16px">
                  <Flex>
                    {isVisible && <CountUp key={countKey + 2} end={32} />}
                    <span>+</span>
                  </Flex>
                  <Divider color={COLORS.MAIN_COLOR} />
                  <Text>Fortune 500 clients</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Flex direction="column" gap="16px">
                  <Flex>
                    {isVisible && <CountUp key={countKey + 3} end={100} />}
                    <span>+</span>
                  </Flex>
                  <Divider color={COLORS.MAIN_COLOR} />
                  <Text>accolades/awards</Text>
                </Flex>
              </Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>
      </Grid>
    </StatisticsSection>
  );
};
