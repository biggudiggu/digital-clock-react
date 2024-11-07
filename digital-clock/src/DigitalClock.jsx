import React, {useState, useEffect} from "react";

function DigitalClock() {

  const [time, setTime] = useState(new Date());
  const [is12HourFormat, setIs12HourFormat] = useState(false);

  useEffect(() => {
    const intervalId =  setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    if (is12HourFormat) {
      hours = hours % 12 || 12;
      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }
    else{
      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  

  return(
       <div id="clock-container">
      <h1>DIGITAL CLOCK</h1>
      <div id="container">
        <div id="clock">{formatTime()}</div>
        <div id="input-container">
          <div>
            <input
              type="radio"
              name="hourClock"
              id="24HourClock"
              checked = {!is12HourFormat}
              value="24"
              class="checkBox"
              onChange={() => setIs12HourFormat(false)}
            />
            <label for="24HourClock" class="checkBox">24-hour-clock</label>
          </div>
          <div>
            <input
              type="radio"
              name="hourClock"
              id="12HourClock"
              value="12"
              checked = {is12HourFormat}
              class="checkBox"
              onChange={() => setIs12HourFormat(true)}
            />
            <label for="12HourClock" class="checkBox">12-hour-clock</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock