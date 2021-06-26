import React, { useEffect, useState } from "react";
import { UserAPI } from "../../apis/user-api";
import { IUserItem } from "../../models/UserItem";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import UsersList from "../components/UsersList";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadedUsers, setLoadedUser] = useState<IUserItem[]>();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(UserAPI.users);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedUser(responseData.users);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Users;
