import { useState } from "react";

import { DisplayMode, UserAuthentication } from "./types.ts";

import Router from "./pages/router/Router.tsx";
import Header from "./pages/header/Header.tsx";
import useGetUserLocation from "./hooks/useGetUserLocation.tsx";
import UserLocationContext from "./UserLocationContext.tsx";
import UserAuthenticationContext from "./UserAuthenticationContext.tsx";

export default function App() {
  const [view, setView] = useState<DisplayMode>("aboutPage");
  const [jwtToken, setJwtToken] = useState<String>("");

  const userLoc = useGetUserLocation();
  const userAuthentication: UserAuthentication = { jwtToken: null, name: "" };

  return (
    <div className="outer-container">
      <UserLocationContext.Provider value={userLoc}>
        <UserAuthenticationContext.Provider value={userAuthentication}>
          <Header jwtToken={jwtToken} setView={setView} />
          <Router view={view} setView={setView} jwtToken={jwtToken} setJwtToken={setJwtToken}/>
        </UserAuthenticationContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}
