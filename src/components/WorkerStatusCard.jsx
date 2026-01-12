import styles from "../styles/WorkerHome.module.css";
import StatusActionButton from "./StatusActionButton";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
}

function WorkerStatusCard({
  userName,
  clockedIn,
  startTime,
  onClock,
  lunchOn,
  setLunchOn,
  pauseOn,
  setPauseOn,
  lunchSeconds,
  pauseSeconds,
}) {
  return (
    <div>
        <div className={styles.header}>
          <span className={styles.userIcon}>👤</span>
          <span>{userName}</span>
        </div>
        

      <StatusActionButton
          full
          active={clockedIn}
          colorOn="green"
          colorOff="gray"
          onClick={onClock}
        >
          <div>
            {clockedIn ? "Clock Out" : "Clock In"}
            {clockedIn && startTime && (
              <div className={styles.subText}>
                Started {startTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            )}
          </div>
        </StatusActionButton>

        {clockedIn && (
          <>
            <div className={styles.row}>
              <StatusActionButton
                active={lunchOn}
                colorOn="yellow"
                colorOff="gray"
                onClick={() => setLunchOn(!lunchOn)}
              >
                {lunchOn? 'Lunch '+ formatTime(lunchSeconds) : 'Lunch'}
              </StatusActionButton>

              <StatusActionButton
                active={pauseOn}
                colorOn="orange"
                colorOff="gray"
                onClick={() => setPauseOn(!pauseOn)}
              >
                {pauseOn? 'Pause'+ formatTime(pauseSeconds) : 'Pause'}
              </StatusActionButton>
            </div>

           <button
      className={styles.emergency}
      onClick={() => alert("Emergency sent to admin")}
    >
      Emergency
           </button>
          </>
        )}
      </div>
  );
}

export default WorkerStatusCard;
