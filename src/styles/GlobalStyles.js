import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --athens: #e5e7eb;
        --azure: #0a7aff;
        --black: #000000;
        --chateau: #9ca3af;
        --clouds: #f9fafb;
        --dodger: #18b2ff;
        --ebony: #111827;
        --mischka: #d1d5db;
        --mist: #5333ff;
        --sky: #6b7280;
        --threetwenty: #34333e;
        --white: #ffffff;
        --azureShadow: 0 20px 25px -5px rgba(10,122,255,0.1), 0 8px 10px -6px rgba(10,122,255,0.1);
        --blackShadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
    }
    h1 {
        font-weight: 800;
        color: var(--ebony);

        @media screen and (max-width: 47.9375rem) {
            font-size: 3rem;
            line-height: 1;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 3rem;
            line-height: 1;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 3.75rem;
            line-height: 1;
        }

        @media screen and (min-width: 64rem) {
            font-size: 3.75rem;
            line-height: 1;
            letter-spacing: -0.05em;
        }
    }
    h2 {
        font-weight: 800;
        color: var(--ebony);

        @media screen and (max-width: 47.9375rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 3rem;
            line-height: 1;
        }

        @media screen and (min-width: 64rem) {
            font-size: 3rem;
            line-height: 1;
            letter-spacing: -0.025em;
        }
    }
    h3 {
        font-weight: 700;
        color: var(--ebony);

        @media screen and (max-width: 47.9375rem) {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        @media screen and (min-width: 40rem) and (max-width: 47.9375rem) {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        @media screen and (min-width: 48rem) and (max-width: 63.9375rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }
        @media screen and (min-width: 64rem) {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }
    }
    p {
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--sky);
    }
`;
