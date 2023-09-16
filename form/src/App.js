import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div>
      <h1>Login/Sign Up Form</h1>
      <button onClick={toggleLoginForm}>
        {isLoginFormVisible ? "Show Sign Up Form" : "Show Login Form"}
      </button>

      {isLoginFormVisible ? <LoginForm /> : <SignUpForm />}
    </div>
  );
}

export default App;
