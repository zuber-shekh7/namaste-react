import React from "react";
import { GITHUB_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  async fetchUser() {
    const response = await fetch(`${GITHUB_API}/users/zuber-shekh7`);
    const data = await response.json();
    this.setState({
      user: data,
    });
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    const { user } = this.state;

    return (
      <div className="user-card">
        {user && (
          <>
            <img
              className="user-picture"
              src={user.avatar_url}
              alt={"Profile Picture"}
            />
            <h2>{user.name}</h2>
            <h3>{user.location}</h3>
            <h4>Instagram: {user.login}</h4>
          </>
        )}
      </div>
    );
  }
}

export default UserClass;
