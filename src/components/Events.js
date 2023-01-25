import React, { useEffect, useState } from "react";
import "./Events.css";
import Item from "./Item";
import FilterListIcon from "@mui/icons-material/FilterList";

function Events(props) {
  const [events, setEvents] = useState([]);
  const [clickedId, setClickedId] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [isBangalore, setIsBangalore] = useState(false);
  const [isChennai, setIsChennai] = useState(false);
  const [isHyderabad, setIsHyderabad] = useState(false);
  const [originalEvents, setOriginalEvents] = useState([]);
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isDate, setIsDate] = useState("");

  const filterClickHandler = () => {
    setShowFilter((prev) => {
      return !prev;
    });
  };

  const checkBoxClickBangalore = (event) => {
    setIsBangalore((prev) => {
      return !prev;
    });
  };

  const checkBoxClickChennai = (event) => {
    setIsChennai((prev) => {
      return !prev;
    });
  };
  const checkBoxClickHyderabad = (event) => {
    setIsHyderabad((prev) => {
      return !prev;
    });
  };

  const checkboxMale = () => {
    setIsMale((prev) => {
      return !prev;
    });
  };

  const checkboxFemale = () => {
    setIsFemale((prev) => {
      return !prev;
    });
  };

  const checkboxDate = () => {
    // console.log(document.getElementById("date").value);
    setIsDate(document.getElementById("date").value);
  };

  const filterEvents = (event) => {
    event.preventDefault();
    setEvents(originalEvents);
    setEvents((prev) => {
      return prev.filter((element) => {
        var location = true,
          gender = true;
        var a = false;
        var b = false;
        var c = false,
          d = false,
          e = false;
        var f = false;
        if (document.getElementById("banglore").value == "true") {
          if (element.Location === "Bangalore") {
            a = true;
          }
        }
        if (document.getElementById("hyderabad").value == "true") {
          if (element.Location === "Hyderabad") {
            c = true;
          }
        }
        if (document.getElementById("chennai").value == "true") {
          if (element.Location === "Chennai") {
            b = true;
          }
        }

        if (
          (document.getElementById("banglore").value == "true" ||
            document.getElementById("hyderabad").value == "true" ||
            document.getElementById("chennai").value == "true") == false
        ) {
          location = true;
        } else {
          location = a || c || b;
        }
        console.log(location);

        if (document.getElementById("male").value == "true") {
          if (element.Gender === "Male") {
            d = true;
          }
        }
        if (document.getElementById("female").value == "true") {
          if (element.Gender === "Female") {
            e = true;
          }
        }
        // console.log(document.getElementById("date").value);

        // console.log(isDate);
        if (document.getElementById("date").value.length == 0) {
          f = true;
        }
        if (element.Date === document.getElementById("date").value) {
          f = true;
        }

        if (
          (document.getElementById("male").value == "true" ||
            document.getElementById("female").value == "true") == false
        ) {
          gender = true;
        } else {
          gender = d || e;
        }
        // return location && gender;
        return location && gender && f;
      });
    });

    setShowFilter(false);
    setIsBangalore(false);
    setIsChennai(false);
    setIsHyderabad(false);
    setIsFemale(false);
    setIsMale(false);
  };

  const onClickHandler = (id) => {
    // console.log("hi");
    const obj = events.filter((element) => {
      return element.ID === id;
    });
    // console.log(obj);
    props.onClickHandler(obj);
    setClickedId(id);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(
        "https://secqurealse-project-default-rtdb.firebaseio.com/.json"
      );
      const responseData = await response.json();

      const loadedEvents = [];

      var male = 0,
        female = 0;

      for (const key in responseData) {
        loadedEvents.push({
          id: key,
          Location: responseData[key].Location,
          Date: responseData[key].Date,
          Gender: responseData[key].Gender,
          ID: responseData[key].ID,
          Name: responseData[key].Name,
          Time: responseData[key].Time,
          src: responseData[key].src,
        });
        if (responseData[key].Gender === "Male") {
          male++;
        } else {
          female++;
        }
      }

      props.update(male, female);

      setEvents(loadedEvents);
      setOriginalEvents(loadedEvents);
    };
    fetchEvents();
  }, []);
  return (
    <div className="events">
      <div className="events__box">
        <p>Events</p>
        <FilterListIcon onClick={filterClickHandler} className="filterIcon" />
        {showFilter && (
          <form className="filter" onSubmit={filterEvents}>
            <div className="location">
              <p className="filter__title">Location</p>
              <input
                onClick={checkBoxClickChennai}
                value={isChennai}
                id="chennai"
                type="checkbox"
              />
              <p className="option">Chennai</p>
              <input
                onClick={checkBoxClickHyderabad}
                value={isHyderabad}
                id="hyderabad"
                type="checkbox"
              />
              <p className="option">Hyderabad</p>
              <input
                onClick={checkBoxClickBangalore}
                value={isBangalore}
                id="banglore"
                type="checkbox"
              />
              <p className="option">Bangalore</p>
            </div>
            <div className="location">
              <p className="filter__title">Gender</p>
              <input
                onClick={checkboxMale}
                value={isMale}
                id="male"
                type="checkbox"
              />
              <p className="option">Male</p>
              <input
                onClick={checkboxFemale}
                value={isFemale}
                id="female"
                type="checkbox"
              />
              <p className="option">Female</p>
            </div>
            <div className="location">
              <p className="filter__title">Date</p>
              <input
                id="date"
                onClick={checkboxDate}
                // value={isDate}
                type="Date"
              />
            </div>
            <button className="btn__filter">Filter</button>
          </form>
        )}
      </div>
      <div className="events__items">
        {events.map(function (element, index) {
          return (
            <Item
              key={element.id}
              Location={element.Location}
              Date={element.Date}
              Name={element.name}
              ID={element.ID}
              Time={element.Time}
              Gender={element.Gender}
              className="events__item"
              onClickHandler={onClickHandler}
              clickedId={clickedId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Events;
