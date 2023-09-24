import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import DisplayCard from './DisplayCard';

const Home = () => {
    const cardsData = useLoaderData()
    console.log(cardsData)
    return (
        <div>
            <Banner></Banner>
            <div className='container my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto items-center gap-5'>
                {
                    cardsData.map((card) => <DisplayCard key={card.id} card={card}></DisplayCard>)
                }
            </div>
        </div>
    );
};

export default Home;