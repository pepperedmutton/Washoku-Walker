import { SetViewPropsInterface} from "../../types";
import "./styles.css";
import { useState } from "react";
export default function Signup({ setView }: SetViewPropsInterface) {
  const url = import.meta.env.VITE_SIGNUP;
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleLogin = async () => {
    try {
      const res = await fetch(`${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email,password,name})
      });

      const data = await res.json();

      if (!res.ok) {
        // If server responds with a code and error message
        setErrorMsg(data.message || "Unknown error");
        // console.log(errorMsg);
      } else {
        // Login succeeded
        setErrorMsg("");
        // console.log("Success:", data)
        setView("userProfile");
      }
    } catch (err) {
      setErrorMsg(errorMsg);
      // console.log(errorMsg);
    }
  };
  return (
    <section>
      <h2>Signup</h2>
      <div>
      <input
        id="email"
        type="text"
        placeholder="Please enter email"
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        id="password"
        type="text"
        placeholder="Please enter password"
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <input
        id="name"
        type="text"
        placeholder="Please enter your name"
        value = {name}
        onChange={(e)=>setName(e.target.value)}
      />
    </div>
      <div>
        <button onClick={handleLogin}>Signup</button>
      </div>
    </section>
  );
}
