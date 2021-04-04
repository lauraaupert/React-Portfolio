import React,{useEffect,useRef} from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import '../swiperStuff.css';

const SwiperStuff = () => {
    const swiper = useRef(null)
    useEffect(()=>{
        swiper.current=new Swiper('.swiper-container',{...{effect: 'coverflow',
        centeredSlides: true,
        mousewheel: {
          forceToAxis: true,
      
        },
        keyboard: {
          enabled: true,
        },
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
          rotate: 40,
          stretch: -140,
          depth: 500,
          modifier: 1,
      
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
           // Navigation arrows
           navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          controller: {
            by: 'slide',
            control: text,
            inverse: false,
          },
        }
    })
}, [])

return(
    <div className="swiper-container">
        <div className="swiper-wrapper">
        <div className="swiper-slide top-slide" style={{backgroundImage: "url(/assets/DogsListNew.png)"}}></div>
        {/* <div className="swiper-slide top-slide" style="background-image:url(./Assets/School.png); background-position: left;"></div>
        <div className="swiper-slide top-slide" style="background-image:url(./Assets/BurgerFactory.png); background-position: center;"></div>
        <div className="swiper-slide top-slide" style="background-image:url(./Assets/Team-profile.png); background-position: left; background-size: 108%"></div>
        <div className="swiper-slide top-slide" style="background-image:url(./Assets/README.png);"></div>
        <div className="swiper-slide top-slide" style="background-image:url(./Assets/Quarantinis.png);"></div>
        <div className="swiper-slide top-slide" style="background-image:url(./Assets/Weather.png);background-position: left;"></div> */}
        </div>
    </div>
  )
}


// import React from "react";
// import TopSlides from "./TopSlides"


// function Swiper() {
// var text = new Swiper('.acc-text', {
//     slidesPerView: 'auto',
//     spaceBetween: 0,
//     centeredSlides: true,
//     loop: true,
  
//   })
  
  
//   var swiper = new Swiper('.top-container', {
//     effect: 'coverflow',
//     centeredSlides: true,
//     mousewheel: {
//       forceToAxis: true,
  
//     },
//     keyboard: {
//       enabled: true,
//     },
//     slidesPerView: 'auto',
//     loop: true,
//     coverflowEffect: {
//       rotate: 40,
//       stretch: -140,
//       depth: 500,
//       modifier: 1,
  
//       slideShadows: true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//        // Navigation arrows
//        navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       controller: {
//         by: 'slide',
//         control: text,
//         inverse: false,
//       },
//     })
// }

export default SwiperStuff;