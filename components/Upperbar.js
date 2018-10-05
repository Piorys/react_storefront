import React from "react";
import { Menu, Icon } from "semantic-ui-react";
//components
import Login from "./Upperbar/Login.js";
import Minicart from "./Upperbar/Minicart.js";
import Register from "./Upperbar/Register.js";
import Wishlist from "./Upperbar/Wishlist.js";

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
