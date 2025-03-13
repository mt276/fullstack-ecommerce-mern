import { Dialog, Slide } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { MdClose } from "react-icons/md"

import "./style.css"
import ProductDetail from '../../../Product/ProductDetail';

const ProductModal = (props) => {
    return (
        <>
            <Dialog open={true} onClose={() => props.closeProductModal()}>
                <Button className="_close" onClick={() => props.closeProductModal()}><MdClose />
                    <ProductDetail />
                </Button>
            </Dialog>
        </>
    )
}

export default ProductModal