import React, { useState } from "react";
import "./navbar.css";

function Navbar({ setUrl }) {
  return (
    <section
      style={{
        padding: "3rem 0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <form>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            if (e.target.value !== "") {
              setUrl(`https://restcountries.com/v3.1/name/${e.target.value}`);
            } else {
              setUrl(`https://restcountries.com/v3.1/all`);
            }
          }}
          className="search"
          type="text"
          placeholder="Search Country...."
          required
        />
      </form>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value === "All") {
            setUrl("https://restcountries.com/v3.1/all");
          } else {
            setUrl(`https://restcountries.com/v3.1/region/${e.target.value}`);
          }
        }}
        className="select"
      >
        <option value="All">All</option>
        <option value="Europe">Europe</option>
        <option value="America">America</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
}

export default Navbar;
