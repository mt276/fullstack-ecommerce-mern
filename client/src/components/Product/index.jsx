import "./style.css"

import ProductZoom from "./ProductZoom/index"
import ProductDetailTabs from "./ProductDetailTabs";
import ProductItem from "../Home/HomeProduct/ProductItem";
import ProductDetail from "./ProductDetail";

const ProductDetails = () => {

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5 part1">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7 pl-5 pr-5 part2">
                            <ProductDetail />
                        </div>

                    </div>
                    <ProductDetailTabs />
                    <div class="d-flex align-items-center mt-3">
                        <div class="info w-75">
                            <h3 class="mb-0 hd">RELATED PRODUCTS</h3>
                        </div>
                    </div>
                    <div className="product_row relatedProducts w-100 mt-0">
                        <ProductItem type="carouselLarge" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails