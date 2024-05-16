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
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
}

export default Card;