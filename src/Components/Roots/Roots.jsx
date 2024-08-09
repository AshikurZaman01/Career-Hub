import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const Roots = () => {
    return (
        <div>
            <div className="w-[80%] mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
}

export default Roots;
