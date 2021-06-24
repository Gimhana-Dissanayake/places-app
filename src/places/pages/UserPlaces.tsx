import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scraper in the world!",
    imageUrl:
      "https://cdn.britannica.com/s:800x450,c:crop/24/150924-138-7A541BC0/Empire-State-Building-New-York-City.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lag: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scraper in the world!",
    imageUrl:
      "https://cdn.britannica.com/s:800x450,c:crop/24/150924-138-7A541BC0/Empire-State-Building-New-York-City.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lag: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const { userId } = useParams<{ userId: string }>();

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
