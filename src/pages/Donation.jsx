import { useEffect, useState } from "react";
import DisplayDonation from "./DisplayDonation";

const Donation = () => {
    const [seeAll, setSeeAll] = useState(false)
    const [noDataFound, setNoDataFound] = useState(false)
    const [cardsData, setCardsData] = useState([])

    useEffect(() => {
        const cardData = JSON.parse(localStorage.getItem('card'))
        if (cardData) {
            setCardsData(cardData)
        } else {
            setNoDataFound(true)
        }
    }, [])

    console.log(noDataFound)
    return (
        <div className="container mx-auto mt-10">
            {noDataFound ? <h2 className="font-bold text-5xl mt-52 text-center">No Data Found</h2> :
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center px-5">
                    {
                        seeAll ? cardsData.map((card) => <DisplayDonation key={card.id} card={card}></DisplayDonation>) :
                            cardsData.slice(0, 4).map((card) => <DisplayDonation key={card.id} card={card}></DisplayDonation>)
                    }
                </div>}

            {
                cardsData?.length > 4 && <button onClick={() => setSeeAll(!seeAll)} className="px-4 py-3 bg-[#009444] rounded-md text-white mx-auto flex my-10">{seeAll ? 'less then' : 'show all'}</button>
            }
        </div>
    );
};

export default Donation;