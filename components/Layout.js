import React from "react";
import {Container} from "semantic-ui-react";
import Head from "./Head";
import Upperbar from '../components/Upperbar.js';

export default props => {
  return (
    <Container>
      <Head />
      <h1 style={{color:"white"}}> Storefront </h1>
      <Upperbar />

      {props.children}

    </Container>
  );
};
