import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from 'react-icons/fa6'
import { Link } from "react-router-dom";
import { useState } from 'react';
import "./style.css"

const Navigation = () => {
    const [isOpenSidebarNav, setIsOpenSidebarNav] = useState(false)

    return (
        <>
            <nav>
                <div className="container">
                    <div className='row'>
                        <div className="col-sm-2 navPart1">
                            <div className='catWrapper'>
                                <Button className="allCatTab align-items-center res-hide" onClick={() => setIsOpenSidebarNav(!isOpenSidebarNav)}>
                                    <span className="ioIosMenu mr-2"><IoIosMenu /></span>
                                    <span className="text">ALL CATEGORIES</span>
                                    <span className="faAngleDown ml-2"><FaAngleDown /></span>
                                </Button>

                                <div className={`sidebarNav ${isOpenSidebarNav === true ? 'open' : ''}`}>
                                    <ul>
                                        <li>
                                            <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" width="20" class="mr-2" />Fashion</Button></Link>
                                            <div className='submenu false'>
                                                <Link to="/"><Button>Men</Button></Link>
                                                <Link to="/"><Button>Woman</Button></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525218436_ele.png" width="20" class="mr-2" />Electronics</Button></Link>
                                            <div className='submenu false'>
                                                <Link to="/"><Button>Laptops</Button></Link>
                                                <Link to="/"><Button>Smart Watch Accessories</Button></Link>
                                                <Link to="/"><Button>Cameras</Button></Link>
                                            </div>
                                        </li>
                                        <li className='list-inline-item'>
                                            <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525231018_bag.png" width="20" class="mr-2" />Bags</Button></Link>
                                            <div className='submenu false'>
                                                <Link to="/"><Button>Men Bags</Button></Link>
                                                <Link to="/"><Button>Woman Bags</Button></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" width="20" class="mr-2" />Footwear</Button></Link>
                                            <div className='submenu false'>
                                                <Link to="/"><Button>Men Footwear</Button></Link>
                                                <Link to="/"><Button>Woman Footwear</Button></Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525248057_gro.png" width="20" class="mr-2" />Groceries</Button></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525255799_beauty.png" width="20" class="mr-2" />Beauty</Button></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525275367_well.png" width="20" class="mr-2" />Wellness</Button></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525286186_jw.png" width="20" class="mr-2" />Jewellery</Button></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 navPart2 d-flex align-items-center res-nav-wrapper close">
                            <div className='res-nav-overlay'></div>
                            <div className='res-nav'>
                                <ul className='list list-inline ml-auto'>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" width="20" class="mr-2" />Fashion</Button></Link>
                                        <div className='submenu false'>
                                            <Link to="/"><Button>Men</Button></Link>
                                            <Link to="/"><Button>Woman</Button></Link>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525218436_ele.png" width="20" class="mr-2" />Electronics</Button></Link>
                                        <div className='submenu false'>
                                            <Link to="/"><Button>Laptops</Button></Link>
                                            <Link to="/"><Button>Smart Watch Accessories</Button></Link>
                                            <Link to="/"><Button>Cameras</Button></Link>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525231018_bag.png" width="20" class="mr-2" />Bags</Button></Link>
                                        <div className='submenu false'>
                                            <Link to="/"><Button>Men Bags</Button></Link>
                                            <Link to="/"><Button>Woman Bags</Button></Link>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" width="20" class="mr-2" />Footwear</Button></Link>
                                        <div className='submenu false'>
                                            <Link to="/"><Button>Men Footwear</Button></Link>
                                            <Link to="/"><Button>Woman Footwear</Button></Link>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525248057_gro.png" width="20" class="mr-2" />Groceries</Button></Link>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525255799_beauty.png" width="20" class="mr-2" />Beauty</Button></Link>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button><img src="https://api.spicezgold.com/download/file_1734525275367_well.png" width="20" class="mr-2" />Wellness</Button></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;