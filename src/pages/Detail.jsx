import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Detail = () => {
    const { detailId } = useParams();
    const idx = parseInt(detailId)
    const detailsData = useLoaderData();
    const [detail, setDetail] = useState([])
    const { id, Picture, Category, Description, Text_Color, Price } = detail

    useEffect(() => {
        const dataFind = detailsData.find((data) => data.id === idx)
        setDetail(dataFind)
    }, [detailsData, detailId, idx])

    const saveLocalStorage = () => {
        const detailData = []
        const haveLocalStorage = JSON.parse(localStorage.getItem('card'))
        if (!haveLocalStorage) {
            detailData.push(detail)
            localStorage.setItem('card', JSON.stringify(detailData))
        } else {
            const exits = haveLocalStorage.find(card => card.id === id);
            if (!exits) {
                detailData.push(...haveLocalStorage, detail)
                localStorage.setItem('card', JSON.stringify(detailData))
                swal("Good job!", "successful donation given", "success");
            } else {
                swal("bad thing!", "duplicate not allowed", "error");
            }
        }
    }



    return (
        <div className="container mx-auto my-20 p-5">
            <div className="relative">
                <img className="w-[100%] h-[500px] mx-auto " src={Picture} alt="" />
                <div className="absolute  top-[370px]  w-full p-10 bg-[#0B0B0B80]">
                    <button onClick={saveLocalStorage} style={{ backgroundColor: Text_Color }} className="btn  px-4 py-3 rounded-md text-white font-semibold text-xl ">Donate {Price}$</button>
                </div>
            </div>
            <h2 className="text-[#0B0B0B] font-semibold text-4xl mt-10 mb-6">{Category}</h2>
            <p className="font-normal text-[#0B0B0BB3] text-justify">{Description}</p>
        </div>
    );
};

export default Detail;