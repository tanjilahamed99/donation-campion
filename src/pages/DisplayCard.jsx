import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayCard = ({ card }) => {
    const { id, Picture, Title, Category, Card_bg_Color, Text_Color,Button_bg_Color } = card;

    return (
            <Link to={`/detail/${id}`}>
                <div className='shadow-md pb-8 rounded-b-md' style={{ backgroundColor: Card_bg_Color }}>
                    <img className='mb-4' src={Picture} alt="" />
                        <button className=' font-medium text-sm ml-4 p-2 rounded-md mb-2' style={{ color: Text_Color,backgroundColor: Button_bg_Color }}>{Title}</button>
                    <h3 className='font-semibold text-xl ml-4' style={{ color: Text_Color }}>{Category}</h3>
                </div>
            </Link>
    );
};

DisplayCard.propTypes = {
    card: PropTypes.object
};

export default DisplayCard;