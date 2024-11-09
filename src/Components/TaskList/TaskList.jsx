import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data = {} }) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-auto items-center justify-start gap-5 flex-nowrap mt-10 h-[55%] py-5 w-full "
    >
      {data.tasks.map((e, index) => {
        // each condition have a return statement so that whenever a status results true, it renders only
        // one component for the element
        if (e.active) {
          return <AcceptTask key={index} data={e} />;
        }
        if (e.newTask) {
          return <NewTask key={index} data={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={index} data={e} />;
        }
        if (e.failed) {
          return <FailedTask key={index} data={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;

// 2:32:27

/***
 * Business logic
 * As an admin, if I create a new Task for an employee, it's newTask status should become 'true'
 *  * (NewTask:'True', Active:'False', Completed:'False', Failed:'False' )
 *
 * As soos as the employee accepts it as a task, the status of Active should become 'true
 * and simultaneously the status of newTask should become false
 *  * Upon accepting to work on a task ->
 *  * (NewTask:'False', Active:'True', Completed:'False', Failed:'False' )
 *
 * Need to implement this or change the priority of conditionals
 * in the map methos to check the newTask status first
 * Changing the sequence of conditionals now with this data
 * comes with serious implications as it would never render activeTask
 * -------------> 2:37:00
 */
