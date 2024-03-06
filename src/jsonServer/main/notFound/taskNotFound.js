import { Link } from "react-router-dom";
import styles from "../../styles/notFound.module.css";
export const TaskNotFound = () => {
  return (
    <div className={styles.notFoundContent}>
      <div className={styles.notFound}>
        <h3>ЗАДАЧА НЕ НАЙДЕНА</h3>
        <Link className={styles.links} to={"/"}>
          К списку задач
        </Link>
      </div>
    </div>
  );
};
