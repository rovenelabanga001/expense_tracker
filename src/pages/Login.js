import React from "react";

export const Login = ({handleLogin}) => {
  return (
    <section>
      <div className="about-container">
        <h1>Expense Tracker App</h1>
        <p>
          texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
        </p>
      </div>
      <div className="signin-container">
        <div className="log-in-container">
          <form>
            <h1 className="heading-big">Log in</h1>
            <input type="text" placeholder="Enter Username" />
            <input type="password" placeholder="Enter password" />
            <button className="btn">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <span>
              <a href="#">Sign up</a>
            </span>
          </p>
        </div>
        <div className="sign-up-container">
          <form>
            <h1>Create New Account</h1>
            <input type="text" placeholder="Create Username" />
            <input type="password" placeholder="Create Password" />
            <input type="password" placeholder="Confirm Password"></input>
            <button className="btn">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <span>
              <a href="#">Login</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
