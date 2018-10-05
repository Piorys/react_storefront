import React from "react";
import {Container} from "semantic-ui-react";
import Head from "./Head";
import Header from "./Header.js";
import Upperbar from './Upperbar/Upperbar.js';

export default props => {
  return (
    <Container>
      <Head />
      <Header/>
      <Upperbar />

      {props.children}

    </Container>
  );
};
