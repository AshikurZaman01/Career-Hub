import facebook from "../../assets/icons/social.png";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="w-[80%] mx-auto py-12">

                <div className="grid grid-cols-6">

                    <div className="space-y-4 col-span-2 px-5">
                        <h1 className="text-2xl font-bold text-white">CareerHub</h1>
                        <p className="text-gray-500">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div>
                            <div>
                                <img src={facebook} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 col-span-1">
                        <h3 className="text-xl font-semibold text-white">Company</h3>
                        <ul className="flex flex-col space-y-1">
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">About Us</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Work</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Latest News</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Careers</li>
                        </ul>
                    </div>

                    <div className="space-y-4 col-span-1">
                        <h3 className="text-xl font-semibold text-white">Product</h3>
                        <ul className="flex flex-col space-y-1">
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Prototype</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Plans & Pricing</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Customers</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Integrations</li>
                        </ul>
                    </div>

                    <div className="space-y-4 col-span-1">
                        <h3 className="text-xl font-semibold text-white">Support</h3>
                        <ul className="flex flex-col space-y-1">
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Help Desk</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Sales</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Become a Partner</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">Developers</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Contact</h3>
                        <ul className="flex flex-col space-y-1">
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">524 Broadway , NYC</li>
                            <li className="text-xl font-thin text-gray-500 cursor-pointer">+1 777 - 978 - 5570</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Footer;
