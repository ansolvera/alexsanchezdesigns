import * as React from "react";
import styled from "styled-components";
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

const Newsletter = () => {
  return (
    <Section>
      <Container>
        <NewsletterCard>
          <GridContainer>
            <NewsletterLeft>
              <NewsletterHeading>
                Sign up for my <ScriptText>newsletter!</ScriptText>
              </NewsletterHeading>
              <NewsletterSubheading>
                Subscribe, and be the first to know when I publish a new blog
                post.
              </NewsletterSubheading>
            </NewsletterLeft>
            <NewsletterLeft>
              <NewsletterForm>
                <FormInput type="email" placeholder="name@example.com" />
                <FormButton as="input" type="submit" value="Submit" />
              </NewsletterForm>
              <NewsletterCopy>
                (We value your privacy and promise to never send you spam.)
              </NewsletterCopy>
            </NewsletterLeft>
          </GridContainer>
        </NewsletterCard>
      </Container>
    </Section>
  );
};

export default Newsletter;

const NewsletterCard = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 5rem 0;
  border-radius: 0.5rem;
  background-image: linear-gradient(to right, var(--dodger), var(--azure));
  background-color: var(--azure);
  box-shadow: var(--azureShadow);
`;

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

const NewsletterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const NewsletterHeading = styled.h3`
  margin-bottom: 1.25rem;
  color: var(--white);
`;

const ScriptText = styled.span`
  font-family: "Shadows Into Light", cursive;
`;

const NewsletterSubheading = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: var(--athens);
`;

const NewsletterForm = styled.form`
  margin-bottom: 1.25rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 1.75rem;

  @media screen and (min-width: 64rem) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  input {
    height: 3.5rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: auto;
  padding: 0 1rem;
  border: 1px solid var(--athens);
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1;
  color: var(--azure);

  &::placeholder {
    color: var(--chateau);
  }

  @media screen and (min-width: 64rem) {
    grid-column: span 3 / span 3;
  }
`;

const FormButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--athens);
  box-shadow: var(--blackShadow);

  @media screen and (min-width: 64rem) {
    grid-column: span 2 / span 2;
  }
`;

const NewsletterCopy = styled.p`
  margin: 0 auto;
  font-size: 0.75rem;
  line-height: 1;
  color: var(--mischka);
  text-transform: uppercase;
  text-direction: center;
`;
