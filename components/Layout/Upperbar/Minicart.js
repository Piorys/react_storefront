import React, {Component} from "react";
import { Menu,Icon,Button } from "semantic-ui-react";


class Minicart extends Component {

render(){
  return(
    <Menu.Item link>
      <Button animated="fade" color="facebook" >
        <Button.Content visible>
          <Icon name="shopping cart"/>
        </Button.Content>
        <Button.Content hidden>
          Cart
        </Button.Content>

      </Button>
    </Menu.Item>
  );
}}

export default Minicart;
