import React ,{Component} from "react";
import { Menu } from "semantic-ui-react";


class UserUpperbar extends Component {
  render(){
    return(
      <Menu style={{
        marginTop: "20px"
      }}>
        <a className="item"> Login </a>
        <a className="item"> Register </a>
      </Menu>
    );
  }
}

export default UserUpperbar;
