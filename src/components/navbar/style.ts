import styled from "@emotion/styled";

export const Header = styled("header")`
  width: 100%;
  position: fixed;
  z-index: 10;
  padding: 35px 50px 0 50px;
  a {
    cursor: pointer;
  }
  .burger {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    padding: 20px 20px 0 20px;
  }
`;

export const StyledBurger = styled.div`
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    background: #fff;
    margin: 5px 0;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
    transform-origin: center;
  }

  &.opened {
    span:nth-of-type(1) {
      transform: translateY(8px) rotate(45deg);
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:nth-of-type(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;
