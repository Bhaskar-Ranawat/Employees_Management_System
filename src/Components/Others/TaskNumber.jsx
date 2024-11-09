import React from "react";

const TaskNumber = ({ data }) => {
  return (
    <div className="flex mt-10  w-screen justify-between gap-5">
      <div className="w-[45%] py-6 px-9 bg-green-400 rounded-xl">
        <h2 className="text-2xl font-semibold"> {data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-blue-400 rounded-xl">
        <h2 className="text-2xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-red-400 rounded-xl">
        <h2 className="text-2xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Tasks</h3>
      </div>
      <div className="w-[45%] py-6 px-9 bg-yellow-500 rounded-xl">
        <h2 className="text-2xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
