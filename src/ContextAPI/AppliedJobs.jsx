import { createContext, useState } from "react";

const AppliedJobsContext = createContext();

const AppliedJobsProvider = ({ children }) => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [appliedJobsCount, setAppliedJobsCount] = useState(0);

    const addAppliedJobs = (job) => {
        setAppliedJobs(prevState => [...prevState, job]);
        setAppliedJobsCount(prevState => prevState + 1);
    }

    const removeAppliedJobs = (job) => {
        setAppliedJobs(prevJobs => prevJobs.filter((item) => item.id !== job.id));
        setAppliedJobsCount(prevCount => prevCount - 1);
    }

    return (
        <AppliedJobsContext.Provider value={{ appliedJobs, appliedJobsCount, addAppliedJobs, removeAppliedJobs }}>
            {children}
        </AppliedJobsContext.Provider>
    );
}

export { AppliedJobsContext, AppliedJobsProvider };
