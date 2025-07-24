import React from "react";
import { Hero } from "./components/hero";
import { Content } from "@/styles/global";
import { Awards } from "./components/awards";
import { OurStory } from "./components/our-story";
import { Clients } from "./components/clients";
import { OurValues } from "./components/our-values";
import { OurTeam } from "./components/our-team";

const AboutScreen = () => {
  return (
    <>
      <Content>
        <Hero />
      </Content>
      <Awards />
      <OurStory />
      <Clients />
      <OurValues />
      <OurTeam />
    </>
  );
};

export default AboutScreen;
