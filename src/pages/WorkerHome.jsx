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
            setStartTime(new Date());
        } else {
            setClockedIn(false);
            setLunchOn(false);
            setPauseOn(false);
        }
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
                        setLunchOn={setLunchOn}
                        pauseOn={pauseOn}
                        setPauseOn={setPauseOn}
                        lunchSeconds={lunchSeconds}
                        pauseSeconds={pauseSeconds}
                    />
                </div>
            </div>
        </div>
    );
}

export default WorkerHome;
