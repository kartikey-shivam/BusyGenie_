import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import index from "react-typical";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    taskName: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    dateOfFinalization: new Date(2021, 6, 0),
  },
  {
    taskName: "Vacation",
    start: new Date(2021, 6, 7),
    dateOfFinalization: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2022, 2, 20),
    end: new Date(2022, 2, 23),
  },
];

function Cld() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    dateOfFinalization: "",
  });
  const [data, setData] = useState([]);
  const [allEvents, setAllEvents] = useState(events);
  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/timeEntry").then((responseData) => {
      const loadedTask = responseData.data;
      console.log(loadedTask);
      // const size = loadedTask.length;

      // for (let index = 0; index < size; index++) {
      //   newEvent.title = loadedTask[index].taskName;
      //   newEvent.dateOfFinalization = loadedTask[index].dateOfFinalization;
      //   newEvent.start = loadedTask[index].dateOfFinalization;
      //   console.log("this", newEvent);
      // }
      setAllEvents(loadedTask);
    });
  }, []);
  function handleAddEvent() {
    axios.post("http://localhost:8000/api/v1/timeEntry", newEvent);
    // setAllEvents([...allEvents, newEvent]);
  }
  const start = new Date();

  return (
    <div className="calender">
      <h1 className="calender_heading">Calendar</h1>
      {/* <h2 className="calender_heading-2">Add New Event</h2> */}
      <div className="calender-info">
        {/* <input
          type="text"
          className="calendar-input"
          placeholder="Add TaskName"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(dateOfFinalization) =>
            setNewEvent({ ...newEvent, dateOfFinalization })
          }
        /> */}
        {/* <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button> */}
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="dateOfFinalization"
        endAccessor="dateOfFinalization"
        className="calender-main"
      />
    </div>
  );
}

export default Cld;
