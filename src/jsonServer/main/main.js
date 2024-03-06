import { useEffect, useState } from "react";
import { readTask } from "../api";
import styles from "../styles/main.module.css";
import { TaskList } from "./taskList/taskList.js";
import { Task } from "./task/task.js";
import { NotFound } from "./notFound/notFound.js";
import { Route, Routes, Navigate } from "react-router-dom";

export const Main = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    readTask().then((loadedTask) => setTask(loadedTask));
  }, [task]);

  return (
    <>
      <div className={styles.main}>
        <Routes>
          <Route path="/task" element={<TaskList task={task} />} />
          <Route path="/task/:id" element={<Task task={task} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/" element={<Navigate to="/task" />} />
        </Routes>
      </div>
    </>
  );
};
