import { useState, useEffect, useContext } from "react";
import UserLocationContext from "../UserLocationContext";
import { Restaurant } from "../types";
import { getUserContext } from "../ContextProvider";

export default function useFetchRestaurants(
  url: string
): [Restaurant[], boolean, boolean] {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const userLoc = useContext(UserLocationContext);
  const user = getUserContext();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {

    if (userLoc !== null && userLoc?.lat !== null && userLoc?.log !== null) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { 
            "Content-type": "application/json",
            Authorization: user.getToken()
          },
          body: JSON.stringify({ lat: userLoc.lat, log: userLoc.log }),
        });
        const data = await response.json();

        setRestaurants(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    }
  }

  return [restaurants, isError, isLoading];
}
