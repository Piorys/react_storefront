import React ,{Component} from "react";
import { Menu, Button } from "semantic-ui-react";


class Register extends Component {
  render(){
    return(
      <Menu.Item link position="right">
        <Button color="facebook" >
          Register
        </Button>
      </Menu.Item>
    );
  }
}

export default Register;
