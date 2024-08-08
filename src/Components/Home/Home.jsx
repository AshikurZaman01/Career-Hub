import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            this is Home page
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Home;
