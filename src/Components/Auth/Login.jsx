import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(credentials.email, credentials.password);
    setCredentials({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={submitHandler}
          className="flex gap-3 flex-col items-center justify-center"
        >
          <input
            required
            className=" outline-none bg-transparent border-2 placeholder:text-gray-400 border-emerald-600 py-3 px-5 rounded-full text-xl"
            type="email"
            // value={credentials.email}
            name="email"
            onChange={changeHandler}
            placeholder="enter email"
          />
          <input
            className=" outline-none bg-transparent border-2 placeholder:text-gray-400 border-emerald-600 py-3 px-5 rounded-full text-xl"
            type="password"
            name="password"
            // value={credentials.password}
            placeholder="enter password"
            onChange={changeHandler}
          />
          <button className=" mt-5 outline-none text-white border-none border-2 placeholder:text-white bg-emerald-600 py-3 px-5 rounded-full text-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// 22:42
// https://www.youtube.com/watch?v=TTx7Y3a7EmAs
