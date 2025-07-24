import { Content } from "@/styles/global";
import React from "react";
import { Hero } from "./components/hero";
import { Development } from "./components/development";

const ServiceScreen = () => {
  return (
    <>
      <Content>
        <Hero />
      </Content>
      <Development />
    </>
  );
};

export default ServiceScreen;
