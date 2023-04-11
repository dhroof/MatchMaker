import React, { useEffect } from "react";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    document.title = "Sign In | MatchMaker";
  }, []);

  return (
    <div className="login-body">
      <div className="login-box">
        <div className="first-part">
          <div className="heading-box">
            <h1>Sign In</h1>
            <p>Lets get started</p>
          </div>
          <form className="form-vertical">
            <input className="username-signin" placeholder="Username"></input>
            <input
              type="password"
              className="password-signin"
              placeholder="Password"
            ></input>
            <button className="signin-btn">Sign In</button>
            <button className="social-btn">
              <img src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"></img>
              Continue with Google
            </button>
          </form>
        </div>
        <div className="second-part">
          <img
            src="https://professionalwebdesigns.co.uk/images/quote_banner.png"
            alt="login-image"
          />
        </div>
      </div>
      <video autoPlay muted loop>
        <source
          src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Login;
