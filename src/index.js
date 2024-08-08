// import "./index.css";
// import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import StarRatings from "./StarRatings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRatings maxRating={5} />
    <StarRatings
      maxRating={10}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    />
    <StarRatings messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
  </React.StrictMode>
);
