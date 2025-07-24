import React from "react";
import { Content } from "@/styles/global";
import { Hero } from "./components/main";
import { Clients } from "./components/clients";
import { Projects } from "./components/projects";
import { Statistics } from "./components/statistics";
import { ImageGallery } from "./components/gallery";
import { LatestWorks } from "./components/latest-works";

const HomeScreen = () => {
  return (
    <>
      <Content>
        <Hero />
      </Content>
      <LatestWorks />
      <Clients />
      <Projects />
      <Statistics />
      <ImageGallery />
    </>
  );
};

export default HomeScreen;
