import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html{
        font-size : 10px;
        background: #f7f7f7;
    }
    body{
        margin-top: 4.9rem;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
