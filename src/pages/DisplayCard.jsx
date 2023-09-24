import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayCard = ({ card }) => {
    const { id, Picture, Title, Category, Card_bg_Color, Text_Color } = card;

    return (
            <Link to={`/detail/${id}`}>
                <div className='shadow-md pb-8 rounded-b-md' style={{ backgroundColor: Card_bg_Color }}>
                    <img className='mb-4' src={Picture} alt="" />
                    <div>
                        <h2 className='mb-2 font-medium text-sm pl-4' style={{ color: Text_Color }}>{Title}</h2>
                    </div>
                    <h3 className='font-semibold text-xl pl-4' style={{ color: Text_Color }}>{Category}</h3>
                </div>
            </Link>
    );
};

DisplayCard.propTypes = {
    card: PropTypes.object
};

export default DisplayCard;