import React from "react";
import { SlugHero } from "../../components/slug-hero";
import MainBg from "@/assets/images/works/vision-prime.avif";
import { Content } from "../../components/content";
import Image1 from "@/assets/images/works/vision-prime/1.avif";
import Image2 from "@/assets/images/works/vision-prime/2.avif";
import Image3 from "@/assets/images/works/vision-prime/3.avif";
import Image4 from "@/assets/images/works/vision-prime/4.webp";
import {
  THIRD_CHALLENGE,
  THIRD_LIST,
  THIRD_PROBLEM,
  THIRD_RIGHT_CONTENT,
  THIRD_SOLUTION,
} from "../../constants";
import { Card, FlexContainer, ImageContainer } from "./style";
import { PRODUCTS } from "@/constants/products";
import { IconPlus } from "@/assets/icons/plus";
import { Image, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";

const VisionPrimeScreen = () => {
  const router = useRouter();

  return (
    <>
      <SlugHero
        title="Vision Prime"
        breadCrumb="/ UX/UI / Web Design / Interaction Design"
        bgImage={MainBg}
      />
      <Content
        leftContent={THIRD_LIST}
        rightContent={THIRD_RIGHT_CONTENT}
        problem={THIRD_PROBLEM}
        challenge={THIRD_CHALLENGE}
        solution={THIRD_SOLUTION}
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

export default VisionPrimeScreen;
