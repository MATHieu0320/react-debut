import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
  const [data, setData] = useState([]);
  // useffect se joue lorsque le composant est monte appelle
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div className="countries">
      <h1>countries</h1>
    </div>
  );
};

export default Countries;
