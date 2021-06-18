import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Marlon Brando",
      image: "https://www.onthisday.com/images/people/marlon-brando-medium.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
