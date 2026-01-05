import { useState, useEffect } from "react";
import styles from "../styles/Register.module.css";
import logo from "../assets/RainbowGoats-logo.avif";


function Register() {
 const [step, setStep] = useState(() => {
  const savedStep = localStorage.getItem("registerStep");
  return savedStep ? Number(savedStep) : 1;
});

  const [formData, setFormData] = useState(() => {
  const saved = localStorage.getItem("registerData");
  return saved
    ? JSON.parse(saved)
    : {
        email: "",
        password: "",
        inviteCode: "",
        firstName: "",
        lastName: "",
        nationality: "",
        role: "",
        skills: [],
        acceptMonitoring: false,
      };
});

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
  // TODO: send formData to backend

  // Cleanup after successful registration
  // localStorage.removeItem("registerData");
  // localStorage.removeItem("registerStep");
};

  useEffect(() => {
  localStorage.setItem("registerData", JSON.stringify(formData));
}, [formData]);



useEffect(() => {
  localStorage.setItem("registerStep", step);
}, [step]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={logo} alt="Logo" className={styles.logo} />

        {step === 1 && (
          <>
            <h2>Create account</h2>

            <input
              className={styles.input}
              placeholder="Email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
            />

            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => updateField("password", e.target.value)}
            />

            <input
              className={styles.input}
              placeholder="Invite code"
              value={formData.inviteCode}
              onChange={(e) => updateField("inviteCode", e.target.value)}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2>Personal details</h2>

            <input
              className={styles.input}
              placeholder="First name"
              value={formData.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
            />

            <input
              className={styles.input}
              placeholder="Last name"
              value={formData.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
            />

            <input
              className={styles.input}
              placeholder="Nationality"
              value={formData.nationality}
              onChange={(e) => updateField("nationality", e.target.value)}
            />
          </>
        )}

        {step === 3 && (
          <>
            <h2>Work profile</h2>

            <select
              className={styles.input}
              value={formData.role}
              onChange={(e) => updateField("role", e.target.value)}
            >
              <option value="">Select role</option>
              <option value="casual">Casual worker</option>
              <option value="home">Home worker</option>
              <option value="goat">Goat worker</option>
            </select>

            

<select
  multiple
  className={styles.input}
  value={formData.skills}
  onChange={(e) =>
    updateField(
      "skills",
      Array.from(e.target.selectedOptions, (o) => o.value)
    )
  }
>
  <option value="fencing">Fencing</option>
  <option value="goat-handling">Goat handling</option>
  <option value="machinery">Machinery</option>
  <option value="maintenance">Maintenance</option>
  <option value="cleaning">Cleaning</option>
</select>
          </>
        )}

        {step === 4 && (
          <>
            <h2>Monitoring consent</h2>

            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={formData.acceptMonitoring}
                onChange={(e) =>
                  updateField("acceptMonitoring", e.target.checked)
                }
              />
              I accept activity monitoring during my shifts
            </label>
          </>
        )}

        <button
  className={`primary ${styles.button}`}
  onClick={() => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  }}
>

          {step === 4 ? "Create account" : "Next"}
        </button>

        <div className={styles.steps}>
          {[1, 2, 3, 4].map((s) => (
            <span
              key={s}
              className={`${styles.dot} ${step === s ? styles.active : ""}`}
              onClick={() => setStep(s)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Register;
