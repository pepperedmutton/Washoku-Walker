import { createContext, useContext, useState } from "react";
import UserLocationContext from "./UserLocationContext.tsx";
import { User } from "./types";

// FIXME: is that bad because global ? should we use useEffect ?
let myUser = new User();
const UserContext = createContext(myUser);

export function ContextProvider({children}: any) {

    const [lat, setLat] = useState<number | null>(null);
    const [log, setLog] = useState<number | null>(null);
    const userLoc = {lat, log};

    navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLog(position.coords.longitude);
        },
        (error) => {
          console.error("Error when trying to get location.", error);
        }
    );

    return (
        <UserLocationContext.Provider value={userLoc}>
            <UserContext.Provider value={myUser}>
                {children}
            </UserContext.Provider>
        </UserLocationContext.Provider>
    )
}

export function getUserContext() {
    let uc = useContext(UserContext);
    console.log("getUserContext: ", uc.toString());
    return uc;
}
