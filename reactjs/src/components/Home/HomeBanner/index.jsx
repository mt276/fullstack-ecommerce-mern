import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "./style.css"
import "swiper/css";
import "swiper/css/navigation";

import Banner1 from "../../../assets/images/Banner1.jpg";
import Banner2 from "../../../assets/images/Banner2.jpg";
import Banner3 from "../../../assets/images/Banner3.jpg";
import Banner4 from "../../../assets/images/Banner4.jpg";
import Banner5 from "../../../assets/images/Banner5.jpg";
import Banner6 from "../../../assets/images/Banner6.jpg";
import Banner7 from "../../../assets/images/Banner7.jpg";


const banners = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7];

const HomeBanner = () => {
    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    navigation={true}
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={banner}
                                alt={`Banner ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeBanner;
