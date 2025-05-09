
import { Restaurant, } from "../../types";
import "./styles.css";


interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {




  
  return (
    <div className="card">
      <div className="links">
        <div>
          <a href={restaurant.url}>Link</a>
        </div>
      </div>
    </div>
  );
}
