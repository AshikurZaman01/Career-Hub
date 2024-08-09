import { Link } from "react-router-dom";
import List from "./List";
import { CgMenuMotion } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Statistics', path: '/statistics' },
        { id: 2, name: 'Applied Jobs', path: '/applied-jobs' },
        { id: 3, name: 'Blog', path: '/blog' },
    ];

    const [open, setOpen] = useState(false);
    const handleMenu = () => setOpen(!open);

    return (
        <div className="flex justify-between items-center my-5">
            <Link to="/">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A]">
                    CareerHub
                </h1>
            </Link>

            <div>
                <nav className="flex-1 flex justify-center">
                    <ul className={`md:flex md:items-center gap-10 text-[#0F172A] text-lg font-semibold ${open ? 'block' : 'hidden md:flex'}`}>
                        {routes.map((route) => (
                            <List key={route.id} route={route} />
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-10">
                <button className="btn btn-sm md:btn-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
                    Start Applying
                </button>

                <div
                    className="text-3xl md:hidden cursor-pointer shadow-lg p-1 rounded-full"
                    onClick={handleMenu}
                >
                    {open ? <IoIosCloseCircleOutline /> : <CgMenuMotion />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
