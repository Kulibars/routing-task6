import { useState, useEffect } from "react";

export const useSortTask = (searchTask) => {
  const [sortTask, setSortTask] = useState([]);
  useEffect(() => {
    setSortTask(
      [...searchTask].sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      )
    );
  }, [searchTask]);

  return { sortTask };
};
