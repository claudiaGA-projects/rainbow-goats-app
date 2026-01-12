import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/Register"
import WorkerHome from "./pages/WorkerHome"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/worker" element={<WorkerHome />} />
      </Routes>
    </div>
  )
}

export default App