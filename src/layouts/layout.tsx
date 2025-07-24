import React from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { LayoutProps } from "@/types/layout";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
