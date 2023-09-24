import { createBrowserRouter } from "react-router-dom";
import MainUi from "./MainUi";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Donation from "./pages/Donation";
import Detail from "./pages/Detail";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainUi></MainUi>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('card.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/detail/:detailId',
                element: <Detail></Detail>,
                loader: () => fetch('../card.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
    },
])

export default Router;