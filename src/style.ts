import { injectGlobal } from "styled-components";

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
