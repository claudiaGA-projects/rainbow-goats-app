import WorkStatusCard from "../components/WorkerStatusCard";

import { useState } from "react";
import WorkerStatusCard from "../components/WorkerStatusCard";

function WorkerHome() {
  // Estado principal del trabajador
  const [clockedIn, setClockedIn] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [pause, setPause] = useState(false);

  // Modal activo (null | "pause" | "emergency")
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div>
      <h1>Worker Home</h1>

      <WorkerStatusCard
        clockedIn={clockedIn}
        setClockedIn={setClockedIn}
        lunch={lunch}
        setLunch={setLunch}
        pause={pause}
        setPause={setPause}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </div>
  );
}

export default WorkerHome;
