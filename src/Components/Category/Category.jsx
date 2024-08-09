import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";

const Category = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>

            <div >
                <div className="text-center space-y-5 ">
                    <h1 className="text-4xl font-bold">Job Category List</h1>
                    <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, sequi!</p>
                </div>

                <div>
                    <div className="flex justify-between items-center my-10">
                        {
                            category.map((category) => <CategoryList key={category.id} category={category}></CategoryList>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Category;
