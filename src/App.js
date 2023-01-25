import "./App.css";
import Navigation from "./components/Navigation";
import Left from "./components/Left";
import Event from "./components/Event";
import Events from "./components/Events";
import { useState } from "react";

function App() {
  const [event, setEvent] = useState([
    {
      ID: "EVT0001",
      Location: "Bangalore",
      Gender: "Female",
      Name: "Female01",
      Date: "2023-01-05",
      Time: "09:05:23",
      src: "https://firebasestorage.googleapis.com/v0/b/secqurealse-project.appspot.com/o/Female01.jpg?alt=media&token=5b7f3b69-aa4f-4e52-8e45-157eab6ff465",
    },
  ]);
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);

  const update = (male1, female1) => {
    setMale(male1);
    setFemale(female1);
  };

  const onClickHandler = (obj) => {
    setEvent(obj);
  };

  return (
    <div className="App">
      <Navigation male={male} female={female} />
      <div className="home">
        <Left />
        {/* <div className="container__app"> */}
        <Event event={event} />
        <Events onClickHandler={onClickHandler} update={update} />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
