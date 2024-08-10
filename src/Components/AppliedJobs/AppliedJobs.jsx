import { useContext } from 'react';
import logo1 from '../../assets/images/bg1.png';
import { AppliedJobsContext } from '../../ContextAPI/AppliedJobs';
import AllJobs from './AllJobs';
const AppliedJobs = () => {

    const { appliedJobs, appliedJobsCount } = useContext(AppliedJobsContext);




    return (
        <div>
            <div className="bg-left bg-no-repeat h-64 text-center text-3xl font-bold"
                style={{ backgroundImage: `url(${logo1})` }}>
                <h1>Job Details</h1>
            </div>

            <div>
                <div className='flex justify-center items-center mt-10 text-3xl font-bold mb-10'>
                    <h2>Applied Jobs : <span className='text-orange-400'>{appliedJobsCount}</span></h2>
                </div>

                <div className='flex justify-end items-center mr-10 mb-10'>
                    <h1>Filter By</h1>
                </div>

                <div>
                    {
                        appliedJobs.map((job) => <AllJobs key={job.id} job={job}></AllJobs>)
                    }
                </div>

            </div>
        </div>
    );
}

export default AppliedJobs;
