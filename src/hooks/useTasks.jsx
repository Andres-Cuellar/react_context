import { useContext } from "react";
import TasksContext from "../context/TasksProvider";

const useTasks = () => {
  return useContext(TasksContext);
};

export default useTasks;

/*
Custom Hook que evita cargar 
import { useContext } from "react";
import TasksContext from "../context/TasksProvider";
en todos los componentes que lo necesitan
*/
