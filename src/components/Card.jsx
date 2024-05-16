import PropTypes from 'prop-types'
import { useState } from 'react';

const Card = ({card}) => {
    const[carts, setCarts]=useState([]);
    const handleClikedSelectBtn=(card)=>{
        console.log(carts)
        const newclick = [...carts, card]
        setCarts(newclick);
    }

    const {imageLink, courseName, courseDetails, priceValue, creditValue} = card;
    return (
        <div className='bg-white px-3 py-3'>
            <img className='min-w-full' src={imageLink} alt="" />
            <h1 className='text-2xl'>{ courseName}</h1>
            <p>{courseDetails}</p>
            <div className='flex space-x-28 text-xl'>
                <div>
                    <p>price:{priceValue}</p>
                </div>
                <div>
                    <p>credit:{creditValue}</p>

                </div>
            </div>
            <button onClick={()=>handleClikedSelectBtn(card)} className='bg-blue-600 w-72 text-white hover:bg-black rounded-lg py-2'>Select</button>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
}

export default Card;