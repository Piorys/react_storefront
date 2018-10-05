import React, { Component } from "react";
import { Menu, Container, Divider} from "semantic-ui-react";

import CompanyInfo from "./CompanyInfo.js"

class Footer extends Component {
  render() {
    return (
      <Container fluid textAlign="center">
        <Divider/>
        <CompanyInfo/>
      </Container>
    );
  }
}

export default Footer;
