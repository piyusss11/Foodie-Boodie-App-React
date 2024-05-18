import { Component } from "react";
import UserClass from "./UserClass";

class User extends Component {
  constructor() {
    super();
    console.log("Parent Constructor rendered");
  }
  componentDidMount() {
    console.log("parent Component did mount is rendered");
  }
  render() {
    console.log("parent render is rendered");

    return (
      <div>
        <UserClass name={"first child(class)"} location={"Delhi"} />

      
      </div>
    );
  }
}

export default User;
