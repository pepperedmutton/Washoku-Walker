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
  pin = "pin",
}

interface ViewPropsInterface {
  jwtToken: String;
  view: DisplayMode;
  setView: (mode: DisplayMode) => void;
}

interface SetViewPropsInterface {
  setView: (mode: DisplayMode) => void;
}

interface RouterPropsInterface {
  view: DisplayMode;
  setView: (mode: DisplayMode) => void;
}

interface LoginPropsInterface {
  setView: (mode: DisplayMode) => void;
}

interface LogoutPropsInterface {
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
  pin: boolean;
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

// interface IUser {
//   jwtToken: String | null;
//   name: String | null;
// }

class User {
  constructor (private jwtToken: string|null = null, private name: string|null = null) {
    this.jwtToken=jwtToken;
    this.name=name;
  }

  setToken(token: string) {
    this.jwtToken = token;
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string|null {
    return this.name;
  }

  getToken(): string {
    if (this.jwtToken === null) return ""
    return this.jwtToken;
  }

  isLogged(): boolean {
    return this.jwtToken ? true : false;
  }

  logout(): void {
    this.jwtToken = null;
  }

  toString(): String {
    return `name: ${this.name}, isLogged: ${this.isLogged()}, token (redacted): ${this.jwtToken?.substring(1,10)}`;
  }
}

export type {
  DisplayMode,
  ViewPropsInterface,
  SetViewPropsInterface,
  Restaurant,
  Cuisine,
  UserLocation,
  LoginPropsInterface,
  LogoutPropsInterface,
  RouterPropsInterface,
  // IUser,
};

// Class objects
export {
  PlaceEventType,
  User,
};
