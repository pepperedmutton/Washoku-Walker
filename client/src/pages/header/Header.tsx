import "./styles.css";
import { SetViewPropsInterface } from "../../types";

export default function Header({ jwtToken, setView }: SetViewPropsInterface) {
  return (
    <header className="header">
      <h1 onClick={() => setView("landingPage")}>Washoku Walker</h1>
      <nav className="nav">
        <div onClick={() => setView("aboutPage")}>About</div>
        { jwtToken.length > 0 
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
