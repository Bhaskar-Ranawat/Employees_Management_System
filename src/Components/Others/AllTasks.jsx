import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);
  //   console.log(authData);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-violet-500 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className=" text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className=" text-lg font-medium w-1/5">New Task</h3>
        <h3 className=" text-lg font-medium w-1/5">Accepted Task</h3>
        <h3 className=" text-lg font-medium w-1/5">Completed Task</h3>
        <h3 className=" text-lg font-medium w-1/5">Failed Task</h3>
      </div>
      {authData.employees.map(function (elem, index) {
        return (
          <div
            className="mb-2 py-2 px-4 flex justify-between rounded border-2 border-emerald-600 bg-transparent "
            key={index}
          >
            <h2 className="text-white w-1/5 text-lg font-medium ">
              {elem.firstName}
            </h2>
            <h3 className="text-green-400 w-1/5 text-lg font-medium">
              {elem.taskCounts.newTask}
            </h3>
            <h3 className="text-red-400 w-1/5 text-lg font-medium">
              {elem.taskCounts.active}
            </h3>
            <h3 className="text-blue-400 w-1/5 text-lg font-medium">
              {elem.taskCounts.completed}
            </h3>
            <h3 className="text-yellow-400 w-1/5 text-lg font-medium">
              {elem.taskCounts.failed}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default AllTasks;
