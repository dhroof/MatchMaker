import React, { useEffect, useState } from "react";
import "./SignUp.css";

const SignUp = () => {

  useEffect(() => {
    document.title = "Sign Up | MatchMaker";
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="SIGNUP">
      <div className="left-side">
        <div className="signup-text">
          <h1>
            <span className="home-text-secondary">Register</span>
            <span className="home-text-primary"> with us</span>
          </h1>
          <p className="signup-paragraph">
            We promise to find you love, or at least a really good story for
            your future grandchildren. Sign up now!
          </p>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="name-container">
              <label>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </label>
            </div>
            <label>
              Mobile Number:
              <input
                type="tel"
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.target.value)}
                pattern="[0-9]*"
                required
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </label>
            <button type="submit" className="home-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="right-side">{}</div>
    </div>
  );
};

export default SignUp;
