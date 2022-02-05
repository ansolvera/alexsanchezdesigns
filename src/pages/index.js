import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Link } from "gatsby";
import Newsletter from "../components/Newsletter";

const IndexPage = () => {
  return (
    <Layout>
      <Section>
        <GridContainer>
          <div></div>
          <HeroRight>
            <HeroHeading>
              Hey! 👋🏼 I'm Alex, and I'm a{" "}
              <ScriptText>product designer</ScriptText>
            </HeroHeading>
            <HeroSubheading>
              Currently designing (and building!) cool things on the internet
              for{" "}
              <PurpleText href="http://mist.rocks" target="_blank">
                MIST Digital
              </PurpleText>{" "}
              and{" "}
              <GrayText href="https://www.howtogettheguy.com/" target="_blank">
                320 Media.
              </GrayText>{" "}
              Now accepting freelance projects!
            </HeroSubheading>
            <HeroButtonWrapper>
              <Button primary="true">Get Started</Button>
              <HeroLink to="/">Learn More →</HeroLink>
            </HeroButtonWrapper>
          </HeroRight>
        </GridContainer>
      </Section>
      <Section>
        <GridContainer>
          <HeroRight>
            <AboutHeading>
              A little bit <ScriptText>about me</ScriptText>
            </AboutHeading>
            <AboutCopy>
              <p>
                I'm a self-taught product designer and front-end React developer
                based in Southern California.
              </p>
              <p>
                Outside of my full-time commitments at{" "}
                <PurpleText>MIST Digital</PurpleText> and the incredible team at{" "}
                <GrayText>320 Media,</GrayText> I work with a select number of
                freelance clients to create beautiful digital products and
                solutions.
              </p>
              <p>
                I believe that design is a criminally under-appreciated business
                asset. And I'm passionate about creating delightful user
                experiences for small-to-mid-sized online businesses.
              </p>
            </AboutCopy>
          </HeroRight>
        </GridContainer>
      </Section>
      <Newsletter />
    </Layout>
  );
};

export default IndexPage;

const GridContainer = styled(Container)`
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
  justify-content: center;
  align-items: flex-start;
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

const PurpleText = styled.a`
  font-weight: 700;
  color: var(--mist);
  text-decoration: none;
`;

const GrayText = styled.a`
  font-weight: 700;
  color: var(--threetwenty);
  text-decoration: none;
`;

const HeroLink = styled(Link)`
  margin-left: 1.25rem;
  color: var(--azure);
`;

const AboutHeading = styled.h2`
  margin-bottom: 1.25rem;
`;

const AboutCopy = styled.article`
  p {
    margin: 1.25rem 0;
    font-size: 1.125rem;
    line-height: 1.75rem;

    &:first-of-type {
      margin-top: unset;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }

    &:last-of-type {
      margin-bottom: unset;
    }
  }
`;
