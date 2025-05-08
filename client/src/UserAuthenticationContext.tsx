import { createContext } from "react";
import { UserAuthentication } from "./types";

const UserAuthenticationContext = createContext<UserAuthentication | null>(null);

export default UserAuthenticationContext;
