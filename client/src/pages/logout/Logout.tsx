import { LogoutPropsInterface } from "../../types";
import './styles.css';
import { getUserContext } from "../../ContextProvider";

export default function Logout({ setView }: LogoutPropsInterface) {
  const user = getUserContext();

  user.logout();
  setView("aboutPage");

  return <></>
}
