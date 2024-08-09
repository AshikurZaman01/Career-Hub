import { useEffect, useState } from "react";
import Jobs from "./Jobs";

const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);

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
                    jobs.map((job) => <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>

        </div>
    );
}

export default FeatureJobs;
