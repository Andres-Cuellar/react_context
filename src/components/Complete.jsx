import Task from "./Task";
import useTasks from "../hooks/useTasks";

const Complete = () => {
  const { tasksList } = useTasks();
  return (
    <div className="col-sm-4">
      <h5>Tareas Completadas</h5>
      <hr className="mb-5"/>
      {tasksList.map((individualTask) => {
        return (
          <div key={individualTask.id}>
            {individualTask.status == 2 ? (
              <Task
                id={individualTask.id}
                task={individualTask.task}
                status={individualTask.status}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Complete;
