import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./_app.css";

const GlobalStyle = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Poppins';
  }
  
  h1, h2, h3, h4, h5, h6, p, a{
    font-family: 'Poppins';
    font-weight: 400;
  }

  a{
      text-decoration: none;
  }

  h1{
      font-size: 48px;
      line-height: 100%;
  }


  h2{
      font-size: 38px;
      line-height: 110%;
  }

  h3{
      font-size: 28px;
      line-height: 110%;
  }

  h4{
      font-size: 24px;
      line-height: 120%;
  }

  h5{
      font-size: 20px;
      line-height: 140%;
  }

  h6{
      font-size: 16px;
      line-height: 150%;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a{
    text-decoration: none;
  }

  body::-webkit-scrollbar {
    display: none;        /* width of the entire scrollbar */
  }

  @media only screen and (max-width: 992px) {
    body::-webkit-scrollbar{
      display: none;
    }
  }

  body::-webkit-scrollbar-track {
    background: #FFFFFF;        /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 2px solid #FFFFFF;  /* creates padding around scroll thumb */
  }
`;

const light = {
  colors: {
    Primary: "#13FF00",
    PrimaryHover: "#33FF22",

    BgPrimary: "#202020",
    BgSecondary: "#3F3F3F",
    BgTertiary: "#161616",
    BgButton: "#303030",
    BgCard: "#272727",
    Base: "#ffffff",

    TextPrimary: "#FFFFFF",
    TextSecondary: "#8F8F8F",

    TextNegativePrimary: "#202020",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
