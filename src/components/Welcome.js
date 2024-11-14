import React from "react";

const Welcome = () => {
  const [currentDate, setCurrentDate] = React.useState("");

  React.useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB");
    setCurrentDate(formattedDate);
  }, []);
  return (
    <section className="not-header">
      <div className="welcome-user-container">
        <h1 className="heading-big">{currentDate}</h1>
        <p>Welcome !!</p>
        <p>the perfect tool to help you take control of your finances!</p>
      </div>
    </section>
  );
};

export default Welcome;
