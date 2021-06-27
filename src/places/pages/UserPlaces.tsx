import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlaceAPI } from "../../apis/place-api";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState<any[]>();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(`${PlaceAPI.byUser}/${userId}`);
        setLoadedPlaces(responseData.places);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  const placeDeleteHandler = (deletedPlaceId: string) => {
    setLoadedPlaces((pS) => pS?.filter((p) => p.id !== deletedPlaceId));
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && (
        <PlaceList items={loadedPlaces} onDeletePlace={placeDeleteHandler} />
      )}
    </React.Fragment>
  );
};

export default UserPlaces;
