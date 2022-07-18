import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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
    font-size: 0.6rem;
}

div.disclaimer{
    display: none;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #959595 #E1EBED;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 4px;
  width: 4px;
}
*::-webkit-scrollbar-track {
  border-radius: 7px;
  background-color: #E1EBED;
}

*::-webkit-scrollbar-track:hover {
  background-color: #E1EBED;
}

*::-webkit-scrollbar-track:active {
  background-color: #E1EBED;
}

*::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #959595;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #999999;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #4E4E4E;
}


`
export default GlobalStyle;