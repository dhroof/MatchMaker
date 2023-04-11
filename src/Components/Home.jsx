import React, { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "Home | MatchMaker";
  }, []);

  return (
    <div className="home">
      {/* Landing Page */}
      <div className="home-container">
        <div className="home-text">
          <h1>
            <span className="home-text-primary">Find Your</span>
            <span className="home-text-secondary"> Real Connections</span>
          </h1>
          <button className="home-button">Join MatchMaker</button>
        </div>
      </div>

      {/* About MatchMaker */}
      <section className="about-matchmaker bg-dark">
        <div className="frame">
          <div className="section-heading">
            What is Matchmaker and What makes it special?
          </div>
          <div className="paragraph">
            <p>
              Welcome to MatchMaker, the ultimate online dating app designed
              specifically for college students! Our app offers a unique
              approach to finding that special someone, combining cutting-edge
              algorithms with a user-friendly interface to make the dating
              experience easier, safer, and more enjoyable than ever before.
            </p>
            <p>
              Unlike other dating apps that rely solely on swiping, MatchMaker
              uses a sophisticated matching system that takes into account your
              personal preferences, interests, and location to provide you with
              the most compatible matches possible. Our app also includes a
              number of innovative features designed to enhance your dating
              experience, such as real-time chat, in-app video calls, and
              personalized matchmaking.
            </p>
            <p>
              At MatchMaker, we understand that safety is a top priority for our
              users. That's why we've implemented a number of security measures
              to ensure that your personal information is protected at all
              times. We also offer a variety of resources and tips to help you
              stay safe while using our app.
            </p>
            <p>
              But what really sets MatchMaker apart from other dating apps is
              our focus on creating meaningful connections. We believe that true
              compatibility is about more than just physical attraction, which
              is why our app is designed to help you connect with people who
              share your values, interests, and goals.
            </p>
            <p>
              So whether you're looking for a casual fling or a serious
              relationship, MatchMaker has got you covered. Our app is the
              perfect tool for college students who are looking to meet new
              people, make meaningful connections, and find that special
              someone. Join MatchMaker today and start swiping right on your
              future!
            </p>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="how-to-use">
        <h1 className="section-heading light-navbar">
          The ultimate dating experience
        </h1>
        <div className="card-box">
          <div class="card">
            <div class="card-image">
              <img src="https://cdni.trulymadly.com/tm-static-assets-production/web/app-image-2-large.webp"></img>
              <h2>Date</h2>
            </div>
            <div class="card-text">
              <p>
                Find meaningful connections on MatchMaker, where we prioritize
                respect and equality in dating.
              </p>
              <a>Learn More</a>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="https://cdni.trulymadly.com/tm-static-assets-production/web/app-image-4-large.webp" />
              <h2>Quiz</h2>
            </div>
            <div class="card-text">
              <p>Discover your perfect match with a compatibility quiz.</p>
              <a>Learn More</a>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="https://cdni.trulymadly.com/tm-static-assets-production/web/app-image-3-large.webp" />
              <h2>Chat</h2>
            </div>
            <div class="card-text">
              <p>
                Get ready to chat with potential partners who share your values
                and interests.
              </p>
              <a>Learn More</a>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="https://giftworldapp.com/wp-content/uploads/2022/11/iPhone-11-Pro-Max-3.webp" />
              <h2>Gift</h2>
            </div>
            <div class="card-text">
              <p>
                Send virtual gifts to your partner and make them feel special
                with our unique feature.
              </p>
              <a>Learn More</a>
            </div>
          </div>
        </div>
      </section>
      {/* About Devs */}
    </div>
  );
}

export default Home;
