import React from "react";
import "../styling/Home.css";
import Hours from "./hours";
import data from "../files/hours.json"

const Home = () => {

  function storeHours() {
    return data.map((day) =>
    <Hours day = {day.day}
     open = {day.openingHour} 
     close = {day.closingHour}
     />
    )
  }

  return (
    <div className="home">
      <div className="title-hours">
        <h1>Delicious Bites</h1>
        <h2>A Taste of Perfection</h2>
        <p>
        Delicious Bites is a cozy little restaurant that serves up a 
        wide range of mouth-watering dishes, all made with the freshest ingredients.
        From classic comfort foods to gourmet delights, our menu has something for everyone. 
        Come on in and treat yourself to a delicious meal today. 

        </p>

         <div>{storeHours()}</div>
        

      </div>
      <div className="rest-picture">

      </div>
    </div>
  );
};

export default Home;