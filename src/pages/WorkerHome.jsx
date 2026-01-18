import { useState, useEffect } from "react";
import WorkerStatusCard from "../components/WorkerStatusCard";
import styles from "../styles/WorkerHome.module.css";


function WorkerHome() {
    // Estado principal del trabajador
    const [clockedIn, setClockedIn] = useState(false);
    const [startTime, setStartTime] = useState(null);

    const [lunchOn, setLunchOn] = useState(false);
    const [pauseOn, setPauseOn] = useState(false);

    const [lunchSeconds, setLunchSeconds] = useState(0);
    const [pauseSeconds, setPauseSeconds] = useState(0);

    const [blockMessage, setBlockMessage] = useState(null);

    const [events, setEvents] = useState([]);

    const addEvent = (type, extra = {}) => {
        setEvents((prev) => [
            ...prev,
            {
                type,
                time: new Date(),
                ...extra,
            },
        ]);
    };

    // timers
    useEffect(() => {
        let interval;

        if (lunchOn) {
            interval = setInterval(() => {
                setLunchSeconds((s) => s + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [lunchOn]);

    useEffect(() => {
        let interval;

        if (pauseOn) {
            interval = setInterval(() => {
                setPauseSeconds((s) => s + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [pauseOn]);

    const handleClock = () => {
        if (!clockedIn) {
            setClockedIn(true);
            const now = new Date();
            setStartTime(now);
            addEvent("clock_in");
        } else {
            setClockedIn(false);
            setLunchOn(false);
            setPauseOn(false);
            addEvent("clock_out");
        }
    };

    // Lunch/Pause relation
    const toggleLunch = () => {
        if (pauseOn) {
            setBlockMessage(
                "You are currently on pause. Stop pause to start lunch."
            );
            return;
        }
        setLunchOn((prev) => !prev);
    };

    const togglePause = () => {
        if (lunchOn) {
            setBlockMessage(
                "You are currently on lunch. Stop lunch to start pause."
            );
            return;
        }
        setPauseOn((prev) => !prev);
    };


    // Modal activo (null | "pause" | "emergency")
    // const [activeModal, setActiveModal] = useState(null);

    return (
        <div>
            <div className={styles.container}>

                <div className={styles.card}>

                    <WorkerStatusCard
                        userName="Jane Doe"
                        clockedIn={clockedIn}
                        startTime={startTime}
                        onClock={handleClock}
                        lunchOn={lunchOn}
                        pauseOn={pauseOn}
                        onToggleLunch={toggleLunch}
                        onTogglePause={togglePause}
                        lunchSeconds={lunchSeconds}
                        pauseSeconds={pauseSeconds}
                    />

                    <pre style={{ fontSize: "0.7rem" }}>
                        {JSON.stringify(events, null, 2)}
                    </pre>
                </div>
            </div>
            {blockMessage && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <p>{blockMessage}</p>
                        <button onClick={() => setBlockMessage(null)}>OK</button>
                    </div>
                </div>
            )}

        </div>

    );

}


export default WorkerHome;

