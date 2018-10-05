import React ,{Component} from "react";
import { Menu, Button } from "semantic-ui-react";


class Login extends Component {
  render(){
    return(
      <Menu.Item link>
        <Button color="facebook" position="right">
          Login
        </Button>
      </Menu.Item>
    );
  }
}

export default Login;
