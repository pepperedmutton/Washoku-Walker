import { useState } from "react";

export default function userAuthenticationContext() {
  const [lat, setLat] = useState<number | null>(null);
  const [log, setLog] = useState<number | null>(null);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude);
      setLog(position.coords.longitude);
    },
    (error) => {
      console.error("Error when trying to get location.", error);
    }
  );

  return { lat, log };
}
