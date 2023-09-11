import React, { useState, useEffect } from "react";
import superagent from "superagent";
import base64 from "base-64";
import cookie from "react-cookies";
import jwt_decode from "jwt-decode";
const API = `https://todo-server1-b96u.onrender.com`;

const testUsers = {
  Administrator: {
    password: "admin",
    name: "Administrator",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ",
  },
  Editor: {
    password: "editor",
    name: "Editor",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s",
  },
  Writer: {
    password: "writer",
    name: "Writer",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTY2MzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68",
  },
  User: {
    password: "user",
    name: "User",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5CI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTY2MzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go",
  },
};

export const LoginContext = React.createContext();

export default function LoginProvider(props) {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState({});
  const [notRegesterd, setnotRegesterd] = useState(false);

  const can = (action) => {
    return user?.capabilities?.includes(action);
  };

  const loginFunction = async (username, password) => {
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set(
          "authorization",
          `Basic ${base64.encode(`${username}:${password}`)}`
        );

      // if (auth && auth.password === password) {
      validateToken(response.body);
    } catch (e) {
      setLoginStatus(false);
      setUser({});
      console.error(e);
    }
    // }
  };
  const handelnotregesterd=()=>{
    setnotRegesterd(true)
  }
  const signupFunction = async (username, password, role) => {
    try {
      const response = await superagent.post(`${API}/signup`).send({
        username: username,
        password: password,
        role: role,
      });
      // setLoginStatus(false);
      // setUser({response});
      console.log(response)
      setnotRegesterd(false)

    } catch (e) {
      setLoginStatus(false);
      setUser({});
      console.error(e);
    }
    // }
  };

  const logoutFunction = () => {
    setLoginStatus(false);
    setUser({});
    cookie.remove("token");
    cookie.remove("username");
    cookie.remove("capabilities");
  };

  const validateToken = (user) => {
    try {
      let validUser = jwt_decode(user.token);
      setLoginStatus(true);
      console.log(user);
      setUser(user.user);
      cookie.save("username", validUser.username);
      cookie.save("capabilities", user.user.capabilities);
      cookie.save("token", user.token);
    } catch (e) {
      setLoginStatus(false);
      setUser({});
      console.log("Token Validation Error", e);
    }
  };

  //   const setLoginState = (loggedIn, token, user, error) => {
  //     cookie.save("auth", token);
  //     setLoginStatus(loggedIn);
  //     setUser(user);
  //   };

  useEffect(() => {
    // const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load("token");
    if (cookieToken) {
      // const token = qs.get("token") || cookieToken || null;
      // validateToken(token);
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  const state = {
    loginStatus: loginStatus,
    user: user,
    regestered:notRegesterd,
    login: loginFunction,
    logout: logoutFunction,
    signup:signupFunction,
    notRegesterd:handelnotregesterd,
    can: can,
  };

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}

// export default LoginProvider;
