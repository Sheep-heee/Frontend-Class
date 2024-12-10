import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>User with id {userId} is name</h1>
    </>
  );
};

export default User;
