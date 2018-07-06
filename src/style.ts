import { css, injectGlobal, InterpolationValue } from "styled-components";

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font: 16px sans-serif;
    width: 100vw;
    height: 100vh;
    margin: 0;
  }

  div#root {
    width: 100%;
    height: 100%;
  }
`;

export function verticalMargin(margin: string): InterpolationValue[] {
  return css`
    > * {
      margin-top: 0;
      margin-bottom: ${margin};

      &:last-child {
        margin-bottom: 0;
      }
    }
  `;
}

export function horizontalMargin(margin: string): InterpolationValue[] {
  return css`
    > * {
      margin-left: 0;
      margin-right: ${margin};

      &:last-child {
        margin-right: 0;
      }
    }
  `;
}
