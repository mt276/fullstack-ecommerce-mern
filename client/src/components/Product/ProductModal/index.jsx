import { Dialog, Slide } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { MdClose } from "react-icons/md"

import "./style.css"

const ProductModal = (props) => {
    return (
        <>
            <Dialog open={true} onClose={() => props.closeProductModal()}>
                <Button className="_close" onClick={() => props.closeProductModal()}><MdClose />
                    <h4 class="mb-1 font-weight-bold pr-5">Men Alias-N Regular Fit Spread Collar Shirt</h4>
                    <div className='d-flex align-items-center'>
                        <div className='d-flex align-items-center mr-4'>
                            <span>Brands:</span>
                            <span className='ml-2'><b> RARE RABBIT</b></span>
                        </div>
                    </div>
                </Button>
            </Dialog>
        </>
    )
}

export default ProductModal