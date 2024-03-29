import { useLoaderData } from 'react-router-dom';
import DisplayCard from './DisplayCard';
import { useEffect, useState } from 'react';
import '../assets/react.svg'

// https://i.ibb.co/2Fxbg1x/Rectangle-4281.png

const Home = () => {
    const cardsData = useLoaderData()
    const [search, setSearch] = useState([''])
    const [btn, setBtn] = useState(false)
    const [searchCard, setSearchCard] = useState([])



    const handleSubmit = e => {
        e.preventDefault()
        setSearch(e.target.input.value)
    }

    useEffect(() => {
        const searchByApi = cardsData.filter((card) => card.Title === search)
        if (searchByApi.length > 0) {
            setSearchCard(searchByApi)
        } else if (search == '') {
            setSearchCard(cardsData)
        } else {
            setSearchCard(cardsData)
        }
    }, [cardsData, search])



    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/2Fxbg1x/Rectangle-4281.png)' }}>
                <div className="hero-overlay bg-opacity-80 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className=" ">
                    <h2 className="text-center text-[#0B0B0B] text-2xl md:text-4xl font-bold px-3">I Grow By Helping People In Need</h2>
                    <form onSubmit={handleSubmit} className="mx-auto flex justify-center mt-8">
                        <input name="input" className="py-3 px-3 md:w-[40%] lg:w-[50%] w-[60%] rounded-md border text-[#BBBBA7]" type="text" placeholder="Search here...." />
                        <input onClick={() => setBtn(true)} className="btn  px-4 py-3  rounded-md bg-[#FF444A] text-white" type="submit" value="Search" />
                    </form>
                </div>
                </div>
            </div>

            <div className='container my-32 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto items-center gap-5'>
                {btn ? searchCard?.map((card) => <DisplayCard key={card.id} card={card}></DisplayCard>) :
                    cardsData?.map((card) => <DisplayCard key={card.id} card={card}></DisplayCard>)
                }
            </div>
        </div>
    );
};

export default Home;