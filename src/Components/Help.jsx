import React, { useEffect } from "react";
import "./Help.css";

function Help() {

  useEffect(() => {
    document.title = "Help | MatchMaker";
  }, []);

  return (
    <div className="help-container">
      <h1>
        <span className="help-heading-primary">How Our App </span>
        <span className="help-heading-secondary">Works?</span>
      </h1>
      <p className="help-paragraph">
        We are committed to helping singles find love and we are confident in
        our ability to do so. MatchMaker matches women and men for lasting and
        fulfilling relationships.
      </p>
      <div className="help-card-container">
        <div className="help-card" style={{ backgroundColor: "#c3fffa" }}>
          <span className="index">1</span>
          <h2>Download App</h2>
          <p>
            Thousand of singles find love through MatchMaker every day.
            Register today!
          </p>
        </div>
        <div className="help-card" style={{ backgroundColor: "#c9f5ff" }}>
          <span className="index">2</span>
          <h2>Create Account</h2>
          <p>
            Before you start to match, chat and meet, you’ll need to create an
            account.
            <br></br>
            <a href="/" className="link">Create a new MatchMaker Account</a>
          </p>
        </div>
        <div className="help-card" style={{ backgroundColor: "#d1ffd4" }}>
          <span className="index">3</span>
          <h2>Fill Profile</h2>
          <p>Complete your profile so that people can know you more easily.</p>
        </div>
        <div className="help-card" style={{ backgroundColor: "#f7d5fe" }}>
          <span className="index">4</span>
          <h2>Start Swiping</h2>
          <p>Now all you have to do is impress :D</p>
        </div>
      </div>
    </div>
  );
}

export default Help;
