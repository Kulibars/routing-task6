import { useState, useEffect } from "react";

export const useSearchTask = (task) => {
  const [searchTask, setSearchTask] = useState(task);
  const [searchTaskEl, setSearchTaskEl] = useState("");

  const onSearchTaskChange = ({ target }) => {
    setSearchTaskEl(target.value);
  };
  useEffect(() => {
    if (searchTaskEl === "") {
      setSearchTask(task);
    } else {
      setSearchTask(
        task.filter(({ id, title }) => {
          return title.toLowerCase().indexOf(searchTaskEl.toLowerCase()) !== -1;
        })
      );
    }
  }, [task]);

  return { searchTask, onSearchTaskChange };
};
