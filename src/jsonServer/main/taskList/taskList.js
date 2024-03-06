import { Link } from "react-router-dom";
import { useState } from "react";
import { useSortTask, useSearchTask } from "../../hooks";
import { ControlPanel } from "../controlPanel/contlolPanel";
import styles from "../../styles/taskList.module.css";
export const TaskList = ({ task }) => {
  const [sortFlag, setSortFlag] = useState(false);
  const { searchTask, onSearchTaskChange } = useSearchTask(task);
  const { sortTask } = useSortTask(searchTask);

  return (
    <>
      <div className={styles.taskList}>
        {!sortFlag
          ? searchTask.map(({ id, title }) => (
              <Link
                className={styles.tasks}
                id={id}
                key={id}
                to={`/task/${id}`}
              >
                {title.length >= 50 ? title.slice(0, 50) + "..." : title}
              </Link>
            ))
          : sortTask.map(({ id, title }) => (
              <Link
                className={styles.tasks}
                id={id}
                key={id}
                to={`/task/${id}`}
              >
                {title.length >= 50 ? title.slice(0, 50) + "..." : title}
              </Link>
            ))}
      </div>
      <ControlPanel
        sortFlag={sortFlag}
        setSortFlag={setSortFlag}
        onSearchTaskChange={onSearchTaskChange}
      />
    </>
  );
};
