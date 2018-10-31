//Dependencies Import
import React, { Component } from "react";

//Component Import
import Layout from '../components/Layout/Layout.js';
import Products from '../components/Products/Products.js'
class Index extends Component {
  render() {
    return(
      <Layout>
        <Products/>
      </Layout>
    )

  }
}

export default Index;
