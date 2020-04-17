import React from "react";
import Navbar from "./Navbar";
import Steeve from "../img/Steeve.jpg";
import Mario from "../img/Mario.jpg";
import Neil from "../img/Neil.jpg";

const About = () => {
  const style = {
    fontSize: " 1.5em",
    fontWeight: "bold",
    color: "#696d7d",
  };
  return (
    <div>
      <Navbar />
      <ul className="boys">
        <li>
          <figure>
            <p style={style}>Lead Researcher</p>
            <img src={Neil} alt=""></img>
            <blockquote>
              {" "}
              <i>
                "You can't use my name for the website. The CIA can't know where
                I am."
              </i>
            </blockquote>
            <figcaption>- Neil DeGrasse Tyson</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <p style={style}>Lead Designer</p>
            <img src={Mario} alt=""></img>
            <blockquote>
              <i>"Tu chi sei? Come sei arrivato a casa mia?""</i>
            </blockquote>
            <figcaption> - Mario Battali</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <p style={style}> Lead Paagal</p>
            <img src={Steeve} alt=""></img>
            <blockquote>
              <i>"spillyourmind.gq"</i>
            </blockquote>
            <figcaption>- Steeve Thomas Shaji</figcaption>
          </figure>
        </li>
      </ul>
    </div>
  );
};

export default About;
