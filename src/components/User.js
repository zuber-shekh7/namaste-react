import React, { useEffect, useState } from "react";
import { GITHUB_API } from "../utils/constants";

const User = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const response = await fetch(`${GITHUB_API}/users/zuber-shekh7`);
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
          <h4>Github: {user.login}</h4>
        </>
      )}
    </div>
  );
};

export default User;
