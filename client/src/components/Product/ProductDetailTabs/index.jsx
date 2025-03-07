import Rating from '@mui/material/Rating';
import { useState } from "react";
import { Button } from "@mui/material";

import "./style.css"

const ProductDetailTabs = () => {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <>
            <div className="card mt-5 p-5 detailsPageTabs">
                <div className="customTabs">
                    <ul className="list list-inline">
                        <li className="list-inline-item">
                            <Button onClick={() => setActiveTab("description")}
                                className={activeTab === "description" ? "active" : ""}
                            >
                                Description
                            </Button>
                        </li>
                        <li className="list-inline-item">
                            <Button onClick={() => setActiveTab("additionalInfo")}
                                className={activeTab === "additionalInfo" ? "active" : ""}
                            >
                                Additional info
                            </Button>
                        </li>
                        <li className="list-inline-item">
                            <Button onClick={() => setActiveTab("review")}
                                className={activeTab === "review" ? "active" : ""}
                            >
                                Review (7)
                            </Button>
                        </li>
                    </ul>
                    <div class="tabContent">
                        {activeTab === "description" && (
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        )}
                        {activeTab === "additionalInfo" && (
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
                        )}
                        {activeTab === "review" && (
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
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailTabs