import React, { useState } from "react";
import "./App.css"; // You can create an App.css file for custom styles

function App() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ email: "", password: "" });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="App">
      <div className="form-container">
        <div className="form-card">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="form-card">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
          <input
              type="text"
              placeholder="Username"
              value={signupData.username}
              onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
