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
        imageurl: "https://image.ceneostatic.pl/data/products/57343441/i-adidas-campus-shoes-grey.jpg",
        description: faker.lorem.sentence()
      };
      products.push(randomProduct);
    }

    return products;
  }
  /*
  Scope: Gets random product picture from picsum via GET call to defined url
  Parameters:
  @height - int, height of desired picture
  @width - int, width of desired picture
  */

  getRandomProductPicture(h, w) {
    let height = h.toString();
    let width = w.toString();

    let randUrl = "https://picsum.photos/" + height + "/" + width + "/?random";
    let imageUrl;
    let req = unirest("GET", randUrl);
    req.query({
      random: ""
    });

    req.headers({
      "Cache-Control": "no-cache"
    });

    req.end(function(res) {
      if (res.error) throw new Error(res.error);
      imageUrl = res.body;
      console.log(res.body);
    });

    return imageUrl;
  }
};
