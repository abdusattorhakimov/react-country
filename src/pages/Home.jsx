import "./home.css";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

function Home({ data, setUrl }) {
  return (
    <>
      <Navbar setUrl={setUrl} data={data} />
      <div className="carDiv">
        {data &&
          data.map((item) => {
            return (
              <div key={item.name.common} className="card">
                <div className="cardText">
                  <div className="cardDiv">
                    <img src={item.flags.png} alt="" />
                    <h1 style={{ fontSize: "2rem" }}> {item.name.common}</h1>
                    <h3>
                      Region : <i>{item.region}</i>
                    </h3>
                    <h3>
                      capital : <i>{item.capital}</i>
                    </h3>
                    <h3>
                      Population : <i>{item.population}</i>
                    </h3>
                  </div>
                  <button style={{ padding: "1rem 2rem" }}>
                    <Link
                      style={{ fontSize: "2rem" }}
                      to={`/aboute/${item.name.common}`}
                    >
                      Read more
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Home;
