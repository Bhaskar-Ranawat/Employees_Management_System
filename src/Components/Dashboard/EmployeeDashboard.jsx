import React from "react";
import Header from "../Others/Header";
import TaskNumber from "../Others/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ changeUser, data }) => {
  // console.log(data);
  return (
    <div>
      <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header changeUser={changeUser} data={data} />

        {data ? (
          <>
            <h1>{data.email}</h1>
            <TaskNumber data={data} />
            <TaskList data={data} />
          </>
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;
