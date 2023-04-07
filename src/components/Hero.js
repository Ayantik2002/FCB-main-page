import React from "react"
import  ReactDOM from "react-dom";

export default function Hero(props){
    return (
      <section className="hero">
        {/* <h1 className="hero--header">{props.card? props.card.title:""}</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home
        </p> */}
        {/* <img
          className="hero--image"
          src="https://spng.pngfind.com/pngs/s/179-1799211_free-png-download-lionel-messi-png-images-background.png"
        /> */}
        <div className="hero--text">
          {props.card ? props.card.description : "Click on your Favourite Player to Know More"}
        </div>
      </section>
    );
}