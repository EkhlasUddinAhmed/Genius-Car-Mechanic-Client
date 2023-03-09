import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import './Banner.css';
const Banner = () => {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade position-relative">
      <div class="carousel-inner ">
        <div class="carousel-item active text-bg-dark ">
          <img src={img1} class="d-block w-100 rounded" alt="..." />
          <div className="position-absolute positionFixing ">
            <h1 className="text-white fw-bold">Affordable <br/>
                Price For Car <br/>Servicing</h1>
                <p className="text-white mt-4">There are many variations of passages of  available, But<br></br> The majority have suffered alteration in some form</p>
                <button className="btn btn-danger p-2 mt-4 mb-4">Discover More</button>
                <button className="btn btn-outline-info p-2 ms-3 mt-4 mb-4">Latest Project</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block w-100 rounded" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={img3} class="d-block w-100 " alt="..." />
        </div>
      </div>
      
      <button
         class="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next "
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      </div>
    
  );
};

export default Banner;
