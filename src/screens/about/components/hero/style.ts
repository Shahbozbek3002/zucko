/* eslint-disable @typescript-eslint/no-explicit-any */
import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { Button, Text, Title } from "@mantine/core";

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 20px;
  min-height: 400px;

  .hero-description {
    color: ${COLORS.MAIN_COLOR};
    font-family: "Almarai", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;

    & > span:first-child {
      margin-left: 50px;
    }

    @media (max-width: 992px) {
      font-size: 18px;
      text-align: justify;
      line-height: 1.3;
    }
  }

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
  @media (max-width: 992px) {
    justify-content: flex-start;
    min-height: auto;
    gap: 20px;
  }
`;

export const RightColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  height: 100%;
  min-height: 400px;
`;

export const AboutText = styled<any>(Text)`
  color: ${COLORS.MAIN_COLOR};
  font-family: "Almarai", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  text-transform: uppercase;
`;

export const DescriptionText = styled(Title)`
  color: ${COLORS.MAIN_COLOR};
  font-family: "Almarai", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;

  & > span:first-child {
    margin-left: 50px;
  }

  @media (max-width: 992px) {
    font-size: 18px;
    text-align: justify;
    line-height: 1.3;
  }
`;

export const ShowReelText = styled(Title)`
  position: absolute;
  font-size: 84px;
  color: #fff;
  font-weight: 900;
  text-align: center;

  &.left {
    left: 0;
  }
  &.right {
    right: 25px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const PlayButton = styled<any>(Button)`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

interface ImageWrapperProps {
  bg: string;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
`;
