import RestaurantCard from "../../components/restaurant-card/RestaurantCard";
import useFetchRestaurants from "../../hooks/useFetchRestaurants";
import { Restaurant } from "../../types";

export default function Recommendations() {
  const url = import.meta.env.VITE_RECOM;
  console.log(url);
  const [restaurants, isError, isLoading] = useFetchRestaurants(url);

  if (isError) return <h1>Something went wrong.</h1>;
  if (isLoading) return <p>Loading...</p>;
  console.log(restaurants);

  if (restaurants !== null) {
    return (
      <section>
        <h1 className="page-title">Recommended Restaurants Near You</h1>
        <div className="recommendation-list">
          {Array.isArray(restaurants) &&restaurants?.map((rest: Restaurant) => (
            <RestaurantCard key={rest.name} restaurant={rest} />
          ))}
        </div>
      </section>
    );
  }
}
