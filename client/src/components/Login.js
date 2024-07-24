import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const login = () => {};
  return (
    <div className="login">
      <label>Login!</label>
      <input
        placeholder="Username"
        onChange={(event) => {
          setUsername({ ...username, userName: event.target.value });
        }}
      />
      <input
        placeholder="Password"
        onChange={(event) => {
          setUsername({ ...username, password: event.target.value });
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
