import React from "react";
import { Content } from "@/styles/global";
import { Hero } from "./components/hero";
import { Map } from "./components/map";
import { ContactDetails } from "./components/contact-details";
import { FeedbackForm } from "./components/feedback-form";

const ContactScreen = () => {
  return (
    <>
      <Content>
        <Hero />
      </Content>
      <ContactDetails />
      <Map />
      <FeedbackForm />
    </>
  );
};

export default ContactScreen;
