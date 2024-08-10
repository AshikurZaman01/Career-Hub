import { CiBadgeDollar, CiLocationArrow1 } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AppliedJobsContext } from '../../ContextAPI/AppliedJobs';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetailsRight = ({ findJob }) => {
    const { contact_information, job_title, salary, id } = findJob || {};

    const { appliedJobs, addAppliedJobs } = useContext(AppliedJobsContext);

    const handleApplyNow = () => {
        const isJobExists = appliedJobs.some((job) => job.id === id);
        if (isJobExists) {
            alert('You have already applied for this job');
        } else {
            addAppliedJobs(findJob);
            alert('Job applied successfully');
        }
    };

    const isJobApplied = appliedJobs.some((job) => job.id === id);

    return (
        <div className="py-10">
            <div className="px-5 pb-5">
                <h2 className="text-xl font-bold pb-5">Job Details</h2>

                <div className="flex justify-start items-center gap-2 text-xl">
                    <span><CiBadgeDollar className="text-blue-500" /></span>
                    <h4 className="font-bold">Salary : </h4>
                    <p className="text-gray-500 text-sm font-semibold">{salary} (Per Month)</p>
                </div>

                <div className="flex justify-start items-center gap-2 text-xl">
                    <span><FaPhone className="text-blue-500" /></span>
                    <h4 className="font-bold">Job Title : </h4>
                    <p className="text-gray-500 text-sm font-semibold">{job_title}</p>
                </div>
            </div>

            <div className="px-5">
                <h2 className="text-xl font-bold pb-5">Contact Information</h2>

                <div className="flex justify-start items-center gap-2 text-xl">
                    <span><FaPhone className="text-blue-500" /></span>
                    <h4 className="font-bold">Phone : </h4>
                    <p className="text-gray-500 text-sm font-semibold">{contact_information?.phone}</p>
                </div>

                <div className="flex justify-start items-center gap-2 text-xl">
                    <span><MdOutlineEmail className="text-blue-500" /></span>
                    <h4 className="font-bold">Email : </h4>
                    <p className="text-gray-500 text-sm font-semibold">{contact_information?.email}</p>
                </div>

                <div className="flex justify-start items-center gap-2 text-xl">
                    <span><CiLocationArrow1 className="text-blue-500" /></span>
                    <h4 className="font-bold">Address : </h4>
                    <p className="text-gray-500 text-sm font-semibold">{contact_information?.address}</p>
                </div>
            </div>

            <div className="px-5 mt-5">
                <button
                    className={`w-full py-3 text-white ${isJobApplied ? "bg-gray-500" : " bg-blue-500 hover:bg-blue-600"} rounded-md font-semibold`}
                    onClick={handleApplyNow}
                    disabled={isJobApplied}
                >
                    {isJobApplied ? "Applied" : "Apply Now"}
                </button>
            </div>

        </div>
    );
};

export default JobDetailsRight;
