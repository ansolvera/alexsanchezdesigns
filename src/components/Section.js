import * as React from "react";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  padding: ${(props) => (props.small ? "1.875rem" : "3.125rem")};

  @media screen and (min-width: 64rem) {
    padding: ${(props) => (props.small ? "3.75rem" : "6.25rem")};
  }
`;
