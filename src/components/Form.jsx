import { useState } from "react";
import useTasks from "../hooks/useTasks";
import swal from "sweetalert";

const Form = () => {
  const { tasksList, setTasksList, createID, addTask } = useTasks();

  const [task, setTask] = useState("");
  const taskArray = [];

  const objectTask = {
    id: createID(),
    task,
    status: 0,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (task == "") {
      swal({ button: false, text: "Debes escribir una tarea" });
      return;
    }

    for (let i = 0; i < tasksList.length; i++) {
      const element = tasksList[i].task;
      taskArray.push(element);
    }

    if (taskArray.includes(task)) {
      swal({ button: false, text: "Esta tarea ya existe" });
    } else {
      addTask(objectTask);
    }
    setTask("")
  };

  return (
    <div className="col-12 sticky-sidebar shadow-sm m-2 p-4 position-sticky  fixed-top overflow-auto bg-light">
      <h3 className="mb-5 text-center">Agrega una nueva Tarea</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <img className="icon-task" src="task-sheet.png" alt="" />
            </span>
          </div>
          <input
            id="newTask"
            type="text"
            className="form-control"
            placeholder="Escribe una tarea"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-success" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
