import "./style.css"
import Rating from '@mui/material/Rating';
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useState } from "react";
import { Button } from "@mui/material";

const productSize = ["XS", "S", "M", "L", "XL"]

const ProductDetail = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const selectProductSize = (index) => {
        setActiveIndex(index);
    }
    return (
        <>
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
        </>
    )
}

export default ProductDetail