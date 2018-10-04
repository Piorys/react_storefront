import React from "react";
import { Menu } from "semantic-ui-react";
//components
import User from "./Upperbar/UserUpperbar.js";
import Minicart from "./Upperbar/Minicart.js";

export default () => {
  return (
    <Menu>
          <Minicart />
          <User />
    </Menu>
  );
};
