import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../component/useFetch";

function Aboute() {
  const { id } = useParams();
  const url = "https://restcountries.com/v3.1/name/" + id;
  const { data, error, isPadding } = useFetch(url);
  return (
    <main style={{ display: "flex", gap: "30rem", paddingTop: "4rem" }}>
      {data &&
        data.map((item) => {
          console.log(item.population);
          return (
            <>
              <div>
                <img
                  style={{ width: "60rem", height: "40rem" }}
                  src={item.flags.png}
                  alt=""
                />
                <div>
                  <button style={{ padding: "1rem 4rem", marginTop: "4rem" }}>
                    <Link style={{ fontSize: "2rem" }} to="/">
                      Back
                    </Link>
                  </button>
                </div>
              </div>

              <div>
                <h1 style={{ fontSize: "5rem" }}>
                  <i>{item.name.common}</i>
                </h1>

                <h4 style={{ fontSize: "3rem" }}>
                  Region: <i>{item.region}</i>{" "}
                </h4>
                <h4 style={{ fontSize: "3rem" }}>
                  Sub Region: <i>{item.subregion}</i>{" "}
                </h4>
                <h4 style={{ fontSize: "3rem" }}>
                  Capital: <i>{item.capital[0]}</i>{" "}
                </h4>
                <h4 style={{ fontSize: "3rem" }}>
                  Population: <i>{item.population}</i>
                </h4>
              </div>
            </>
          );
        })}
    </main>
  );
}

export default Aboute;
