import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import {
  type PolymorphicComponentProps,
  Text,
  type TextProps,
} from "@mantine/core";

type StyledTextProps = PolymorphicComponentProps<"p", TextProps>;

export const Content = styled("div")`
  padding: 180px 50px 0 50px;

  @media (max-width: 800px) {
    padding: 180px 20px 0 20px;
  }
`;

export const BreadText = styled(Text)<StyledTextProps>`
  color: ${COLORS.MAIN_COLOR};
  font-family: "Almarai", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 16px !important;
  }
`;
