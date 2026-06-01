import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  // Store the current date and time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <h1>Dynamic Clock</h1>

      <p className="clock">
        {format(currentTime, "MM/dd/yyyy hh:mm:ss a")}
      </p>
    </div>
  );
}

export default App;