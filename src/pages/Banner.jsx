const Banner = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.input.value)
    }
    return (
        <div className="mt-32">
            <h2 className="text-center text-[#0B0B0B] text-2xl md:text-4xl font-bold px-3">I Grow By Helping People In Need</h2>
            <form onSubmit={handleSubmit} className="mx-auto flex justify-center mt-8">
                <input name="input" className="py-3 px-3 md:w-[40%] lg:w-[20%] w-[60%] rounded-md border text-[#BBBBA7]" type="text" placeholder="Search here...." />
                <input className="btn  px-4 py-3  rounded-md bg-[#FF444A] text-white" type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Banner;