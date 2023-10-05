import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Oops! Something went wrong</h2>
      <p>
        {error.status} - {error.statusText}
      </p>
    </div>
  );
};

export default Error;
