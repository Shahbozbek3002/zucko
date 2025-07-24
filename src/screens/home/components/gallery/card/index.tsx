import Image from "next/image";
import React from "react";
import { ImageContainer } from "./style";

interface ICardProps {
  image: string;
}

export const Card = ({ image }: ICardProps) => {
  return (
    <ImageContainer>
      <Image src={image} alt={image} priority />
    </ImageContainer>
  );
};
