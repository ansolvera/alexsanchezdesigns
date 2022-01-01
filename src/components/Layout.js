import * as React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/shadows-into-light";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
  margin-top: 3.75rem;
`;
