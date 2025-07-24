import React from "react";
import { Header } from "./style";
import { Flex } from "@mantine/core";
import { IconLogo } from "@/assets/icons/logo";
import { IconBurger } from "@/assets/icons/burger";
import { useDisclosure } from "@mantine/hooks";
import { NavbarDrawer } from "./drawer/drawer";
import Link from "next/link";

export const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Header>
      <Flex w="100%" justify="space-between" align="center">
        <Link href="/">
          <IconLogo
            fill={opened ? "#fff" : "#E84511"}
            style={{ zIndex: 1100000 }}
          />
        </Link>
        <div onClick={open} className="burger">
          <IconBurger />
        </div>
      </Flex>
      <NavbarDrawer opened={opened} close={close} />
    </Header>
  );
};

// https://www.youtube.com/embed/smPos0mJvh8?si=u3Av6gTtoAKPnhLs?
