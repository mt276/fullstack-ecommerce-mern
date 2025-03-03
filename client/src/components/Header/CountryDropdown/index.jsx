import { Dialog, Slide } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useContext, useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6'
import { IoIosSearch } from "react-icons/io"
import { MdClose } from "react-icons/md"
import { MyContext } from '../../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
});

const CountryDropdown = () => {

    const context = useContext(MyContext);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);

    const [countryList, setCountryList] = useState([]);

    const selectCountry = (index, country) => {
        setSelectedTab(index);
        setIsOpenModal(false);
        context.setSelectedCountry(country);
    }

    useEffect(() => {
        setCountryList(context.countryList);
    }, [context.countryList])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        const filteredList = context.countryList.filter((item) =>
            item.country.toLowerCase().includes(keyword)
        );

        setCountryList(filteredList);
    }

    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className='label'> Your Location</span>
                    <span className='name'> {context.selectedCountry !== "" ? (context.selectedCountry.length <= 14 ? context.selectedCountry : context.selectedCountry?.substr(0, 14) + "...") : 'Select Location'} </span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button >

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} TransitionComponent={Transition} className='locationModal'>
                <h4 className='mb-0'>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close_' onClick={() => setIsOpenModal(false)}><MdClose /></Button>
                <div className="headerSearch w-100">
                    <Button><IoIosSearch /></Button>
                    <input type="text" placeholder="Search your area..." onChange={filterList}></input>
                </div>
                <ul className='countryList mt-3'>

                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index, item.country)} className={`${selectedTab === index ? 'active' : ''}`}>{item.country}</Button></li>
                            )
                        })
                    }

                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;