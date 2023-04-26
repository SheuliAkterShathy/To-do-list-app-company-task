import React from "react";
import Task from "./Task";

const TaskList = ({ toDo, deleteTask, markCompleted, setUpdateData }) => {
  return (
    <div>
      {toDo && toDo.length ? "" : "No tasks are available......"}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <Task
                key={task.id}
                task={task}
                index={index}
                deleteTask={deleteTask}
                markCompleted={markCompleted}
                setUpdateData={setUpdateData}
              ></Task>
            );
          })}
    </div>
  );
};

export default TaskList;
