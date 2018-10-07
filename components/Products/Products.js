//Dependencies Import
import React, { Component } from "react";
import { Card } from "semantic-ui-react";
//Component Import
import ProductCardMainPage from "./ProductCardMainPage.js";

//Module Import
import RandomProduct from "../../data/RandomProducts.js";
//TODO: Create rules for currenc

class Products extends Component {

  constructor() {
    super();
    const random = new RandomProduct();
    this.state = {
      products: random.getRandomProductsMainPage(9,"EUR")
    };
  }

  render() {
    const { products } = this.state;

    return (
      <Card.Group centered>
        {products.map(products => <ProductCardMainPage product={products} />)}
      </Card.Group>
    );
  }
}

export default Products;
