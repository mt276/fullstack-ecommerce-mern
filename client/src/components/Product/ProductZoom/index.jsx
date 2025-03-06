import "./style.css"
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

const images = [
    "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg",
    "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg",
    "https://api.spicezgold.com/download/file_1734690981299_c56f7a00-e9c5-43dc-8288-190cfc0fef3e1714702040062RARERABBITMenComfortOpaqueCasualShirt3.jpg"
];

const ProductZoom = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const zoomSlider = useRef(null);
    const zoomSliderBig = useRef(null);
    const goto = (index) => {
        zoomSlider.current.swiper.slideToLoop(index);
        zoomSliderBig.current.swiper.slideToLoop(index);
        setActiveIndex(index);
    }
    return (
        <>
            <div className="productZoom">
                <div className="productZoom productZoomBig position-relative mb-3">
                    <div class="badge badge-primary">10%</div>
                    <Swiper
                        spaceBetween={10}
                        navigation={true}
                        modules={[Navigation]}
                        loop={true}
                        className="zoomSliderBig"
                        ref={zoomSliderBig}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="item">
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1} src={img}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Swiper
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                    className="zoomSlider"
                    ref={zoomSlider}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} >
                            <div className={`item ${index === activeIndex ? "item_active" : "false"}`} onClick={() => goto(index)} >
                                <span className=" lazy-load-image-background blur lazy-load-image-loaded">
                                    <img className="w-100 img1" src={img} />
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default ProductZoom