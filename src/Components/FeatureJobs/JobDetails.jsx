import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";

const JobDetails = () => {

    const { id } = useParams();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(err => console.log(err))
    }, [])

    const findJob = jobs?.find((job) => job?.id === parseInt(id));


    return (
        <div>
            <Details findJob={findJob}></Details>
        </div>
    );
}

export default JobDetails;
