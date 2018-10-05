import React ,{Component} from "react";
import { Menu, Icon, Button } from "semantic-ui-react";


class Wishlist extends Component {
  render(){
    return(
      <Menu.Item link>
        <Button animated="fade" color="facebook" >
          <Button.Content visible>
            <Icon name="heart outline"/>
          </Button.Content>
          <Button.Content hidden>
            Wishlist
          </Button.Content>
        </Button>
      </Menu.Item>
    );
  }
}

export default Wishlist;
