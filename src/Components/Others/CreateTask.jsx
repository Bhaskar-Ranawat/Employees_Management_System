import React, { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const CreateTask = () => {
  const initialTaskData = {
    taskTitle: "",
    taskDate: "",
    taskCategory: "",
    taskDescription: "",
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };
  const [firstName, setFirstName] = useState("");
  const [taskData, setTaskData] = useState(initialTaskData);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else {
      setTaskData({ ...taskData, [name]: value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
    console.log(taskData);
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    console.log(data);
    data.forEach((elem) => {
      if (elem.firstName === firstName) {
        elem.tasks.push(taskData);
        console.log(elem.tasks);

        if (elem.taskCounts) {
          elem.taskCounts.newTask += 1;
        } else {
          elem.taskCounts = {
            active: 0,
            completed: 0,
            failed: 0,
            newTask: 1,
          };
        }
      }
    });
    localStorage.setItem("employees", JSON.stringify(data));
    setTaskData(initialTaskData);
    setFirstName("");
    console.log("Task created:", taskData);
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
              value={firstName}
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

// 3:44:00 start to inquire about how can you implement
// the state updation on the admin dashboard so that it
// can show the taskCounts updation in real time
