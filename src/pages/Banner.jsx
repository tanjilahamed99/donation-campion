const Banner = () => {
    return (
        <div className="mt-32">
            <h2 className="text-center text-[#0B0B0B] text-4xl font-bold">I Grow By Helping People In Need</h2>
            <div className="mx-auto flex justify-center mt-8">
                <input className="py-3 px-3 w-[20%] rounded-md border text-[#BBBBA7]" type="text" placeholder="Search here...." />
                <button className="btn  px-4 py-3  rounded-md bg-[#FF444A] text-white">Search</button>
            </div>
        </div>
    );
};

export default Banner;