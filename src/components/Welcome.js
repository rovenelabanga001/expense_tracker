import React from "react";

const Welcome = () => {
  return (
    <section className="not-header">
      <div className="welcome-user-container">
        <h1 className="heading-big">12th November 2024</h1>
        <p>Welcome User.name</p>
        <button className="btn" style={{ height: "40px" }}>
          View more
        </button>
      </div>
    </section>
  );
};

export default Welcome;
