import { createContext, useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState([]);

  const url = "http://localhost:3000/tasks/";
  const urlAPI = "https://api.jsonbin.io/v3/b/62e167f6248d43754f079b79/"

  const loadTasks = async () => {
    const res = await axios.get(url);
    if (res) setTasksList(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createID = () => {
    const random = Math.random().toString(36);
    const date = Date.now().toString(36);
    return date + random;
  };

  const addTask = async (tasks) => {
    const res = await axios.post(url, tasks);
    loadTasks();
  };

  const editTask = async (id, task) => {
    await axios.put(`${url}${id}`, task);
    loadTasks();
  };

  const deleteTask = async (id) => {
    swal({
      title: "¿Deseas eliminar esta tarea?",
      text: "Si das 'OK' se eliminará PARA SIEMPRE!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`${url}${id}`).then((res) => {
          swal({
            title: "¡Hecho!",
            text: "La tarea se ha eliminado...",
            icon: "success",
            timer: 2000,
            button: false,
          });
        });

        const updatedTasks = tasksList.filter((task) => task.id !== id);
        setTasksList(updatedTasks);
      }
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasksList,
        setTasksList,
        deleteTask,
        createID,
        editTask,
        addTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksProvider };

export default TasksContext;
