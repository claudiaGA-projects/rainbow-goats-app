import StatusActionButton from "./StatusActionButton";

function WorkerStatusCard({
  clockedIn,
  setClockedIn,
  pause,
  setPause,
  lunch,
  setLunch,
  setActiveModal,
}) {
  return (
    <div>
      <StatusActionButton
        labelOn="Clock out"
        labelOff="Clock in"
        isActive={clockedIn}
        onToggle={() => {
          if (clockedIn) {
            setPause(false);
            setLunch(false);
            setActiveModal(null);
          }
          setClockedIn(!clockedIn);
        }}
      />

      {clockedIn && (
        <>
          <StatusActionButton
            labelOn="Pause ON"
            labelOff="Pause"
            isActive={pause}
            onToggle={() => setPause(!pause)}
            opensModal
            modalKey="pause"
            setActiveModal={setActiveModal}
          />

          <StatusActionButton
            labelOn="Lunch ON"
            labelOff="Lunch break"
            isActive={lunch}
            onToggle={() => setLunch(!lunch)}
          />

          <StatusActionButton
            labelOff="Emergency"
            onClick={() => setActiveModal("emergency")}
            danger
          />
        </>
      )}
    </div>
  );
}

export default WorkerStatusCard;
