type DisplayMode =
  | "landingPage"
  | "recommendations"
  | "userSelection"
  | "login"
  | "logout"
  | "userProfile"
  | "aboutPage"
  | "signUp" ;

enum PlaceEventType {
  like = "like",
  visit = "visit",
}

interface ViewPropsInterface {
  jwtToken: String;
  view: DisplayMode;
  setView: (mode: DisplayMode) => void;
}

interface SetViewPropsInterface {
  setView: (mode: DisplayMode) => void;
  jwtToken: String;
}

interface RouterPropsInterface {
  jwtToken: String;
  setJwtToken: (token: String) => void;
  view: DisplayMode;
  setView: (mode: DisplayMode) => void;
}

interface LoginPropsInterface {
  setJwtToken: (token: String) => void;
  setView: (mode: DisplayMode) => void;
}

interface LogoutPropsInterface {
  setJwtToken: (token: String) => void;
  setView: (mode: DisplayMode) => void;
}

interface UserProfilePropsInterface {
  jwtToken: String;
  // setView: (mode: DisplayMode) => void;
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

interface UserAuthentication {
  jwtToken: String | null;
  name: String | null;
}

export type {
  DisplayMode,
  ViewPropsInterface,
  SetViewPropsInterface,
  Restaurant,
  Cuisine,
  UserLocation,
  UserAuthentication,
  LoginPropsInterface,
  LogoutPropsInterface,
  RouterPropsInterface,
  UserProfilePropsInterface,
};

export {
  PlaceEventType,
};
