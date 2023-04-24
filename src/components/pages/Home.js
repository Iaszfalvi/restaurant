import React from "react";
import "../styling/Home.css";
import Hours from "./hours";
import data from "../files/hours.json"
import students from "../files/menuItems.json"
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"

const Home = () => {
  console.log(students)

  function storeHours() {
    console.log(data)
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
        <div className="hours-div">
        <div className="hours-home">{storeHours()}</div>
        </div>
        
        

      </div>
      <div className="rest-picture">
        <img src={pic1} alt="" className="pic-one" />
        <img src={pic2} alt="" className="pic-two" />
      </div>
    </div>
  );
};

export default Home;