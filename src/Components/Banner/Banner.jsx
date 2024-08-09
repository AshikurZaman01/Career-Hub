import image from '../../assets/images/user.png';

const Banner = () => {
    return (
        <div className="bg-gray-100 py-12 h-[90vh]">
            <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-6">
                <div className="left md:w-1/2 mt-8 md:mt-0">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        One Step Closer to Our
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 inline-block">
                            Dream Job
                        </span>
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, accusantium qui vel beatae cumque assumenda?
                    </p>
                    <button className="btn-md bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white px-6 py-2 rounded-md shadow hover:bg-indigo-700 font-semibold">
                        Get Started
                    </button>
                </div>
                <div className="right md:w-1/2">
                    <img src={image} alt="Banner" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
