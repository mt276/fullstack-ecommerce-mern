import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";

import "./style.css"

const categories = [
    "Fashion",
    "Electronics",
    "Bags",
    "Footwear",
    "Groceries",
    "Beauty",
    "Wellness",
    "Jewellery"
];


const CategoryTab = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    return (
        <>
            <div className="ml-auto d-flex align-items-center justify-content-end res-full">
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    className="filterTabs "
                >
                    {categories.map((category, index) => (
                        <Tab className="item" key={index} label={category} />
                    ))}
                </Tabs>
            </div>
        </>
    )
}

export default CategoryTab;