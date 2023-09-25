import { useLoaderData } from 'react-router-dom';
import DisplayCard from './DisplayCard';
import { useEffect, useState } from 'react';

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
        setSearchCard(searchByApi)
    }, [cardsData, search])

    return (
        <div>


            <div className="mt-32">
                <h2 className="text-center text-[#0B0B0B] text-2xl md:text-4xl font-bold px-3">I Grow By Helping People In Need</h2>
                <form onSubmit={handleSubmit} className="mx-auto flex justify-center mt-8">
                    <input name="input" className="py-3 px-3 md:w-[40%] lg:w-[20%] w-[60%] rounded-md border text-[#BBBBA7]" type="text" placeholder="Search here...." />
                    <input onClick={() => setBtn(true)} className="btn  px-4 py-3  rounded-md bg-[#FF444A] text-white" type="submit" value="Search" />
                </form>
            </div>

            <div className='container my-32 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto items-center gap-5'>
                {btn ? searchCard?.map((card) => <DisplayCard key={card.id} card={card}></DisplayCard>) :
                    cardsData?.map((card) => <DisplayCard key={card.id} card={card}></DisplayCard>)
                }

                {/* {
                    searchCard?.map((card) => <DisplayCard key={card.id} card={card}></DisplayCard>)
                } */}
            </div>
        </div>
    );
};

export default Home;