import { Button } from "@mui/material";
import { IoMailOutline } from "react-icons/io5";


import "./style.css"


const NewLetter = () => {

    return (
        <>
            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div class="col-md-6">
                            <p class="text-white mb-1">$20 discount for your first order</p>
                            <h3 class="text-white">Join our newsletter and get...</h3>
                            <p class="text-light">Join our email subscription now to get updates on <br /> promotions and coupons.</p>
                            <form className="mt-4">
                                <IoMailOutline />
                                <input type="text" placeholder="Your Email Address"></input>
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <img src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewLetter;