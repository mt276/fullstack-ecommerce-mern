import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { LuShirt } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


import "./style.css"


const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="topInfo row">
                        <div className="col d-flex align-items-center">
                            <LuShirt />
                            <span class="ml-2">Everyday fresh products</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <LiaShippingFastSolid />
                            <span class="ml-2">Free delivery for order over $70</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <RiDiscountPercentLine />
                            <span class="ml-2">Daily Mega Discounts</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <CiBadgeDollar />
                            <span class="ml-2">Best price on the market</span>
                        </div>
                    </div>
                    <div className="row mt-5 linksWrap">
                        <div class="col"><h5>FRUIT &amp; VEGETABLES</h5><ul><li><a href="/">Fresh Vegetables</a></li><li><a href="/">Herbs &amp; Seasonings</a></li><li><a href="/">Fresh Fruits</a></li><li><a href="/">Cuts &amp; Sprouts</a></li><li><a href="/">Exotic Fruits &amp; Veggies</a></li><li><a href="/">Packaged Produce</a></li><li><a href="/">Party Trays</a></li></ul></div>
                        <div class="col"><h5>BREAKFAST &amp; DAIRY</h5><ul><li><a href="/">Fresh Vegetables</a></li><li><a href="/">Herbs &amp; Seasonings</a></li><li><a href="/">Fresh Fruits</a></li><li><a href="/">Cuts &amp; Sprouts</a></li><li><a href="/">Exotic Fruits &amp; Veggies</a></li><li><a href="/">Packaged Produce</a></li><li><a href="/">Party Trays</a></li></ul></div>
                        <div class="col"><h5>MEAT &amp; SEAFOOD</h5><ul><li><a href="/">Fresh Vegetables</a></li><li><a href="/">Herbs &amp; Seasonings</a></li><li><a href="/">Fresh Fruits</a></li><li><a href="/">Cuts &amp; Sprouts</a></li><li><a href="/">Exotic Fruits &amp; Veggies</a></li><li><a href="/">Packaged Produce</a></li><li><a href="/">Party Trays</a></li></ul></div>
                        <div class="col"><h5>BEVERAGES</h5><ul><li><a href="/">Fresh Vegetables</a></li><li><a href="/">Herbs &amp; Seasonings</a></li><li><a href="/">Fresh Fruits</a></li><li><a href="/">Cuts &amp; Sprouts</a></li><li><a href="/">Exotic Fruits &amp; Veggies</a></li><li><a href="/">Packaged Produce</a></li><li><a href="/">Party Trays</a></li></ul></div>
                        <div class="col"><h5>BREADS &amp; BAKERY</h5><ul><li><a href="/">Fresh Vegetables</a></li><li><a href="/">Herbs &amp; Seasonings</a></li><li><a href="/">Fresh Fruits</a></li><li><a href="/">Cuts &amp; Sprouts</a></li><li><a href="/">Exotic Fruits &amp; Veggies</a></li><li><a href="/">Packaged Produce</a></li><li><a href="/">Party Trays</a></li></ul></div>
                    </div>
                    <div className="copyright mt-3 pt-3 pb-3 d-flex">
                        <p class="mb-0">Copyright 2024. All rights reserved</p>
                        <ul className="list list-inline ml-auto mb-0 socials">
                            <li className="list-inline-item">
                                <Link to="/"><FaFacebookF /></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/"><FaXTwitter /></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/"><FaInstagram /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;