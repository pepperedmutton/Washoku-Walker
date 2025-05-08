import { RouterPropsInterface } from "../../types.ts";

import LandingPage from "../landing-page/LandingPage.tsx";
import Recommendations from "../recommendations/Recommendations.tsx";
import UserSelection from "../user-selection/UserSelection.tsx";
import Login from "../login/Login.tsx";
import UserProfile from "../user-profile/UserProfile.tsx";
import AboutPage from "../about-page/AboutPage.tsx";
import NotFound from "../404/404.tsx";
import Signup from "../Signup/signup.tsx";
import Logout from "../logout/Logout.tsx";

export default function Router({ view, setView, jwtToken, setJwtToken }: RouterPropsInterface) {

  // allow some public page to be viewed as anonymous
  if (["signUp", "aboutPage"].indexOf(view) < 0) {
    if (jwtToken.length === 0) view="login";
  }

  switch (view) {    
    case "landingPage":
      return <LandingPage jwtToken={jwtToken} setView={setView} />;
      
    case "recommendations":
      return <Recommendations />;
      
    case "userSelection":
      return <UserSelection />;
          
    case "login":
      return <Login setJwtToken={setJwtToken} setView={setView} />;

    case "logout":
      return <Logout setJwtToken={setJwtToken} setView={setView} />;
  
    case "signUp":
      return <Signup jwtToken={jwtToken} setView={setView} />;

    case "userProfile":
      return <UserProfile jwtToken={jwtToken}/>;

    case "aboutPage":
      return <AboutPage />;

    default:
      return <NotFound />;
  }
}
