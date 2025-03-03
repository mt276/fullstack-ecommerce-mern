import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from 'react-icons/fa6'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navigation = () => {
    const [isOpenSidebarNav, setIsOpenSidebarNav] = useState(true)

    return (
        <>
            <nav>
                <div className="container">
                    <div className='row'>
                        <div className="col-sm-2 navPart1">
                            <div className='cartWrapper'>
                                <Button className="allCatTab align-items-center" onClick={() => setIsOpenSidebarNav(!isOpenSidebarNav)}>
                                    <span className="ioIosMenu mr-2"><IoIosMenu /></span>
                                    <span className="text">ALL CATEGORIES</span>
                                    <span className="faAngleDown ml-2"><FaAngleDown /></span>
                                </Button>

                                <div className={`sidebarNav ${isOpenSidebarNav === true ? 'open' : ''}`}>
                                    <ul>
                                        <li>
                                            <Link to="/"><Button>Men</Button></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><Button>Woman</Button></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><Button>Beauty</Button></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><Button>Watches</Button></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><Button>Kids</Button></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><Button>Girt</Button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 navPart2 d-flex align-items-center">
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Women</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Women</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Beauty</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Kids</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Gift</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Brands</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;