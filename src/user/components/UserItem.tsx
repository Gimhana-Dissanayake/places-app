import Avatar from "../../shared/components/UIElements/Avatar";
import "./UserItem.css";

interface IProps {
  id: string;
  image: string;
  name: string;
  placeCount: number;
}

const UserItem = (props: IProps) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
