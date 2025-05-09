import "./styles.css";
import { SetViewPropsInterface } from "../../types";
import { getUserContext } from "../../ContextProvider";

export default function Header({ setView }: SetViewPropsInterface) {
  const user = getUserContext();

  return (
    <header className="header">
      <h1 onClick={() => setView("landingPage")}>Washoku Walker</h1>
        <div className="header-right">
          <div>
            { user.isLogged() 
              ?
              <>
                <nav className="nav">
                  <div onClick={() => setView("userProfile")}>Profil</div>
                  <div onClick={() => setView("logout")}>Logout</div>
                  <div onClick={() => setView("aboutPage")}>About</div>
                  </nav>
              </>
              :
              <>
                <nav className="nav">
                  <div onClick={() => setView("login")}>Login</div>
                  <div onClick={() => setView("signUp")}>Signup</div>
                  <div onClick={() => setView("aboutPage")}>About</div>
                  </nav>
              </>
          }
        </div>
        <div>
        { user.isLogged() ?
          <><b>Logged in as: {user.getName()}</b></>
          :
          ""
        }
        </div>
      </div>
    </header>
  );
}
