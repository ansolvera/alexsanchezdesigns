import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Container } from "./Container";
import Logo from "../images/asd-logo.svg";
import { Button } from "./Button";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const changeHeaderBackground = () => {
    if (window.scrollY >= 60) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  };
  useEffect(() => {
    changeHeaderBackground();
    window.addEventListener("scroll", changeHeaderBackground);
  });
  return (
    <Nav className={headerScroll ? "is-scrolled" : ""}>
      <NavContainer>
        <Brand to="/">
          <BrandLogo src={Logo} />
        </Brand>
        <NavLinks>
          <NavLink to="/">About Me</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/">Portfolio</NavLink>
          <NavLink to="/">Services</NavLink>
          <NavLink to="/">Contact</NavLink>
        </NavLinks>
        <NavButton primary="true" small="true" to="/">
          Get Started
        </NavButton>
        <NavBurger>
          <NavBurgerIcon />
        </NavBurger>
      </NavContainer>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 3.75rem;
  background: rgba(255, 255, 255, 0.9);

  &.is-scrolled {
    backdrop-filter: blur(15px);
  }
`;

const NavContainer = styled(Container)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: none;
  @media screen and (min-width: 64rem) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavButton = styled(Button)`
  display: none;

  @media screen and (min-width: 64rem) {
    display: inline-block;
  }
`;

const Brand = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandLogo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const NavLink = styled(Link)`
  padding: 0 1.25rem;
  color: var(--chateau);
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--azure);
  }
`;

const NavBurger = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 64rem) {
    display: none;
  }
`;

const NavBurgerIcon = styled(GoThreeBars)`
  width: 1.25rem;
  height: 1.25rem;
`;
