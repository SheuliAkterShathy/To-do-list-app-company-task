import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Task = ({ task, index, deleteTask, markCompleted, setUpdateData }) => {
  return (
    <div>
      <React.Fragment>

        {/* ........ Show number of task ..........*/}

        <div className="bg-[#555] border-r-4 mb-5 p-5 text-left font-xl relative">
          <div className={task.status ? "line-through opacity-50 flex-1" : ""}>
            <div className="flex">
              <span className="text-[#d1d1d1] border rounded-full p-1 flex items-center justify-center text-center w-7 h-7 mr-3">
                {index + 1}
              </span>
              <span className="taskText text-[#d1d1d1]">{task.title}</span>
            </div>
          </div>

          <div className="absolute inline-block top-[50%] w-auto right-4 translate-y-[-50%] text-[#d1d1d1]">
            <span onClick={(e) => markCompleted(task.id)}>
              <FontAwesomeIcon
                className="inline-block mx-2 cursor-pointer text-sky-400 hover:text-sky-600"
                title="Completed/Not Completed"
                icon={faCircleCheck}
              />
            </span>
            {task.status ? null : (
              <span
                onClick={() =>
                  setUpdateData({
                    id: task.id,
                    title: task.title,
                    status: task.status ? true : false,
                  })
                }
              >
                <FontAwesomeIcon
                  className="inline-block mx-2 cursor-pointer hover:text-sky-600 text-sky-400"
                  title="Edit"
                  icon={faPen}
                />
              </span>
            )}

            <span onClick={() => deleteTask(task.id)}>
              <FontAwesomeIcon
                className="inline-block mx-2 cursor-pointer hover:text-sky-600 text-sky-400"
                title="Delete"
                icon={faTrashCan}
              />
            </span>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Task;
