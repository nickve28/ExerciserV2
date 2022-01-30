import { createGlobalStyle } from "styled-components";

const basePadding = 0.25; // rem = 4 pixels
export const getPadding = (size: number) => `${size * basePadding}rem`;
export const getSpacing = getPadding;

const fontSizes = {
    small: 0.75,
    default: 0.875,
    title: 1.125,
}

export const GlobalStyling = createGlobalStyle`
    html {
        font-size: 1rem
    }

    body,
    body > #root {
        width: 100vw;
        height: 100vh;
    }
`;