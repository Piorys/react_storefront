import React, { Component } from "react";
import { Card, Button, Image } from "semantic-ui-react";

/*
Props:
imageUrl: Direct link to image
name: String
descriptio : String
price: String
currency: String
*/

class ProductCardMainPage extends Component {
  render() {
    const { product } = this.props;
    return (
      <Card>
        <Image src={product.imageurl} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <h3>
            {" "}
            {product.price} {product.currency}{" "}
          </h3>
          <Button color="facebook">Add to cart</Button>
          <Button color="facebook" icon="heart outline"/>
        </Card.Content>
      </Card>
    );
  }
}

export default ProductCardMainPage;
