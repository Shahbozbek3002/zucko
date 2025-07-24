import React from "react";
import { List, ListItem, Wrapper } from "./style";
import { Flex, Grid, Stack, Text, Title } from "@mantine/core";
import { IconLogo } from "@/assets/icons/logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconVector } from "@/assets/icons/vector";

export const Footer = () => {
  const text = " We are Zucko ";
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <motion.div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{ display: "inline-flex" }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ marginRight: "40px" }}>
              <Title
                className="footer-title"
                style={{ display: "inline-block" }}
              >
                {text}
                <IconVector />
              </Title>
            </span>
          ))}
        </motion.div>
        <motion.div
          style={{ display: "inline-flex" }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <span key={i + 10} style={{ marginRight: "40px" }}>
              <Title
                className="footer-title"
                style={{ display: "inline-block" }}
              >
                {text}
                <IconVector />
              </Title>
            </span>
          ))}
        </motion.div>
      </motion.div>

      <Grid pt={0} p={{ base: "20px", md: "50px" }}>
        <Grid.Col span={{ base: 6, lg: 3, sm: 6, md: 6 }}>
          <Stack gap="5px">
            <IconLogo />
            <Text>ⓒ {currentYear} Zucko Studio</Text>
            <Text>All rights reserved</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 6, lg: 3, sm: 6, md: 6 }}>
          <List>
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/works">Works</Link>
            </ListItem>
            <ListItem>
              <Link href="/about">About</Link>
            </ListItem>
            <ListItem>
              <Link href="/services">Services</Link>
            </ListItem>
            <ListItem>
              <Link href="/contacts">Contacts</Link>
            </ListItem>
          </List>
        </Grid.Col>
        <Grid.Col span={{ base: 6, lg: 3, sm: 6, md: 6 }}>
          <List>
            <ListItem>
              <Link
                href="https://www.facebook.com/Saidmakhmud/"
                target="_blank"
              >
                facebook
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://twitter.com/x/migrate?tok=7b2265223a222f736169646d616b686d7564222c2274223a313733373632393439357d86d1cffdc9ac451151e00a3c3106e8fe"
                target="_blank"
              >
                X/Twitter
              </Link>
            </ListItem>
            <ListItem>
              <Link
                target="_blank"
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F"
              >
                Linkedin
              </Link>
            </ListItem>
            <ListItem>
              <Link target="_blank" href="https://www.behance.net/Saidmakhmud">
                Behance
              </Link>
            </ListItem>
            <ListItem>
              <Link target="_blank" href="https://dribbble.com/saidmakhmud">
                Dribbble
              </Link>
            </ListItem>
          </List>
        </Grid.Col>
        <Grid.Col span={{ base: 6, lg: 3, sm: 6, md: 6 }}>
          <Stack gap={10}>
            <Flex direction="column">
              <Text style={{ textTransform: "uppercase" }}>Miami</Text>
              <Text>794 Mcallister Street, Oak Harbor, FL 98277</Text>
            </Flex>
            <Flex direction="column">
              <Text style={{ textTransform: "uppercase" }}>Kuala Lumpur</Text>
              <Text>4636 Bombardier Way Sr, Worthington, 94102</Text>
            </Flex>
          </Stack>
        </Grid.Col>
      </Grid>
    </Wrapper>
  );
};
