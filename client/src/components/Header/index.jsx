import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CountryDropdown from "./CountryDropdown/index.jsx";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi"
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox/index.jsx";
import Navigation from "./Navigation/index.jsx";
import { useContext } from "react";
import { MyContext } from "../../App.jsx";

const Header = () => {

    const context = useContext(MyContext);
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
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
                            <div className="col-sm-2 logoWrapper d-flex align-items-center">
                                <Link to={"/"}>
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>

                            <div className="col-sm-10 d-flex align-items-center part2">

                                {context?.countryList?.length !== 0 && <CountryDropdown />}


                                <SearchBox />

                                <div className="part3 d-flex align-items-center">
                                    <Button className="circle ml-3"><FiUser /></Button>
                                    <div className="ml-auto cartTab d-flex align-items-center">
                                        <span className="price">$3.29</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle"><IoBagOutline /></Button>
                                            <span className="count d-flex align-items-center justify-content-center">1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                <Navigation />

            </div >
        </>
    );
};

export default Header;
