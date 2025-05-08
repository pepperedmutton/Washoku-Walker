import { useState } from "react";
import { DisplayMode } from "./types.ts";
import Router from "./pages/router/Router.tsx";
import Header from "./pages/header/Header.tsx";
import { ContextProvider } from "./ContextProvider.tsx";

export default function App() {
  const [view, setView] = useState<DisplayMode>("aboutPage");

  return (
    <div className="outer-container">
        <ContextProvider>
          <Header setView={setView} />
          <Router view={view} setView={setView}/>
        </ContextProvider>
    </div>
  );
}
