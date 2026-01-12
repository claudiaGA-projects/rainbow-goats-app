import styles from "../styles/WorkerHome.module.css";

function StatusActionButton({
  active,
  onClick,
  colorOn,
  colorOff,
  full = false,
  children,
}) {
  return (
    <button
      className={`${styles.button} ${styles[colorOn]} ${
        !active ? styles[colorOff] : ""
      } ${full ? styles.full : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default StatusActionButton;
