//Dependencies Import
import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default () => {
  return (
    <Header
      as="h1"
      textAlign="center"
      dividing
      style={{ fontFamily: "Kaushan Script" }}
    >
      Store <span style={{color:"#3b5998"}}> front</span>
    </Header>
  );
};
