import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import React, { useState } from "react";
import useFetch from "./component/useFetch";
import Aboute from "./pages/Aboute";
function App() {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const { data, error, isPadding } = useFetch(url);

  return (
    <>
      <header className="header">
        <div className="App container">
          <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>
            Where in the world
          </h1>
          <h2>Dark</h2>
        </div>
      </header>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home data={data} setUrl={setUrl} />} />
            <Route path="/aboute/:id" element={<Aboute data={data} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
