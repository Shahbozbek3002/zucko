import React from "react";
import { SlugHero } from "../../components/slug-hero";
import MainBg from "@/assets/images/works/podium-aw23.avif";
import { Content } from "../../components/content";
import Image1 from "@/assets/images/works/podium-aw23/1.avif";
import Image2 from "@/assets/images/works/podium-aw23/2.avif";
import Image3 from "@/assets/images/works/podium-aw23/3.webp";
import Image4 from "@/assets/images/works/podium-aw23/4.webp";
import {
  FOUR_RIGHT_CONTENT,
  FOURTH_CHALLENGE,
  FOURTH_LIST,
  FOURTH_PROBLEM,
  FOURTH_SOLUTION,
} from "../../constants";
import { Card, FlexContainer, ImageContainer } from "./style";
import { PRODUCTS } from "@/constants/products";
import { IconPlus } from "@/assets/icons/plus";
import { Image, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";

const PodiumAw23Screen = () => {
  const router = useRouter();

  return (
    <>
      <SlugHero
        title="Podium AW23"
        breadCrumb="/ Branding / Photography / SMD"
        bgImage={MainBg}
      />
      <Content
        leftContent={FOURTH_LIST}
        rightContent={FOUR_RIGHT_CONTENT}
        problem={FOURTH_PROBLEM}
        challenge={FOURTH_CHALLENGE}
        solution={FOURTH_SOLUTION}
        images={[
          { src: Image1.src, alt: "problem image" },
          { src: Image2.src, alt: "challenge image" },
          { src: Image3.src, alt: "solution image" },
          { src: Image4.src, alt: "final image" },
        ]}
      />
      <FlexContainer>
        {PRODUCTS.map((product) => {
          return (
            <Card key={product.id} onClick={() => router.push(product.link)}>
              <ImageContainer>
                <Image src={product.image.src} alt={product.name} />
                <IconPlus />
              </ImageContainer>
              <Title>{product.name}</Title>
              <Text>{product.category}</Text>
            </Card>
          );
        })}
      </FlexContainer>
    </>
  );
};

export default PodiumAw23Screen;
