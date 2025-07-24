import React from "react";
import { SlugHero } from "../../components/slug-hero";
import MainBg from "@/assets/images/works/coreai.avif";
import { Content } from "../../components/content";
import Image1 from "@/assets/images/works/coreai/1.avif";
import Image2 from "@/assets/images/works/coreai/2.avif";
import Image3 from "@/assets/images/works/coreai/3.avif";
import Image4 from "@/assets/images/works/coreai/4.avif";
import {
  SIX_CHALLENGE,
  SIX_LIST,
  SIX_PROBLEM,
  SIX_RIGHT_CONTENT,
  SIX_SOLUTION,
} from "../../constants";
import { Card, FlexContainer, ImageContainer } from "./style";
import { PRODUCTS } from "@/constants/products";
import { IconPlus } from "@/assets/icons/plus";
import { Image, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";

const CoreAIScreen = () => {
  const router = useRouter();

  return (
    <>
      <SlugHero
        title="CoreAI"
        breadCrumb="/ Development / Interaction Design / Interface Design"
        bgImage={MainBg}
      />
      <Content
        leftContent={SIX_LIST}
        rightContent={SIX_RIGHT_CONTENT}
        problem={SIX_PROBLEM}
        challenge={SIX_CHALLENGE}
        solution={SIX_SOLUTION}
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

export default CoreAIScreen;
