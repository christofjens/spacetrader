import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Work Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.5rem;
  height: 100vh;
  background-color: #fff;
  color: #666;
}

h1, h2, h3{
  font-weight: 300;
    text-align: right;
    text-transform: uppercase;
    color: #333;
}

h3 {
  margin-top: 40px;
}

input,
button,
textarea {
  font-size: inherit;
  font-family: inherit;
}

`
export default GlobalStyle
