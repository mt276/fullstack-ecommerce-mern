import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import CategoryTab from "./CategoryTab";

import "./style.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeProduct = () => {

    return (
        <>
            <section className="homeProducts pb-0">
                <div className="container">
                    <div className="row homeProductsRow">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner mb-3">
                                    <Link className="box" to="/"><img src="https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg" class="w-100 transition" alt="banner img" /></Link>
                                </div>
                                <div className="banner mb-3">
                                    <Link className="box" to="/"><img src="https://api.spicezgold.com/download/file_1734525767798_NewProject(35).jpg" class="cursor w-100 transition" alt="banner img" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center res-flex-column">
                                <div className="info">
                                    <h3 class="mb-0 hd">Popular Products</h3>
                                    <p class="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>

                                <CategoryTab />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeProduct;