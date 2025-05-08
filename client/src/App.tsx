import { useState } from "react";
import { DisplayMode } from "./types.ts";
import Router from "./pages/router/Router.tsx";
import Header from "./pages/header/Header.tsx";
import useGetUserLocation from "./hooks/useGetUserLocation.tsx";
import UserLocationContext from "./UserLocationContext.tsx";
import { ContextProvider } from "./ContextProvider.tsx";

export default function App() {
  const [view, setView] = useState<DisplayMode>("aboutPage");
  const userLoc = useGetUserLocation();

  return (
    <div className="outer-container">
      <UserLocationContext.Provider value={userLoc}>
        <ContextProvider>
          <Header setView={setView} />
          <Router view={view} setView={setView}/>
        </ContextProvider>
      </UserLocationContext.Provider>
    </div>
  );
}
