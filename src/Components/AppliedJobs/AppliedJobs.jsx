import { useContext, useState } from 'react';
import logo1 from '../../assets/images/bg1.png';
import { AppliedJobsContext } from '../../ContextAPI/AppliedJobs';
import AllJobs from './AllJobs';

const AppliedJobs = () => {
    const { appliedJobs, appliedJobsCount } = useContext(AppliedJobsContext);
    const [filter, setFilter] = useState('all');

    const handleFilter = (e) => {
        setFilter(e.target.value);
        console.log(e.target.value);
    }

    const filterJobs = appliedJobs.filter((job) => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'Full Time') {
            return job.job_type === 'Full Time';
        } else if (filter === 'Part Time') {
            return job.job_type === 'Part Time';
        } else if (filter === 'Remote') {
            return job.remote_or_onsite === 'Remote';
        } else if (filter === 'Onsite') {
            return job.remote_or_onsite === 'Onsite';
        }
        return false;
    });

    console.log(appliedJobs);

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
                    <div>
                        <label htmlFor="filter" className='mr-2'>Filter By:</label>
                        <select value={filter} onChange={handleFilter} name="filter" id="filter" className='border rounded px-3 py-1'>
                            <option value="all">All</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part-Time</option>
                            <option value="Remote">Remote</option>
                            <option value="Onsite">On Site</option> {/* Updated here */}
                        </select>
                    </div>
                </div>

                <div>
                    {
                        filterJobs.map((job) => <AllJobs key={job.id} job={job}></AllJobs>)
                    }
                </div>
            </div>
        </div>
    );
}

export default AppliedJobs;
