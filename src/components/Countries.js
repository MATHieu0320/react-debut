import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [Range, setRange] = useState([36]);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [hello, setHello] = useState(["hello comment cv"]);
  // useffect se joue lorsque le composant est monte appelle
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <ul className="radia-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={Range}
          onChange={(e) => setRange(e.target.value)}
        />
      </ul>
      <input type="radio" />
      <h1>countries</h1>
      <h4> {hello} </h4>
      <ul>
        {data.slice(0, Range).map((country, index) => (
          <Card key={index} country={country} />

          // <li key={index}>{country.translations.fra.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
