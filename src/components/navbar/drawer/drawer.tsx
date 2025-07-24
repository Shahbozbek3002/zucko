import React from "react";
import { IconCloseXl } from "@/assets/icons/close-xl";
import { COLORS } from "@/constants/colors";
import { Divider, Drawer, Flex, Grid, Text } from "@mantine/core";
import Link from "next/link";
import { List, ListItem } from "./style";
import { useRouter } from "next/router";
import { CONTACTS, NAV_LINKS, SOCIAL_LINKS } from "./constants";
import { AnimatedButton } from "@/components/animate-button";
import { useViewportSize } from "@mantine/hooks";
import { IconLogo } from "@/assets/icons/logo";

interface DrawerProps {
  opened: boolean;
  close: () => void;
}

export const NavbarDrawer = ({ opened, close }: DrawerProps) => {
  const { pathname } = useRouter();
  const { width } = useViewportSize();
  const currentYear = new Date().getFullYear();

  return (
    <Drawer
      size="100%"
      h="100%"
      title=""
      position="top"
      opened={opened}
      onClose={close}
      transitionProps={{
        transition: "scale-y",
        duration: 250,
        timingFunction: "linear",
      }}
      withCloseButton={false}
      styles={{
        header: {
          backgroundColor: COLORS.MAIN_COLOR,
        },
        content: {
          backgroundColor: COLORS.MAIN_COLOR,
          overflow: width > 800 ? "hidden" : "auto",
        },
      }}
    >
      <Flex w="100%" justify="space-between" align="center" py="20px" px="35px">
        <IconLogo fill="#fff" />
        <div className="burger" onClick={close}>
          <IconCloseXl />
        </div>
      </Flex>
      <Grid px={35} py={50}>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <List>
            <Text mb="40px">/ Menu</Text>
            {NAV_LINKS.map((item) => {
              const isActive = item.links?.includes(pathname);
              return (
                <ListItem key={item.id}>
                  <Link
                    onClick={close}
                    href={item.link}
                    className={isActive ? "active" : ""}
                  >
                    {item.title}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }} data-aos="fade-left">
          <Grid gutter={25}>
            {CONTACTS.map((contact) => {
              return (
                <Grid.Col key={contact.id} span={{ base: 12, lg: 6 }}>
                  <List>
                    <Text mb="33px">{contact.header_name}</Text>
                    <ListItem className="contact">
                      <Link href={`mailto:${contact.email}`}>
                        {contact.email}
                      </Link>
                    </ListItem>
                    <ListItem className="contact">
                      <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
                    </ListItem>
                    <ListItem className="contact">
                      <Link href="">{contact.location}</Link>
                    </ListItem>
                  </List>
                </Grid.Col>
              );
            })}
          </Grid>
          <Divider my={40} />
          <Flex
            align={width > 800 ? "center" : "flex-start"}
            gap={width > 800 ? 30 : 15}
            direction={{ base: "column", lg: "row" }}
          >
            {SOCIAL_LINKS.map((v) => {
              return (
                <AnimatedButton
                  key={v.id}
                  hoverText={v.title}
                  defaultText={v.title}
                  onClick={() => {
                    window.open(v?.url, "_blank");
                  }}
                  color="#fff"
                />
              );
            })}
          </Flex>
          <Flex align="center" gap={30} mt={60}>
            <Text c={COLORS.MAIN_WHITE} size="18px" ff="Almarai">
              ⓒ {currentYear} Zucko Studio
            </Text>
            <Text c={COLORS.MAIN_WHITE} size="18px" ff="Almarai">
              All rights reserved
            </Text>
          </Flex>
        </Grid.Col>
      </Grid>
    </Drawer>
  );
};
