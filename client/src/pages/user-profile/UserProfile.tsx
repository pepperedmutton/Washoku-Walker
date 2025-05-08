import { UserProfilePropsInterface } from "../../types";

export default function UserProfile({jwtToken}: UserProfilePropsInterface) {

  return (
    <div>
    UserProfile
      <div>{ jwtToken.length > 0 ? "Currently logged in" : "Not Logged in" }</div>
    </div>
  );
}
