import { LogoutPropsInterface } from "../../types";
import './styles.css';

export default function Logout({ setView, setJwtToken }: LogoutPropsInterface) {
  setJwtToken("");
  setView("aboutPage");
  return <></>
}
