import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center mt-52">
            <h2 className="font-semibold text-2xl ">This is incorrect path</h2>
            <Link to={'/'}><button className="bg-purple-600 mt-3 text-white px-3 py-3 rounded-lg">beck to Home</button></Link>
        </div>
    );
};

export default Error;