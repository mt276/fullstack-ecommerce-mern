import Logo from "../../assets/images/logo.jpg";
import Button from '@mui/material/Button';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi"
import { IoBagOutline } from "react-icons/io5";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { MyContext } from "../../App.jsx";
import CountryDropdown from "./CountryDropdown/index";
import SearchBox from "./SearchBox/index";
import Navigation from "./Navigation/index";
import "./style.css"

const Header = () => {

    const context = useContext(MyContext);
    return (
        <>
            <Button className="gotoTop "><IoIosArrowDropupCircle /></Button>
            <div className="headerWrapperFixed fixed">
                <div className="headerWrapper">
                    <div className="top-strip bg-purple">
                        <div className="container">
                            <p className="mb-0 mt-0 text-center">
                                Due to the <strong>COVID 19</strong> epidemic, orders may be
                                processed with a slight delay
                            </p>
                        </div>
                    </div>

                    <header className="header">
                        <div className="container">
                            <div className="row">
                                <div className="logoWrapper d-flex align-items-center col-sm-2">
                                    <Link className="logo" to={"/"}>
                                        <img src={Logo} alt="Logo" />
                                    </Link>
                                </div>

                                <div className="col-sm-10 d-flex align-items-center part2">

                                    {context?.countryList?.length !== 0 && <CountryDropdown />}


                                    <SearchBox />

                                    <div className="part3 d-flex align-items-center ml-auto">
                                        <div className="res-hide">
                                            <Button className="circle mr-3"><FiUser /></Button>
                                        </div>
                                        <div className="ml-auto cartTab d-flex align-items-center">
                                            <span className="price">$3.29</span>
                                            <div className="position-relative ml-2 res-hide">
                                                <Link to={"/cart"}>
                                                    <Button className="circle"><IoBagOutline /></Button>
                                                    <span className="count d-flex align-items-center justify-content-center">1</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </header>

                    <Navigation />

                </div >
            </div>
        </>
    );
};

export default Header;
