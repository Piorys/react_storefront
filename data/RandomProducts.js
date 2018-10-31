/*
Author: Piotr Ryszewski
Date: 5.10.2018
Scope: Functions for random products generation.
*/
"use strict";
const faker = require("faker");
const unirest = require("unirest");

module.exports = class RandomProduct {
  /*
* Scope: Generates array of random products in schema adapted to the ProductCardMainPage component
* @quantity - Integer - Defines how many products you want to generate
* @currency - String - Defines in which currency prices should be returned.
*/

  getRandomProductsMainPage(quantity, currency) {
    let products = [];

    for (var i = 0; i < quantity; i++) {
      let randomProduct = {
        id: i,
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        currency: currency,
        imageurl:
          "https://image.ceneostatic.pl/data/products/57343441/i-adidas-campus-shoes-grey.jpg",
        description: faker.lorem.sentence()
      };
      products.push(randomProduct);
    }

    return products;
  }
};
