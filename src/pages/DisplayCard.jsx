import PropTypes from 'prop-types';

const DisplayCard = ({ card }) => {
    const { Picture, Title, Category, Card_bg_Color, Text_Color } = card
    console.log(Card_bg_Color, Text_Color)
    return (
        <div className=''>
            <div className='shadow-md pb-8 rounded-b-md' style={{ backgroundColor: Card_bg_Color }}>
                <img className='mb-4' src={Picture} alt="" />
                <div>
                    <h2 className='mb-2 font-medium text-sm pl-4' style={{ color: Text_Color }}>{Title}</h2>
                </div>
                <h3 className='font-semibold text-xl pl-4' style={{ color: Text_Color }}>{Category}</h3>
            </div>
        </div >
    );
};

DisplayCard.propTypes = {
    card: PropTypes.object
};

export default DisplayCard;