import React from "react";
import { SlugHero } from "../../components/slug-hero";
import MainBg from "@/assets/images/works/wave-care-app.avif";
import { Content } from "../../components/content";
import Image1 from "@/assets/images/works/wave-car-app/1.avif";
import Image2 from "@/assets/images/works/wave-car-app/2.avif";
import Image3 from "@/assets/images/works/wave-car-app/3.avif";
import Image4 from "@/assets/images/works/wave-car-app/4.webp";
import {
  FIVE_CHALLENGE,
  FIVE_LIST,
  FIVE_PROBLEM,
  FIVE_RIGHT_CONTENT,
  FIVE_SOLUTION,
} from "../../constants";
import { Card, FlexContainer, ImageContainer } from "./style";
import { PRODUCTS } from "@/constants/products";
import { IconPlus } from "@/assets/icons/plus";
import { Image, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";

const WaveCareAppScreen = () => {
  const router = useRouter();

  return (
    <>
      <SlugHero
        title="Wave Car App"
        breadCrumb="/ App Development / Interaction Design / Interface Design"
        bgImage={MainBg}
      />
      <Content
        leftContent={FIVE_LIST}
        rightContent={FIVE_RIGHT_CONTENT}
        problem={FIVE_PROBLEM}
        challenge={FIVE_CHALLENGE}
        solution={FIVE_SOLUTION}
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

export default WaveCareAppScreen;
