import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }

  tConvert("18:00:00");

  let [count, setcount] = useState(time);

  function currenttime() {
    let updtime = new Date().toLocaleTimeString();
    setcount(updtime);
  }
  function stopwatch() {
    let updtime = new Date().toLocaleTimeString();
    setcount(updtime);
    setInterval(currenttime, 1000);
  }

  return (
    <div className="container">
      <h2 className="time">{count}</h2>
      <button onClick={currenttime}>Get Time</button>
      <button onClick={stopwatch}>stop watch</button>
      <p>@ santhosh kumar</p>
    </div>
  );
}

export default App;
