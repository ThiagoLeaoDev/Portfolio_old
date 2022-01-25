import { createGlobalStyle, ThemeProvider } from 'styled-components'

import '../styles/globals.css'
import '../styles/colors.css'
import '../styles/fonts.css'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
