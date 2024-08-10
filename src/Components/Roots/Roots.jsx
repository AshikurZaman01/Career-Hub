import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { AppliedJobsProvider } from '../../ContextAPI/AppliedJobs';

const Roots = () => {
    return (
        <AppliedJobsProvider>

            <div>
                <div className="w-[80%] mx-auto">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
                <Footer />
            </div>
        </AppliedJobsProvider>

    );
}

export default Roots;
