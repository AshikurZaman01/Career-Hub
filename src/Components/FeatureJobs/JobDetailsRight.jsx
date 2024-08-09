import { CiBadgeDollar, CiLocationArrow1 } from "react-icons/ci";
import { FaPhone, FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const JobDetailsRight = ({ findJob }) => {
    console.log(findJob);

    const { company_name, contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, job_type, location, logo, remote_or_onsite, salary } = findJob || {};

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
                    <span><FaRegCalendarAlt className="text-blue-500" /></span>
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
                <button className="w-full py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md font-semibold">
                    Apply Now
                </button>
            </div>
        </div>
    );
}

export default JobDetailsRight;
