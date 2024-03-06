import styles from "../../styles/notFound.module.css";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className={styles.notFoundContent}>
      <div className={styles.notFound}>
        <h1>404</h1>
        <h3 className={styles.notFound}>СТРАНИЦА НЕ НАЙДЕНА</h3>
        <Link className={styles.links} to={"/"}>
          К списку задач
        </Link>
      </div>
    </div>
  );
};
