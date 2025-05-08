import "./styles.css";
import { SetViewPropsInterface } from "../../types";
import { getUserContext } from "../../ContextProvider";

export default function Header({ setView }: SetViewPropsInterface) {
  const user = getUserContext();

  return (
    <header className="header">
      <h1 onClick={() => setView("landingPage")}>Washoku Walker</h1>
      <nav className="nav">
        <div onClick={() => setView("aboutPage")}>About</div>
        { user.isLogged() 
          ?
            <div onClick={() => setView("logout")}>Logout</div>
          :
          <>
            <div onClick={() => setView("login")}>Login</div>
            <div onClick={() => setView("signUp")}>Signup</div>
          </>
        }
      </nav>
    </header>
  );
}
