import { IUserItem } from "../../models/UserItem";
import UserItem from "./UserItem";
import "./UsersList.css";

interface Props {
  items: IUserItem[];
}

const UsersList = (props: Props) => {
  if (!props.items.length) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
