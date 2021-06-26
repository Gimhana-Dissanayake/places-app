import React, { useEffect, useState } from "react";
import { UserAPI } from "../../apis/user-api";
import { IUserItem } from "../../models/UserItem";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import UsersList from "../components/UsersList";

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [loadedUsers, setLoadedUser] = useState<IUserItem[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(UserAPI.users);

        setLoadedUser(responseData.users);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
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
