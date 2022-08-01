import useTasks from "../hooks/useTasks";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


const Task = ({ id, task }) => {
  const { deleteTask, editTask } = useTasks();

  return (
    <>
      <h6>{task}</h6>
      <div className="btn-group col-12" role="group">
        <Popup
          trigger={
            <button className="btn btn-primary"> Cabmbiar estado </button>
          }
          position="right center"
        >
          <p>Define el nuevo estado</p>
          <button
            type="button"
            className="btn btn-danger col-12 mb-2"
            onClick={() => editTask(id, { task, status: 0 })}
          >
            Pendiente
          </button>
          <button
            type="button"
            className="btn btn-warning col-12 mb-2"
            onClick={() => editTask(id, { task, status: 1 })}
          >
            En Proceso
          </button>
          <button
            type="button"
            className="btn btn-success col-12 "
            onClick={() => editTask(id, { task, status: 2 })}
          >
            Completado
          </button>
        </Popup>
        <button className="btn btn-danger" onClick={() => deleteTask(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
      <hr className="mb-5 mx-5"></hr>
    </>
  );
};

export default Task;


