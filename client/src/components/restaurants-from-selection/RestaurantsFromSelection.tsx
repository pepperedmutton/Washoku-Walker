import { useState, useEffect } from "react";
import { Restaurant } from "../../types";
import RestaurantCard from "../restaurant-card/RestaurantCard";
import { getUserContext } from "../../ContextProvider";

interface SelectionProps {
  chosenCuisine: string;
  chosenWard: string;
}

export default function RestaurantsFromSelection({
  chosenCuisine,
  chosenWard,
}: SelectionProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = import.meta.env.VITE_BY_DISH_AREA;
  const user = getUserContext();

  useEffect(() => {
    getRestaurants();
  }, [chosenCuisine, chosenWard]);

  async function getRestaurants() {
    try {
      const response = await fetch(
        `${url}?dish=${chosenCuisine || "pizza"}&area=${chosenWard}`, {
          headers: {
            Authorization: user.getToken()
          }
        }
      );

      const data = await response.json();
      if (response.ok) {
        setRestaurants(data);
        setIsLoading(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
  }

  if (isError) return <h3 className="sub-heading">Something went wrong</h3>;
  if (isLoading) return <h3 className="sub-heading">Loading...</h3>;

  return (
    <section className="card-display">
      {restaurants?.map((rest: Restaurant,i) => {try {
    return <RestaurantCard key={rest.name || i} restaurant={rest} />;
  } catch (err) {
    console.error("Failed to render restaurant:", rest, err);
    return null;
  }})}
    </section>
  );
}
