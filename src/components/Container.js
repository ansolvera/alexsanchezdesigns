import * as React from "react";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;

  @media screen and (max-width: 39.937rem) {
    width: 100%;
    padding: 0 1rem;
  }

  @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
    max-width: 40rem;
    padding: 0 2rem;
  }

  @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
    max-width: 48rem;
    padding: 0 3rem;
  }

  @media screen and (min-width: 64rem) and (max-width: 79.9375rem) {
    max-width: 64rem;
    padding: 0 4rem;
  }

  @media screen and (min-width: 80rem) and (max-width: 95.9375rem) {
    max-width: 80rem;
    padding: 0 5rem;
  }

  @media screen and (min-width: 96rem) {
    max-width: 96rem;
    padding: 0 6rem;
  }
`;
