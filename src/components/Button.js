import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
  display: inline-block;
  padding: ${(props) => (props.small ? "0.875rem 1.5rem" : "1.25rem 2.25rem")};
  border-radius: 50vw;
  background: ${(props) => (props.primary ? "var(--azure)" : "var(--white)")};
  background-image: ${(props) =>
    props.primary
      ? "linear-gradient(to bottom, var(--dodger), var(--azure))"
      : "linear-gradient(to bottom, var(--white), var(--chateau))"};
  box-shadow: ${(props) =>
    props.primary ? "var(--azureShadow)" : "var(--blackShadow)"};
  font-size: ${(props) => (props.small ? "0.875rem" : "1rem")};
  line-height: 1;
  font-weight: 500;
  color: ${(props) => (props.primary ? "var(--white)" : "var(--azure)")};
  text-decoration: none;
  outline: none;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  & + & {
    margin-left: 1.25rem;
  }
`;
