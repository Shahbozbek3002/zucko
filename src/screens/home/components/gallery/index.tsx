/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from "react";
import { CardWrapper, GallerySection } from "./style";
import { BreadText } from "@/styles/global";
import { Card } from "./card";
import IconCarousel1 from "@/assets/images/carousel-1.svg";
import IconCarousel2 from "@/assets/images/carousel-2.svg";
import IconCarousel3 from "@/assets/images/carousel-3.svg";
import IconCarousel4 from "@/assets/images/carousel-4.svg";
import useMeasure from "react-use-measure";
import { animate, useMotionValue } from "framer-motion";

const IMAGES = [IconCarousel1, IconCarousel2, IconCarousel3, IconCarousel4];

export const ImageGallery = () => {
  const FAST_DURATION = 10;
  const SLOW_DURATION = 750;
  const [ref, { width }] = useMeasure();
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 4;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <GallerySection>
      <BreadText>/ We’re social</BreadText>
      <CardWrapper
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...IMAGES, ...IMAGES].map((image, index: number) => {
          return <Card key={index} image={image} />;
        })}
      </CardWrapper>
    </GallerySection>
  );
};
