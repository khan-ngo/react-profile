import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const DATA = {
  name: "Hi, I'm Khanh",
  profession: "",
  linkedinURL: "https://www.linkedin.com/in/khanh-ngo-8863193",
  githubURL: "https://github.com/khan-ngo",
  twitterURL: "https://twitter.com/khan_ngo",
  instaURL: "https://www.instagram.com/kqngo/",
  myGoal:
    "My goal is to pivot my career to full time software development at an established company.",
};

ReactDOM.render(<App profileData={DATA} />, document.getElementById("root"));

serviceWorker.unregister();
