import PropTypes from 'prop-types'

const Card = ({card}) => {
    const {imageLink, courseName} = card;
    return (
        <div>
            <img src={imageLink} alt="" />
            <h2>{ courseName}</h2>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
}

export default Card;