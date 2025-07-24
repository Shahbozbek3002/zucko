import React from "react";
import { SlugHero } from "../../components/slug-hero";
import MainBg from "@/assets/images/works/sport-collection.avif";
import { Content } from "../../components/content";
import {
  FIRST_CHALLENGE,
  FIRST_LIST,
  FIRST_PROBLEM,
  FIRST_RIGHT_CONTENT,
  FIRST_SOLUTION,
} from "../../constants";
import Image1 from "@/assets/images/works/sport-collection/1.avif";
import Image2 from "@/assets/images/works/sport-collection/2.avif";
import Image3 from "@/assets/images/works/sport-collection/3.avif";
import Image4 from "@/assets/images/works/sport-collection/4.avif";
import { useRouter } from "next/router";
import { Card, FlexContainer, ImageContainer } from "./style";
import { IconPlus } from "@/assets/icons/plus";
import { Image, Text, Title } from "@mantine/core";
import { PRODUCTS } from "@/constants/products";

const SportCollectionScreen = () => {
  const router = useRouter();

  return (
    <>
      <SlugHero
        title="Sports Collection"
        breadCrumb="/ Branding / Photography / Print Design"
        bgImage={MainBg}
      />
      <Content
        leftContent={FIRST_LIST}
        rightContent={FIRST_RIGHT_CONTENT}
        problem={FIRST_PROBLEM}
        challenge={FIRST_CHALLENGE}
        solution={FIRST_SOLUTION}
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

export default SportCollectionScreen;
