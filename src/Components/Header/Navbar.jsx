import { Link } from "react-router-dom";
import List from "./List";

const Navbar = () => {

    const routes = [
        { id: 1, name: 'Statistics', path: '/statistics' },
        { id: 2, name: 'Applied Jobs', path: '/applied-jobs' },
        { id: 3, name: 'Blog', path: '/blog' },
    ]

    return (
        <div className="flex justify-between items-center my-5">

            <Link to={'/'}>
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A]">
                    CareerHub
                </h1>
            </Link>


            <nav>
                <ul className="md:flex justify-between items-center gap-10 text-[#0F172A] text-lg font-semibold">
                    {
                        routes.map((route) => <List key={route.id} route={route}></List>)
                    }
                </ul>
            </nav>

            <button className="btn btn-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
                Start Applying
            </button>


        </div>
    );
}

export default Navbar;
