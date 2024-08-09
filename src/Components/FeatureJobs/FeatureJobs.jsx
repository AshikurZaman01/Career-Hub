import { useEffect, useState } from "react";
import Jobs from "./Jobs";

const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const numberOfJobs = showAll ? jobs.length : 4;

    useEffect(() => {
        fetch('../../../public/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>

            <div className="mt-20 space-y-2 mb-5">
                <h1 className="text-3xl font-bold text-center">Featured Jobs</h1>
                <p className="text-center font-semibold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, rerum.</p>
            </div>

            <div className="grid grid-cols-2 gap-5 py-5">
                {
                    jobs.slice(0, numberOfJobs).map((job) => <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>

            <div className="flex justify-center my-10">
                <button onClick={() => setShowAll(!showAll)} className="btn btn-outline btn-info">Show All</button>
            </div>

        </div>
    );
}

export default FeatureJobs;
