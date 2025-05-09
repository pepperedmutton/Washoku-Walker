import { LoginPropsInterface } from "../../types";
import './styles.css';
import { useState } from "react";
import { getUserContext } from "../../ContextProvider";

export default function Login({ setView }: LoginPropsInterface) {
  const url = import.meta.env.VITE_LOGIN;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState("");
  const user = getUserContext();

  const handleLogin = async () => {
    try {
      const res = await fetch(`${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email,password })
      });

      const data = await res.json();

      if (!res.ok) {
        // If server responds with a code and error message
        setErrorMsg(data.message || "Unknown error");
      } else {
        // Login succeeded
        setErrorMsg("");
        user.setToken(data.token);
        user.setName(data.name);
        setView("landingPage");
      }
    } catch (err) {
      setErrorMsg(errorMsg);
    }
  };
  return (
    <section>
      <h2>Login</h2>
      <div>
      <input
        id="username"
        type="text"
        value = {email}
        placeholder="Please enter Email"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        id="password"
        type="password"
        value = {password}
        placeholder="Please enter Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </section>
  );
}
