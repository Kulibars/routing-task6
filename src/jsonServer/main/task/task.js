import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../../styles/task.module.css";
import { updateTask, deleteTask } from "../../api";
import { useState } from "react";
import { TaskNotFound } from "../notFound/taskNotFound";

export const Task = ({ task }) => {
  const params = useParams();
  const ids = params.id;

  const taskСheck = task.find(({ id }) => {
    return id === ids;
  });

  const check = taskСheck || "";

  const [newTitle, setNewTitle] = useState(check.title);
  if (!taskСheck) {
    return <TaskNotFound />;
  }

  const onTitleChange = ({ target }) => {
    setNewTitle(target.value);
  };

  const onTaskRemove = () => {
    deleteTask(ids);
  };

  const onTaskSave = () => {
    updateTask({ id: ids, title: newTitle });
  };

  return (
    <div className={styles.taskContent}>
      <div className={styles.taskContainer}>
        <textarea
          onChange={onTitleChange}
          type="text"
          value={newTitle}
          className={styles.taskInput}
          placeholder="Изменить"
          id={params.id}
        ></textarea>
        <div className={styles.taskControlPanel}>
          <Link
            onClick={onTaskSave}
            id={params.id}
            className={styles.bottonTask}
            to={"/"}
          >
            изменить
          </Link>
          <Link
            onClick={onTaskRemove}
            id={params.id}
            className={styles.bottonTask}
            to={"/"}
          >
            Удалить
          </Link>
          <Link className={styles.bottonTask} to={"/"}>
            К списку задач
          </Link>
        </div>
      </div>
    </div>
  );
};
