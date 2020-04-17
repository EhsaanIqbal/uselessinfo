import React, { useState, useEffect } from "react";
import axios from "axios";
import Facts from "./Facts";
import Pagination from "./Pagination";
import Navbar from "./Navbar";

const Home = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [factsPerPage] = useState(20);

  useEffect(() => {
    const fetchFacts = async () => {
      setLoading(true);
      const res = await axios.get("https://uselessinfo.herokuapp.com/api/all");
      setFacts(res.data);
      setLoading(false);
    };

    fetchFacts();
  }, []);

  //Get current fact
  const indexOfLastFact = currentPage * factsPerPage;
  const indexOfFirstFact = indexOfLastFact - factsPerPage;
  const currentFacts = facts.slice(indexOfFirstFact, indexOfLastFact);

  //change page
  const paginate = (no) => setCurrentPage(no);

  return (
    <div className="main">
      <Navbar />
      <div className="middle">
        <Facts facts={currentFacts} loading={loading} />
      </div>

      <Pagination
        factsPerPage={factsPerPage}
        totalFacts={facts.length}
        paginate={paginate}
      />
      <li className="button">
        <p className="question">Was this helpful?</p>
        <p className="yes" id="yes">
          Yes
        </p>
        <p className="no" id="no">
          No
        </p>
        <p className="answer1" id="idc">
          I don't really care.
        </p>
      </li>
    </div>
  );
};

export default Home;
