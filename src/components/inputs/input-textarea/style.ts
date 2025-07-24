import { Textarea } from "@mantine/core";
import styled from "@emotion/styled";

export const MantineTextArea = styled(Textarea)`
  width: 100%;
  label {
    color: var(--black);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 8px;
  }
  textarea {
    border-radius: 30px;
    background: #fff;
    height: 60px;
    border: none;
    text-indent: 20px;
    color: var(--Colors-Base-dark, #1d3532);
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    &::placeholder {
      color: var(--Colors-Base-dark, #1d3532);
      font-family: "Almarai", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 150% */
      opacity: 0.5;
    }
  }
  .mantine-InputWrapper-error {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: var(--red-500);
    font-size: 12px;
  }
  @media (max-width: 576px) {
    margin: 8px 0;
    input {
      height: 44px;
      font-size: 12px;
      &::placeholder {
        font-size: 12px;
      }
    }
    label {
      font-size: 12px;
    }
  }
`;
