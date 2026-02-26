import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });

  const validateEmail = (value) => {
    // Accepts: .com, .in, or any country/domain code with 2+ letters
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|[a-zA-Z]{2,})$/i;

    if (!value) return "Email is required";
    if (!value.includes("@")) return "Email must contain @";
    if (!emailRegex.test(value)) return "Use valid format like name@domain.com / .in / country code";
    return "";
  };

  const validatePassword = (value) => {
    if (!value) return "Password is required";
    if (!/^[A-Z]/.test(value)) return "Must start with a capital letter";
    if (!/[0-9]/.test(value)) return "Must contain at least one number";
    if (!/[!@#$%^&*(),.?\":{}|<>_\-+=/\\[\]`~;]/.test(value)) {
      return "Must contain at least one special character";
    }
    if (value.length < 5) return "Must contain at least 5 characters";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: name === "email" ? validateEmail(value) : validatePassword(value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    setErrors((prev) => ({
      ...prev,
      [name]: name === "email" ? validateEmail(email) : validatePassword(password),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({ email: emailError, password: passwordError });
    setTouched({ email: true, password: true });

    if (!emailError && !passwordError) {
      alert("Form submitted successfully");
    }
  };

  const isValid = !errors.email && !errors.password && email && password;

  return (
    <div className="container">
      <div className="form-card">
        <h1>CANDIDATE LOGIN FORM</h1>
        <p className="subtitle">Enter Your Details</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@domain.com"
              className={touched.email && errors.email ? "input-error" : ""}
            />
            <span className="error-message">{touched.email ? errors.email : "\u00A0"}</span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ex: A1@bc"
              className={touched.password && errors.password ? "input-error" : ""}
            />
            <span className="error-message">{touched.password ? errors.password : "\u00A0"}</span>
          </div>

          <button className="submit-btn" disabled={!isValid} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
