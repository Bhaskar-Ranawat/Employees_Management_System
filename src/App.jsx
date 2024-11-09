import React, { useContext, useEffect, useState } from "react";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  /**
   * The useEffect hook runs when the component mounts.
   * Its primary purpose in this context is to load the user's session data from
   * localStorage when the app first loads or refreshes.
   *
   * 1. Check for Existing User Session: When the app loads,
   *    it checks if there's a user already logged in by reading the localStorage.
   * 2. Set Initial State: If a logged-in user is found in localStorage,
   *    it sets the user and loggedInUserData states, which help display the
   *    appropriate dashboard (AdminDashboard or EmployeeDashboard).
   */
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!authData) {
      console.log("No authentication data available");
      alert("Invalid global credentials!");
      return;
    }

    let userRole = null;
    let userData = null;

    if (email === "admin@me.com" && password === "123") {
      userRole = "admin";
      userData = authData.admin[0];
    } else {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        userRole = "employee";
        userData = employee;
      }
    }
    if (userRole && userData) {
      setUser(userRole);
      setLoggedInUserData(userData);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: userRole, data: userData })
      );
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials!");
    }
  };
  console.log(user)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;

// 1:07:50 --> Dashboards are created, proceed to manage which page comes up after login

// 1:52:07 --> Start from here tomorrow
// https://www.youtube.com/watch?v=TTx7Y3a7EmA

// 2:16:00 start with updating the data from gpt as per the prompt shared by mentor

// 2:47:33 -- confused by the persistent logged in functionality
// Start from here

// 2:53:00 --> Setting up data in the taskList for it to render specific data according to the employee
// keep on working from here

// 2:56:00


// 3:30:00 work on creating dynamic taskData from createTask.jsx file