import dotenv from "dotenv";
dotenv.config();

import placeEventsModel from './events.model.js';

const fieldMask =
  "places.id,places.displayName,places.rating,places.formattedAddress,places.websiteUri,places.regularOpeningHours.openNow";

// This is for users who aren't sure what they want and need restaurant
// recommendations near them.
async function getRecommendedRestaurants(locationData) {
  const url = "https://places.googleapis.com/v1/places:searchNearby";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask": fieldMask,
    },
    body: JSON.stringify({
      includedPrimaryTypes: ["restaurant"],
      maxResultCount: 5,
      locationRestriction: {
        circle: {
          center: {
            latitude: locationData.lat,
            longitude: locationData.log,
          },
          radius: 1500,
        },
      },
    }),
  });

  const data = await response.json();
  return processPlaces(data);
}

// This is for user who want to eat a specific kind of food in a specific area.
async function getRestaurantsByDishAndArea(user, dish, area) {
  const url = "https://places.googleapis.com/v1/places:searchText";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/json",
      "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask": fieldMask,
    },
    body: JSON.stringify({
      textQuery: `${dish} restaurants in ${area}`,
    }),
  });
  const data = await response.json();
  if (data.places) {
    return processPlaces(user, data);
  }
  console.error(data);
}

// Helper function
async function processPlaces(user, rawPlaces) {

  const events = await placeEventsModel.getEvents(user);

  const places = (rawPlaces.places || []).map((place) => {
    let foundPlaceEvents = {};

    events.map( event => {
      if (event.placeId === place.id) {
        foundPlaceEvents[event.name] = true;
      }
    });

    return {
      ...{
        name: (place.displayName || {}).text ?? "noName",
        rating: place.rating,
        address: place.formattedAddress,
        url: place.websiteUri,
        openNow: (place.regularOpeningHours || {}).openNow,
        id: place.id,
      }, 
      ...foundPlaceEvents
    };
  });

  return places;
}

export { getRecommendedRestaurants, getRestaurantsByDishAndArea };
