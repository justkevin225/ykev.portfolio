import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import "../node_modules/normalize.css/normalize.css";

*,*::after,*::before,h1,h2,h3,h4,h5,h6{
    padding: 0;
    margin: 0;
    user-select: none;
}

.title{
    position: absolute;
    font-size: 5rem;
    font-size: #121212;
    font-weight: bold;
    left: 50%;
    transform: translateX(-50%);
}

body{
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    font-family: "Maven Pro", sans-serif;
}

#Tilt{
    box-shadow: none !important;
}

.fs-7{
    font-size: small;
}
.fs-8{
    font-size: smaller;
}

div.disclaimer{
    display: none;
}
`
export default GlobalStyle;