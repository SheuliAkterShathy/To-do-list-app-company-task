import React from "react";

const AddTaskForm = ({
  newTask,
  setNewTask,
  addTask,
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
}) => {
  return (
    <section>
      {updateData && updateData ? (
        <>
          {/*......... Update Task .........*/}

          <div className="flex mb-6 justify-between mx-1">
            <div>
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="p-5  text-left font-xl border-2"
                type="text"
              />
            </div>
            <div>
              <button
                onClick={updateTask}
                className="btn bg-sky-300 border-2 py-5 px-10"
              >
                Update
              </button>
            </div>
            <div>
              <button
                onClick={cancelUpdate}
                className="btn bg-yellow-200 border-2 py-5 px-10"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* .........  Add Task .......... */}
          <div className="flex mb-6 justify-between mx-1">
            <div>
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="p-5 w-[400px] text-left font-xl border-2"
                type="text"
              />
            </div>
            <div>
              <button
                className="btn bg-sky-300 border-2 py-5 px-10"
                onClick={addTask}
              >
                Add Task
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AddTaskForm;
