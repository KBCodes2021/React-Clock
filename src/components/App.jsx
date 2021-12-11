import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={updateTime}>Current Time</button>
    </div>
  );
}

export default App;
