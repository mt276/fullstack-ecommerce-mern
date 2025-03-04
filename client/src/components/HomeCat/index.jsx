import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "./style.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
    { name: "Fashion", img: "https://api.spicezgold.com/download/file_1734525204708_fash.png", bg: "#ecffec" },
    { name: "Electronics", img: "https://api.spicezgold.com/download/file_1734525218436_ele.png", bg: "#fcd5f3" },
    { name: "Bags", img: "https://api.spicezgold.com/download/file_1734525231018_bag.png", bg: "#ff35f0" },
    { name: "Footwear", img: "https://api.spicezgold.com/download/file_1734525239704_foot.png", bg: "#daecff" },
    { name: "Groceries", img: "https://api.spicezgold.com/download/file_1734525248057_gro.png", bg: "#fce1c3" },
    { name: "Beauty", img: "https://api.spicezgold.com/download/file_1734525255799_beauty.png", bg: "#e6ffff" },
    { name: "Wellness", img: "https://api.spicezgold.com/download/file_1734525275367_well.png", bg: "#fee5f0" },
    { name: "Jewellery", img: "https://api.spicezgold.com/download/file_1734525286186_jw.png", bg: "#fee0d3" }
];

const HomeCat = () => {
    return (
        <>
            <section className="homeCat pb-2">
                <div className="container">
                    <h3 class="mb-3 hd">Featured Categories</h3>
                    <Swiper
                        slidesPerView={8}
                        spaceBetween={8}
                        navigation={true}
                        slidesPerGroup={3}
                        modules={[Navigation]}
                        loop={false}
                        className="mySwiper"
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <Link to="/">
                                    <div className="item text-center cursor" style={{ backgroundColor: category.bg }}>
                                        <img src={category.img} alt={category.name} />
                                    </div>
                                    <h6>{category.name}</h6>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default HomeCat;