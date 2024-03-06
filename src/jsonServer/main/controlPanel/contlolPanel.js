import styles from "../../styles/controlPanel.module.css";
import { useState } from "react";
import { createTask } from "../../api";

export const ControlPanel = ({ setSortFlag, sortFlag, onSearchTaskChange }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const sortTodoClick = () => setSortFlag(!sortFlag);

  const onSearchPhraseChange = ({ target }) => {
    setSearchPhrase(target.value);
  };
  const onTodoAdd = () => {
    const dateID = String(new Date().getTime());
    createTask({ id: dateID, title: searchPhrase });
    setSearchPhrase("");
  };

  return (
    <div className={styles.controlContainer}>
      <input
        onChange={onSearchTaskChange}
        className={styles.taskSearch}
        placeholder="Поиск"
      ></input>
      <div className={styles.addTask}>
        <input
          value={searchPhrase}
          type="text"
          placeholder="создать новую задачу"
          onChange={onSearchPhraseChange}
        ></input>
        <button onClick={onTodoAdd}>✚</button>
      </div>
      <button onClick={sortTodoClick} className={styles.sorting}>
        Сортировка
      </button>
    </div>
  );
};

// onClick={SearchTodos}
