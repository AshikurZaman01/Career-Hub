import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <div className="w-[80%] mx-auto">
                <Navbar />
                <Banner />
                <Category></Category>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
