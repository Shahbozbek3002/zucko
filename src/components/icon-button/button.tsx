import React from "react";
import { IconArrowUpRight } from "@/assets/icons/arrow-up-right";
import { CustomButton } from "./style";
import type { ButtonProps } from "@mantine/core";

interface IconButtonProps extends ButtonProps {
  text?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  text = "About us",
  ...props
}) => {
  return (
    <CustomButton
      {...props}
      bg="transparent"
      rightSection={<IconArrowUpRight />}
    >
      {text}
    </CustomButton>
  );
};
