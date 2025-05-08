type DisplayMode =
  | "landingPage"
  | "recommendations"
  | "userSelection"
  | "login"
  | "userProfile"
  | "aboutPage";

enum PlaceEventType {
  like = "like",
  visit = "visit",
}

interface ViewPropsInterface {
  view: DisplayMode;
  setView: (mode: DisplayMode) => void;
}

interface SetViewPropsInterface {
  setView: (mode: DisplayMode) => void;
}

interface Restaurant {
  name: string;
  rating: number;
  address: string;
  url: string;
  openNow: boolean;
  id: string;
  visit: boolean;
  like: boolean;
}

interface Cuisine {
  uuid: string;
  name: string;
  category: string;
  description: string;
  origin: string;
  localRanking: string;
  internationalRanking: string;
}

interface UserLocation {
  lat: number | null;
  log: number | null;
}

export type {
  DisplayMode,
  ViewPropsInterface,
  SetViewPropsInterface,
  Restaurant,
  Cuisine,
  UserLocation,
};

export {
  PlaceEventType,
};
