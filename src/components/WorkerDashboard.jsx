import { useState } from "react"

function WorkerDashboard() {
  const [isWorking, setIsWorking] = useState(false)

  function handleClock() {
    setIsWorking(!isWorking)
  }

  return (
    <div>
      <h2>Worker Dashboard</h2>

      <p>Status: {isWorking ? "Working" : "Not working"}</p>

      <button onClick={handleClock}>
        {isWorking ? "Clock Out" : "Clock In"}
      </button>

      <button>Emergency</button>
    </div>
  )
}

export default WorkerDashboard