import React from "react";
import "./Event.css";

function Event(props) {
  console.log(props.event[0].src);
  return (
    <div className="event">
      <p className="event__gender">{props.event[0].Gender}</p>
      <div className="event__box">
        <div className="event__info">
          <div className="event__heading">
            <p>{props.event[0].ID}</p>
            <p>Person Detected</p>
          </div>
          <div className="tablet__box">
            <div className="event__names">
              <table>
                <tr>
                  <td>Name</td>
                  <td>: {props.event[0].Name}</td>
                </tr>
                <tr>
                  <td>Location </td>
                  <td>: {props.event[0].Location}</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>: {props.event[0].Date}</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>: {props.event[0].Time}</td>
                </tr>
              </table>
            </div>
            <div className="event__description">
              <p>Description : </p>
              <p>{props.event[0].Name} detected at</p>
              <p>
                {props.event[0].Location} on {props.event[0].Date}
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="event__img" src={props.event[0].src} />
        </div>
      </div>
    </div>
  );
}

export default Event;
