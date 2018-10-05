import React from "react";
import { Menu, Icon } from "semantic-ui-react";
//components
import Login from "./Login.js";
import Minicart from "./Minicart.js";
import Register from "./Register.js";
import Wishlist from "./Wishlist.js";

export default () => {
  return (
    <Menu borderless color="blue" style={{
      marginTop: "20px"
    }}>
          <Wishlist/>
          <Minicart />
          <Register/>
          <Login />
    </Menu>
  );
};
