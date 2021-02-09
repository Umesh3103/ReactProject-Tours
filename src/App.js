import React, { useState, useEffect } from "react";
import { data } from "./data";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(data);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  setTimeout((loading) => {
    setLoading(false);
  }, 2000);

  const handleRefresh = () => {
    setLoading(true);
    setTours(data);
  };
  if (loading) {
    return (
      <main>
        <Loading />
        {setTimeout}
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={handleRefresh}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
