import { getUserContext } from "../../ContextProvider";

export default function UserProfile() {

  const user = getUserContext();

  return (
    <div>
    Profil page for: {user.getName()}
      <div>{ user.isLogged() ? "Currently logged in" : "Not Logged in" }</div>
    </div>
  );
}
