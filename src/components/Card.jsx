import PropTypes from 'prop-types'

const Card = ({card}) => {
    const {imageLink, courseName, courseDetails, priceValue, creditValue} = card;
    return (
        <div>
            <img src={imageLink} alt="" />
            <h1 className='text-2xl'>{ courseName}</h1>
            <p>{courseDetails}</p>
            <div className='flex space-x-24'>
                <div>
                    <p>price:{priceValue}</p>
                </div>
                <div>
                    <p>credit:{creditValue}</p>

                </div>
            </div>
            <button className='text-white bg-blue-700 px-32 py-2 rounded-lg'>Select</button>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
}

export default Card;