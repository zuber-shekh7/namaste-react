import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     console.log("Namaste React");
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  render() {
    return (
      <div>
        <h2 className="heading">About Us</h2>
        <User />
        <hr />
        <UserClass />
      </div>
    );
  }
}

export default About;
