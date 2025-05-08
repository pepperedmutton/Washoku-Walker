import { useState } from "react";
import { Restaurant, PlaceEventType } from "../../types";
import "./styles.css";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {

  const url = import.meta.env.VITE_EVENT;

  let [eventLike, setEventLike] = useState(restaurant.like || false);
  let [eventVisit, setEventVisit] = useState(restaurant.visit || false);
  let [restaurantId] = useState(restaurant.id || "");

  const setEventLikeClickHandler = async () => {
    await saveEvent(
      PlaceEventType.like, 
      restaurant.id, 
      eventLike === false ? true : false, 
      setEventLike);
  }

  const setEventVisitClickHandler = async () => {
    await saveEvent(
      PlaceEventType.visit,
      restaurant.id,
      eventVisit=== false ? true : false,
      setEventVisit);
  }

  async function saveEvent(eventName: PlaceEventType, restaurantId: string, state: Boolean, success: Function): Promise<void> {
    try {

      const response = await fetch(
        `${url}/${restaurantId}/${eventName}`,
        { 
          method: state ? "post" : "delete"
        }
      );

      if (response.ok) {
        success(state);
      } else {
        // setIsError(true);
      }
    } catch (error) {
      // setIsError(true);
      console.error(error);
    }
  }

  return (
    <div className="card">
      <h3>{restaurant.name}</h3>
      <p>Rating: {restaurant.rating}</p>
      <p>{restaurant.openNow ? "Currently Open" : "Not open yet"}</p>
      <p className="address">{restaurant.address}</p>
      <div className="links">
        <div>
          <a href={restaurant.url}>Link</a>
        </div>
        <div >
            <a className="event-icon" href="#/" onClick={ setEventVisitClickHandler }>{eventVisit ? "🚙" : "🤔"}</a>
            <a className="event-icon" href="#/" onClick={ setEventLikeClickHandler }>{ eventLike ? "❤️" : "🩶"}</a>
        </div>
      </div>
    </div>
  );
}
