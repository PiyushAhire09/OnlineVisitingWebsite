import React, { useState } from 'react';
// import corisal2 from './corisal2.jpg';
import coriasal3 from './coriasal3.jpg';
import corisal4 from './corisal4.jpg';
import corisal5 from './corisal5.webp';
import corisal6 from './corisal6.jpg';
// import Any from './Any.jpg';
import img1 from './img1.jpg'
import "./Carousel.css";

function Carousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
          <img src={img1} style={{ width: "100vw" , maxHeight:"500px" }} alt="..." />
        </div>
        <div className={index === 1 ? "carousel-item active" : "carousel-item"}>
          <img src={coriasal3} style={{ width: "100vw" , maxHeight:"500px" }} alt="..." />
        </div>
        <div className={index === 2 ? "carousel-item active" : "carousel-item"}>
          <img src={corisal4} style={{ width: "100vw" , maxHeight:"500px" }} alt="..." />
        </div>
        <div className={index === 3 ? "carousel-item active" : "carousel-item"}>
          <img src={corisal5} style={{ width: "100vw" , maxHeight:"500px" }} alt="..." />
        </div>
        <div className={index === 4 ? "carousel-item active" : "carousel-item"}>
          <img src={corisal6} style={{ width: "100vw" , maxHeight:"500px" }} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev" onClick={() => handleSelect(index === 0 ? 4 : index - 1)}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        {/* <span className="visually-hidden">Previous</span> */}
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next" onClick={() => handleSelect(index === 4 ? 0 : index + 1)}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        {/* <span className="visually-hidden">Next</span> */}
      </button>
    </div>
  );
}

export default Carousel;