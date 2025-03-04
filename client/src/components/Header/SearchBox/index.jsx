import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io"
import "./style.css"

const SearchBox = () => {
    return (
        <>
            <div className='headerSearchWrapper false'>
                <div className='d-flex align-items-center'>
                    <div className="headerSearch mx-3">
                        <input type="text" placeholder="Search for product..."></input>
                        <Button><IoIosSearch /></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBox;