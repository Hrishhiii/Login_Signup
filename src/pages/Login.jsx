import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    textAlign: "center",
  },
  heading: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginTop: "5px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    background: "rgba(255, 255, 255, 0.3)",
    color: "#333",
  },
  button: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    marginBottom: "15px",
  },
};

export default Login;
