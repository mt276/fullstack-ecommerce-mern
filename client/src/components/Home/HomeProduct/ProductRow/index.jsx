import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdFavoriteBorder } from "react-icons/md";
import { BiExpand } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";


import "./style.css"
import "swiper/css";
import "swiper/css/navigation";

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


const ProductRow = () => {

    return (
        <>
            <div className="product_row w-100 mt-2">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    centeredSlides={false}
                    navigation
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {productRow.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="productItem undefined">
                                <div className="img_rapper">
                                    <Link to="/">
                                        <div className="productItemSliderWrapper">
                                            <div className="img1 transition">
                                                <span className=" lazy-load-image-background blur lazy-load-image-loaded">
                                                    <img alt="image" className="w-100" src={product.img1} />
                                                </span>
                                            </div>
                                            <div className="img2 transition">
                                                <span className=" lazy-load-image-background blur lazy-load-image-loaded">
                                                    <img alt="image" className="w-100" src={product.img2} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                    <span class="badge badge-primary">10%</span>
                                    <div className="actions">
                                        <Button><BiExpand /></Button>
                                        <Button><MdFavoriteBorder /></Button>
                                    </div>
                                </div>
                                <div className="info" title={product.title}>
                                    <Link to="/"><h4>{product.title.substr(0, 20) + "..."}</h4></Link>
                                    <span class="text-success d-block">In Stock</span>
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    <div class="d-flex">
                                        <span class="oldPrice">{product.oldPrice}</span>
                                        <span class="netPrice text-danger ml-2">{product.netPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

const ProductRow2 = () => {
    const chunkArray = (arr, size) => {
        return arr.reduce((acc, _, i) =>
            i % size ? acc : [...acc, arr.slice(i, i + size)], []
        );
    };

    const productGroups = chunkArray(productRow, 4).slice(0, 4);

    return (
        <>
            {productGroups.map((group, rowIndex) => (
                <div key={rowIndex} className="product_row productRow2 w-100 mt-4 d-flex productScroller ml-0 mr-0">
                    {group.map((product, index) => (
                        <div key={index} className="productItem undefined">
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
                                    <Button><BiExpand /></Button>
                                    <Button><MdFavoriteBorder /></Button>
                                </div>
                            </div>
                            <div className="info" title={product.title}>
                                <Link to="/"><h4>{product.title.substr(0, 20) + "..."}</h4></Link>
                                <span class="text-success d-block">In Stock</span>
                                <span>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                                <div class="d-flex">
                                    <span class="oldPrice">{product.oldPrice}</span>
                                    <span class="netPrice text-danger ml-2">{product.netPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

const ProductRow3 = () => {

    return (
        <>
            <div className="product_row w-100 mt-2">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    centeredSlides={false}
                    navigation
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {productRow.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="productItem undefined">
                                <div className="img_rapper">
                                    <Link to="/">
                                        <div className="productItemSliderWrapper">
                                            <div className="img1 transition">
                                                <span className=" lazy-load-image-background blur lazy-load-image-loaded">
                                                    <img alt="image" className="w-100" src={product.img1} />
                                                </span>
                                            </div>
                                            <div className="img2 transition">
                                                <span className=" lazy-load-image-background blur lazy-load-image-loaded">
                                                    <img alt="image" className="w-100" src={product.img2} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                    <span class="badge badge-primary">10%</span>
                                    <div className="actions">
                                        <Button><BiExpand /></Button>
                                        <Button><MdFavoriteBorder /></Button>
                                    </div>
                                </div>
                                <div className="info" title={product.title}>
                                    <Link to="/"><h4>{product.title.substr(0, 20) + "..."}</h4></Link>
                                    <span class="text-success d-block">In Stock</span>
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    <div class="d-flex">
                                        <span class="oldPrice">{product.oldPrice}</span>
                                        <span class="netPrice text-danger ml-2">{product.netPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export { ProductRow, ProductRow2, ProductRow3 };