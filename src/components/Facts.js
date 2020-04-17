import React from "react";

const Facts = ({ facts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <ul>
      {facts.map((f) => (
        <li className="block" key={f._id}>
          <p>{f.fact}</p>
        </li>
      ))}
    </ul>
  );
};

export default Facts;
