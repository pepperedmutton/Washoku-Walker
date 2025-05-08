import { createContext, useContext } from "react";
import { User } from "./types";

// FIXME: is that bad because global ?
let myUser = new User();

const UserContext = createContext(myUser);

export function ContextProvider({children}: any) {
    return (
        <UserContext.Provider value={myUser}>
            {children}
        </UserContext.Provider>
    )
}

export function getUserContext() {
    let uc = useContext(UserContext);
    console.log("getUserContext: ", uc.toString());
    return uc;
}
