
const CategoryList = ({ category }) => {


    const { logo, category_name, availability } = category || {};

    return (
        <div className="mx-auto">

            <div>
                <div>
                    <img className="w-[100px] h-[100px]" src={logo} alt="" />
                </div>

                <div>
                    <h1 className="text-xl font-semibold">{category_name}</h1>
                    <p className="font-mono text-gray-500">{availability}</p>
                </div>

            </div>

        </div>
    );
}

export default CategoryList;
