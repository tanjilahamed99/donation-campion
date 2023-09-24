import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

const MainUi = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainUi;