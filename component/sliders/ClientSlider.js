import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ClientSlider = () => {
    const [slides, setSlides] = useState(0);

    const setSlidesPerview = () => {
      setSlides(
        window.innerWidth <= 320
        ? 3
        : window.innerWidth <= 767
        ? 3
        : window.innerWidth <=  992
        ? 4
        : window.innerWidth >  992
        ? 5
        : 0
      );
    };
  
    useEffect(() => {
      //Initially set the amount of slides on page load
      setSlidesPerview();
      // Add the event listener on component mount
      window.addEventListener("resize", setSlidesPerview);
  
      // Remove the listener when component unmounts
      return () => {
        window.removeEventListener("resize", setSlidesPerview);
      };
    }, []);
  return (
    <div className="clients-section">
        <div className="container">
            <Swiper 
            slidesPerView={slides}
            spaceBetween={80}
            autoplay={{delay:3000}}
            modules={[Autoplay]}
            className="clients"
            >
                <SwiperSlide>
                    <img src="images/fz-client-1.png" alt="Client logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/fz-client-2.png" alt="Client logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/fz-client-3.png" alt="Client logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/fz-client-4.png" alt="Client logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/fz-client-5.png" alt="Client logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/fz-client-1.png" alt="Client logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/fz-client-2.png" alt="Client logo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/fz-client-3.png" alt="Client logo"/>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </div>
  )
}

export default ClientSlider