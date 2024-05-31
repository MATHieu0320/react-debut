import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const h5 = document.querySelector("h5");
// fetch("https://restcountries.com/v3.1/all").then((res) =>
//   res.json().then((reponse) => {
//     h5.innerHTML = reponse.map(
//       (res) => `<img src="${res.flags.png} " alt="" srcset="" />`
//     );
//   })
// );
