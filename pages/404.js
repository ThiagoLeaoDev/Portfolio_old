import Head from "next/head";

import * as SC from "../styles/errorStyle";

export default function Error() {
  return (
    <SC.Main>
      <Head>
        <title>Thiago Leão | Error </title>
      </Head>
      <SC.Container>
        <SC.Content>
          <SC.Title>404 :(</SC.Title>
          <SC.SubTitle>Ok... I think someone is lost</SC.SubTitle>
          <SC.Text>This page does not exist, I suggest you go back to the home page</SC.Text>
          <SC.ButtonHome href="/">Go Home</SC.ButtonHome>
        </SC.Content>
      </SC.Container>
    </SC.Main>
  )
}
