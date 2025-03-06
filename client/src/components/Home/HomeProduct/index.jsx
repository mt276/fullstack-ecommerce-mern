import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ProductItem, ProductItem2, ProductItem3 } from "./ProductItem";
import { IoIosArrowRoundForward } from "react-icons/io";
import CategoryTab from "./CategoryTab";


import "./style.css"


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
                            <ProductItem />
                            <div className="d-flex align-items-center mt-2">
                                <div class="info w-75">
                                    <h3 class="mb-0 hd">NEW PRODUCTS</h3>
                                    <p class="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                            </div>
                            <ProductItem2 />
                        </div>
                    </div>
                    <div class="d-flex align-items-center mt-4">
                        <div class="info">
                            <h3 class="mb-0 hd">featured products</h3>
                            <p class="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                        </div>
                    </div>
                    <ProductItem3 />

                </div>
            </section>
            <div className="container">
                <div class="d-flex align-items-center mt-1 pr-3">
                    <div class="info">
                        <h3 class="mb-0 hd">Electronics</h3>
                        <p class="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                    </div>
                    <Link className="ml-auto" to="/"><Button className="viewAllBtn">View All<IoIosArrowRoundForward /></Button></Link>
                </div>
                <ProductItem3 />
            </div>
        </>
    )
}

export default HomeProduct;