import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="container mx-auto pt-5">
            <div className="flex justify-between items-center">
                <img className="w-[200px]" src={'https://i.ibb.co/Zfdq6v5/Logo.png'} alt="" />
                <nav className="flex gap-10 items-center">
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