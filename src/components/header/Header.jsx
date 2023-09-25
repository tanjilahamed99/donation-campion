import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="container mx-auto pt-5 md:px-5 lg:mx-0">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <img className="w-[200px]" src={'https://i.ibb.co/Zfdq6v5/Logo.png'} alt="" />
                <nav className="flex gap-10 items-center mt-10 md:mt-0">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;