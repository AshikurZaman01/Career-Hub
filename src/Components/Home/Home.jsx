import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const Home = () => {
    return (

        <div>
            <div className="w-[80%] mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
}

export default Home;
