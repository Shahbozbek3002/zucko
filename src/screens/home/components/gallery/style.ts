import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const GallerySection = styled("section")`
  padding: 100px 0;
  background-color: #fff;
  p {
    padding: 0 50px 0 50px;
  }

  @media (max-width: 800px) {
    padding: 60px 0;
    p {
      padding: 0 20px 0 20px;
    }
  }
`;

export const CardWrapper = styled(motion.div)`
  display: flex;
  left: 0;
  gap: 50px;
  padding-top: 50px;
`;
