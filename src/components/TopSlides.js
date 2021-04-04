import React from "react";
// import dogsListNew from "./assets/dogsListNew.png"
// import School from "./assets/School.png"

function TopSlides() {
    return (
  

    <div className="swiper-container top-container">
    <div className="swiper-wrapper top-wrapper">
      <div className="swiper-slide top-slide" style={{backgroundImage: "url(/assets/DogsListNew.png)"}}></div>
      <div className="swiper-slide top-slide" style={{backgroundImage: "url(/assets/School.png)"}}></div>

      {/* <div className="swiper-slide top-slide" style={{backgroundImage: `url(${School})`}}></div> */}

      {/* <div className="swiper-slide top-slide" style={{"background-image:url(./Assets/BurgerFactory.png); background-position: center;"}}></div>
      <div className="swiper-slide top-slide" style={{"background-image:url(./Assets/Team-profile.png); background-position: left; background-size: 108%"></div>
      <div className="swiper-slide top-slide" style={{"background-image:url(./Assets/README.png);"></div>
      <div className="swiper-slide top-slide" style={{"background-image:url(./Assets/Quarantinis.png);"></div>
      <div className="swiper-slide top-slide" style={{"background-image:url(./Assets/Weather.png);background-position: left;"></div> */}
    </div>
    {/* <!-- Add Pagination --> */}
    <div className="swiper-pagination"></div>
  </div>
    )
}

export default TopSlides;
