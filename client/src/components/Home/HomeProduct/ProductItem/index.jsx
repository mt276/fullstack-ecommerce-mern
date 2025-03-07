import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdFavoriteBorder } from "react-icons/md";
import { BiExpand } from "react-icons/bi";
import Rating from "@mui/material/Rating";

import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import ProductModal from "../ProductModal";

const productRow = [
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
    { title: "Men Alias-N Regular Fit Spread Collar Shirt", img1: "https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg", img2: "https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg", oldPrice: "2000$", netPrice: "1500$" },
];


const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
};

const ProductItem = ({ type = "carousel" }) => {
    const [isOpenProductModel, setIsOpenProductModel] = useState(false);

    const viewProductDetails = () => {
        setIsOpenProductModel(true);
    };

    const closeProductModal = () => {
        setIsOpenProductModel(false);
    };

    if (type === "grid") {
        const productGroups = chunkArray(productRow, 4).slice(0, 4);
        return (
            <>
                {productGroups.map((group, rowIndex) => (
                    <div key={rowIndex} className="product_row productRow2 w-100 mt-4 d-flex productScroller ml-0 mr-0">
                        {group.map((product, index) => (
                            <ProductCard key={index} product={product} viewProductDetails={viewProductDetails} />
                        ))}
                    </div>
                ))}
                {isOpenProductModel && <ProductModal closeProductModal={closeProductModal} />}
            </>
        );
    }

    return (
        <div className="product_row w-100 mt-2">
            <Swiper
                spaceBetween={0}
                slidesPerView={type === "carousel" ? 4 : 5}
                centeredSlides={false}
                navigation
                slidesPerGroup={3}
                modules={[Navigation]}
                className="mySwiper"
            >
                {productRow.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={product} viewProductDetails={viewProductDetails} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {isOpenProductModel && <ProductModal closeProductModal={closeProductModal} />}
        </div>
    );
};

const ProductCard = ({ product, viewProductDetails }) => {
    return (
        <div className="productItem undefined">
            <div className="img_rapper">
                <Link to="/">
                    <div className="productItemSliderWrapper">
                        <div className="img1 transition">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded">
                                <img alt="image" className="w-100" src={product.img1} />
                            </span>
                        </div>
                        <div className="img2 transition">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded">
                                <img alt="image" className="w-100" src={product.img2} />
                            </span>
                        </div>
                    </div>
                </Link>
                <span className="badge badge-primary">10%</span>
                <div className="actions">
                    <Button onClick={viewProductDetails}>
                        <BiExpand />
                    </Button>
                    <Button>
                        <MdFavoriteBorder />
                    </Button>
                </div>
            </div>
            <div className="info" title={product.title}>
                <Link to="/">
                    <h4>{product.title.substr(0, 20) + "..."}</h4>
                </Link>
                <span className="text-success d-block">In Stock</span>
                <Rating className="Rating-readOnly" value={5} size="small" precision={0.5} readOnly />
                <div className="d-flex">
                    <span className="oldPrice">{product.oldPrice}</span>
                    <span className="netPrice text-danger ml-2">{product.netPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;