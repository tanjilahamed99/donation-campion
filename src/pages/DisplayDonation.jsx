import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DisplayDonation = ({ card }) => {
    const { id,Picture, Title, Category, Card_bg_Color, Text_Color, Button_bg_Color, Price } = card;
    return (
        <div className='flex flex-col lg:flex-row lg:items-center shadow-md gap-5' style={{ backgroundColor: Card_bg_Color }}>
            <div className=''>
                <img className='w-full lg:h-[200px]' src={Picture} alt="" />
            </div>
            <div className='px-3 pb-3'>
                <button className=' font-medium text-sm p-2 rounded-md ' style={{ color: Text_Color, backgroundColor: Button_bg_Color }}>{Title}</button>
                <h3 className='font-semibold text-xl my-2 '>{Category}</h3>
                <p className='font-semibold' style={{ color: Text_Color }}>${Price}</p>
                <Link to={`/detail/${id}`}><button className=' font-medium text-sm p-2 rounded-md mt-2 text-white' style={{ backgroundColor: Text_Color }}>View Details</button></Link>
            </div>
        </div>
    );
};

DisplayDonation.propTypes = {
    card: PropTypes.object
};

export default DisplayDonation;