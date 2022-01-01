import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <Section>
        <HeroContainer>
          <div></div>
          <HeroRight>
            <HeroHeading>
              Hey! 👋🏼 I'm Alex, and I'm a{" "}
              <ScriptText>product designer</ScriptText>
            </HeroHeading>
            <HeroSubheading>
              Currently designing (and building!) cool things on the internet
              for <PurpleText>MIST Digital</PurpleText> and{" "}
              <GrayText>320 Media.</GrayText> Now accepting freelance projects!
            </HeroSubheading>
            <HeroButtonWrapper>
              <Button primary="true">Get Started</Button>
              <HeroLink to="/">Learn More →</HeroLink>
            </HeroButtonWrapper>
          </HeroRight>
        </HeroContainer>
      </Section>
    </Layout>
  );
};

export default IndexPage;

const HeroContainer = styled(Container)`
  display: grid;
  grid-template-rows: repeat(2, minmax(0, min-content));
  gap: 2.5rem;

  @media screen and (min-width: 64rem) {
    grid-template-rows: repeat(1, minmax(0, 1fr));
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 7.5rem;
  }
`;

const HeroRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const HeroHeading = styled.h1`
  margin-bottom: 1.25rem;
`;

const HeroSubheading = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const HeroButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ScriptText = styled.span`
  font-family: "Shadows Into Light", cursive;
  color: var(--azure);
  letter-spacing: unset;
`;

const PurpleText = styled.span`
  font-weight: 700;
  color: var(--mist);
`;

const GrayText = styled.span`
  font-weight: 700;
  color: var(--threetwenty);
`;

const HeroLink = styled(Link)`
  margin-left: 1.25rem;
  color: var(--azure);
`;
