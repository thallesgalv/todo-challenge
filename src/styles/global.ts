import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root {
  --fontPrimary: 'Josefin Sans', sans-serif;
  --innerWidth: calc(min(90%, 60rem));

  --checkBackground: linear-gradient(#47daff 0%, #c058f3 100%);
  --defaultRadius: 0.25em;
}


*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
p,
span,
a,
h1,
h2,
ul,
img,
input {
  margin: 0;
  padding: 0;
  display: block;
  font-weight: normal;
  font-size: 100%;

  a {
    text-decoration: none;
  }

  img,
  video,
  iframe {
    max-width: 100%;
  }

  img[src$=".svg"] {
    height: auto;
    max-width: none;
    width: 100%;
  }

  li {
    list-style: none;
  }
}

body {
  font-family: var(--fontPrimary);
  background-color: ${({ theme }) => theme.colors?.background};
}
`
