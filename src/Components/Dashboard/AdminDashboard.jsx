import React from "react";
import Headers from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTasks from "../Others/AllTasks";

const AdminDashboard = ({ changeUser, data }) => {
  // console.log(changeUser)
  return (
    <div className="h-screen w-full p-10">
      <Headers changeUser = {changeUser} data={data} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
