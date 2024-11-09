import React from "react";

const NewTask = ({ data = {} }) => {
  console.log(data);
  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="bg-red-600 text-s px-3 py-1 rounded">{data.taskCategory}</h2>
        <h2 className="text-xs">{data.taskDate}</h2>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">
        {data.taskTitle}
      </h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className="mt-4">
        <button className="bg-blue-500 py-2 px-2 text-sm rounded-2xl text-black">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
