import React, { useContext, useState } from "react";
import { When } from "react-if";

import { LoginContext } from "./context";

export default function Login() {
  const { login, logout, signup ,notRegesterd} = useContext(LoginContext);
  const Login = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleChange = (e) => {
    const { name, value, role } = e.target;
    setUsername(name === "username" ? value : username);
    setPassword(name === "password" ? value : password);
    setRole(name === "role" ? value : role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };
  const handelnotregesterd = (e) => {
    e.preventDefault();
    notRegesterd()
  };

  const handelsignup = (e) => {
    e.preventDefault();
    signup(username, password, role);
  };

  return (
    <>
      <When condition={Login.loginStatus}>
        <button onClick={logout}>Log Out</button>
      </When>

      <When condition={!Login.loginStatus && !Login.regestered}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
          <button onClick={handelnotregesterd}>signup</button>
      </When>

      <When condition={!Login.loginStatus && Login.regestered}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <input placeholder="role" name="role" onChange={handleChange} />
          <button onClick={handelsignup}>signup</button>
        </form>
      </When>
    </>
  );
}
