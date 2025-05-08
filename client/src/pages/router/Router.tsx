import { ViewPropsInterface } from "../../types.ts";

import LandingPage from "../landing-page/LandingPage.tsx";
import Recommendations from "../recommendations/Recommendations.tsx";
import UserSelection from "../user-selection/UserSelection.tsx";
import Login from "../login/Login.tsx";
import UserProfile from "../user-profile/UserProfile.tsx";
import AboutPage from "../about-page/AboutPage.tsx";
import NotFound from "../404/404.tsx";
import Signup from "../Signup/signup.tsx";

export default function Router({ view, setView }: ViewPropsInterface) {
  switch (view) {
    case "landingPage":
      return <LandingPage setView={setView} />;

    case "recommendations":
      return <Recommendations />;

    case "userSelection":
      return <UserSelection />;

    case "login":
      return <Login setView={setView} />;

    case "signUp":
      return <Signup setView={setView} />;

    case "userProfile":
      return <UserProfile />;

    case "aboutPage":
      return <AboutPage />;

    default:
      return <NotFound />;
  }
}
