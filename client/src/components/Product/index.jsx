import ProductZoom from "./ProductZoom/index"
import Rating from '@mui/material/Rating';
import "./style.css"
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useState } from "react";

import { Button } from "@mui/material";

const productSize = ["XS", "S", "M", "L", "XL"]

const ProductDetails = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const selectProductSize = (index) => {
        setActiveIndex(index);
    }
    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5 part1">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7 pl-5 pr-5 part2">
                            <h2 class="hd text-capitalize">Men Alias-N Regular Fit Spread Collar Shirt</h2>
                            <ul class="list list-inline d-flex align-items-center">
                                <li class="list-inline-item">
                                    <div class="d-flex align-items-center">
                                        <span class="text-light mr-2">Brands : </span>
                                        <span> RARE RABBIT</span>
                                    </div>
                                </li>
                                <li class="list-inline-item">
                                    <div class="d-flex align-items-center">
                                        <Rating className="Rating-readOnly" value={5} size="small" precision={0.5} readOnly />
                                        <span class="text-light cursor ml-2">10 Review</span>
                                    </div>
                                </li>
                            </ul>
                            <div class="d-flex info mb-3">
                                <span class="oldPrice">Rs: 2500</span>
                                <span class="netPrice text-danger ml-2">Rs: 1500</span>
                            </div>
                            <span class="badge badge-success">IN STOCK</span>
                            <p class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac</p>
                            <div className="productSize d-flex align-items-center">
                                <span>Size:</span>
                                <ul class="list list-inline mb-0 pl-4 false">
                                    {productSize.map((size, index) => (
                                        <li class="list-inline-item" onClick={() => selectProductSize(index)} >
                                            <a class={`tag ${index === activeIndex ? "active" : ""}`}>{size}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="d-flex align-items-center mt-3 actions_">
                                <div className="quantityDrop d-flex align-items-center">
                                    <Button><FaMinus /></Button>
                                    <input type="text" value="1"></input>
                                    <Button><FaPlus /></Button>
                                </div>
                                <div className="d-flex align-items-center btnActions">
                                    <Button className="btn-blue btn-lg btn-big btn-round bg-red"><FaShoppingCart /> &nbsp; Add to cart</Button>
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4"><MdFavoriteBorder /></Button>
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-2"><MdOutlineCompareArrows /></Button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item"><Button>Description</Button></li>
                                <li className="list-inline-item"><Button>Additional info</Button></li>
                                <li className="list-inline-item"><Button>Review (7)</Button></li>
                            </ul>
                            <div class="tabContent">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr class="stand-up">
                                                <th>Stand Up</th>
                                                <td><p>35″L x 24″W x 37-45″H(front to back wheel)</p></td>
                                            </tr>
                                            <tr class="folded-wo-wheels">
                                                <th>Folded (w/o wheels)</th>
                                                <td><p>32.5″L x 18.5″W x 16.5″H</p></td>
                                            </tr>
                                            <tr class="folded-w-wheels">
                                                <th>Folded (w/ wheels)</th>
                                                <td><p>32.5″L x 24″W x 18.5″H</p></td>
                                            </tr>
                                            <tr class="door-pass-through">
                                                <th>Door Pass Through</th>
                                                <td><p>24</p></td>
                                            </tr>
                                            <tr class="frame">
                                                <th>Frame</th>
                                                <td><p>Aluminum</p></td>
                                            </tr>
                                            <tr class="weight-wo-wheels">
                                                <th>Weight (w/o wheels)</th>
                                                <td><p>20 LBS</p></td>
                                            </tr>
                                            <tr class="weight-capacity">
                                                <th>Weight Capacity</th>
                                                <td><p>60 LBS</p></td>
                                            </tr>
                                            <tr class="width">
                                                <th>Width</th>
                                                <td><p>24″</p></td>
                                            </tr>
                                            <tr class="handle-height-ground-to-handle">
                                                <th>Handle height (ground to handle)</th>
                                                <td><p>37-45″</p></td>
                                            </tr>
                                            <tr class="wheels">
                                                <th>Wheels</th>
                                                <td><p>12″ air / wide track slick tread</p></td>
                                            </tr>
                                            <tr class="seat-back-height">
                                                <th>Seat back height</th>
                                                <td><p>21.5″</p></td>
                                            </tr>
                                            <tr class="head-room-inside-canopy">
                                                <th>Head room (inside canopy)</th>
                                                <td><p>25″</p></td>
                                            </tr>
                                            <tr class="pa_color">
                                                <th>Color</th>
                                                <td><p>Black, Blue, Red, White</p></td>
                                            </tr>
                                            <tr class="pa_size">
                                                <th>Size</th>
                                                <td><p>M, S</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <h3>Customer questions &amp; answers</h3>
                                        <div className="reviewBox mb-4 border-bottom">
                                            <div className="info">
                                                <div className="d-flex align-items-center w-100">
                                                    <h5>Mugisha yves</h5>
                                                    <div className="ml-auto">
                                                        <Rating className="Rating-readOnly" value={5} size="small" precision={0.5} readOnly />
                                                    </div>
                                                </div>
                                                <h6 class="text-light">2025-02-26</h6>
                                                <p>Wow the item is good </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">

                    </div>
                    <div className="product_row relatedProducts w-100 mt-0">

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails