import React from "react";
import Image from "next/image";
import { Left, Right, Wrapper } from "./style";
import { Stack, Text, Title } from "@mantine/core";
import CompanyImage from "@/assets/images/about/1.png";
import { BreadText } from "@/styles/global";

export const OurStory = () => {
  return (
    <Wrapper>
      <Left>
        <BreadText>/ Our story</BreadText>
        <Image src={CompanyImage} alt="company-image" />
      </Left>
      <Right>
        <Stack gap={0} className="stack">
          <Text>
            <span>Zucko is a creative collective of design</span> artisans
            dedicated to bringing your visions to life, using visual and graphic
            storytelling as one of our main tools. Our shared goal is to harness
            the power of creativity to elevate your brand.
          </Text>
          <Text>
            <span>“Design that moves” has been our </span> signature tagline for
            years, and it perfectly describes our ethos as a design studio. We
            are constantly moving forward, looking for ways to out-do what we
            did last, always in competition with ourselves, making sure every
            piece of work we send to a client is polished, visually stunning and
            worthy of becoming part of our portfolio — and this applies for all
            the branches of design and creativity we deal with on a daily basis
          </Text>
        </Stack>
        <Title>
          We understand that the pursuit of brilliance is not a destination but
          a journey, and we want you to come with us
        </Title>
      </Right>
    </Wrapper>
  );
};
