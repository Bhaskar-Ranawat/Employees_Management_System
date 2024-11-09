import React, { useState } from "react";

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    taskTitle: "",
    taskDate: "",
    firstName: "",
    taskCategory: "",
    taskDescription: "",
    active: "false",
    newTask: "true",
    failed: "false",
    completed: "false",
  });

  const changeHandler = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTaskData({
      taskTitle: "",
      taskDate: "",
      firstName: "",
      taskCategory: "",
      taskDescription: "",
    });
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex w-full p-5 mt-10 placeholder:bg-[black] bg-[#1C1C1C] flex-wrap items-strat justify-between"
      >
        <div className="w-1/2 ">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskData.taskTitle}
              onChange={changeHandler}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text"
              name="taskTitle"
              id=""
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskData.taskDate}
              onChange={changeHandler}
              type="date"
              name="taskDate"
              id=""
              placeholder="enter date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={taskData.firstName}
              onChange={changeHandler}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              type="text"
              name="firstName"
              id=""
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={taskData.taskCategory}
              onChange={changeHandler}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              name="taskCategory"
              id=""
              placeholder="design, dev, etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm texxt-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskData.taskDescription}
            onChange={changeHandler}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            placeholder=""
            name="taskDescription"
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 textsm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

// check about the value={} thing
// it is used to set the initial value of the input field

// can you explain this value thing?
