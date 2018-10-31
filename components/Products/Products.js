//Dependencies Import
import React, { Component } from "react";
import {Card} from "semantic-ui-react";
//Component Import
import ProductCardMainPage from "./ProductCardMainPage.js";

//TODO: Create rules for currency

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: "Sneakers Blue",
          price: "250",
          currency: "PLN",
          imageurl:
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/bce885afc7174ffc81cca80901384cb1_9366/Campus_Shoes_Blue_BZ0086_01_standard.jpg",
          description: "The last sneakers You'll ever wear"
        },
        {
          id: 2,
          name: "Sneakers Red",
          price: "248",
          currency: "PLN",
          imageurl:
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/e114b2f0b8cd48259f20a83500fe9541_9366/Campus_Shoes_Red_DB0984_01_standard.jpg",
          description: "The last sneakers You'll ever wear"
        }
      ]
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
