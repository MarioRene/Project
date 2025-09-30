import { useEffect, useState } from "react";
import axios from "axios";
import "./MainContent.css";
import videoBg from '../assets/Cinema Projector intro.mp4';
import img1 from './ImgMainContent/1.png'
import img2 from './ImgMainContent/2.png'
import img3 from './ImgMainContent/3.png'
import img4 from './ImgMainContent/4.png'
import img5 from './ImgMainContent/5.png'
import img6 from './ImgMainContent/6.png'

const reviews = [
  {
    img: img1,
    title: "Cambio de Entorno",
    date: "Febrero 27, 2019",
    text: "Tinfo"
  },  
  {
    img: img2,
    title: "Barriletes de Santiago Sacatepequez,Guatemala 👌🏻",
    date: "Noviembre 3,2019",
    text: "Tinfo"
  },
  {
    img: img3,
    title: "Ready for Today 👌🏻",
    date: "Septiembre 7,2018",
    text: "Tinfo"
  },
    {
    img: img4,
    title: "Film is NOT dead!! 🎥",
    date: "Agosto 9, 2018",
    text: "Tinfo"
  },
    {
    img: img5,
    title: "Mientes Video con BillycMusic",
    date: "Marzo 18,2019",
    text: "Tinfo"
  },
    {
    img: img6,
    title: "Videoclip con Legionguate ",
    date: "Julio 18,2018",
    text: "Tinfo"
  }
];

const MainContent = () => {
  return (

    <div className="page">
      {/* Video Superior */}
      <section className="video-section">
        <video src={videoBg} autoPlay loop muted />
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        {reviews.map((review, index) => (
          <div
            className={`review-card ${index % 2 === 1 ? "reverse" : ""}`}
            key={index}
          >
            <img src={review.img} alt={review.title} />
            <div className="review-text">
              <h2>{review.title}</h2>
              <span className="date">{review.date}</span>
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>

  );
};

export default MainContent;