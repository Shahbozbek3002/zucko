import React from "react";
import { SlugHero } from "../../components/slug-hero";
import MainBg from "@/assets/images/works/fractal.avif";
import { Content } from "../../components/content";
import {
  SECOND_CHALLENGE,
  SECOND_LIST,
  SECOND_PROBLEM,
  SECOND_RIGHT_CONTENT,
  SECOND_SOLUTION,
} from "../../constants";
import Image1 from "@/assets/images/works/fractal/1.avif";
import Image2 from "@/assets/images/works/fractal/2.avif";
import Image3 from "@/assets/images/works/fractal/3.avif";
import Image4 from "@/assets/images/works/fractal/4.avif";
import { Card, FlexContainer, ImageContainer } from "./style";
import { PRODUCTS } from "@/constants/products";
import { IconPlus } from "@/assets/icons/plus";
import { Image, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";

const FractalScreen = () => {
  const router = useRouter();

  return (
    <>
      <SlugHero
        title="Fractal"
        breadCrumb="/ App Development / Interaction Design / UX Design"
        bgImage={MainBg}
      />
      <Content
        leftContent={SECOND_LIST}
        rightContent={SECOND_RIGHT_CONTENT}
        problem={SECOND_PROBLEM}
        challenge={SECOND_CHALLENGE}
        solution={SECOND_SOLUTION}
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

export default FractalScreen;
