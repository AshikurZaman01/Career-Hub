import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AllJobs = ({ job }) => {

    const { id, job_title, company_name, job_type, remote_or_onsite, location, salary } = job || {};

    return (
        <div className="flex justify-between items-center mb-10">
            <div className="space-y-2">
                <h1 className="text-xl font-bold text-gray-500">{job_title}</h1>
                <p className="text-sm font-semibold text-gray-500">{company_name}</p>

                <div className="flex justify-start items-center gap-3">
                    <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border border-[#7E90FE] rounded-lg p-2 w-[150px] text-center">
                        {remote_or_onsite}
                    </h4>

                    <h4 className="text-xl font-bold bg-clip-text  text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF]   border border-[#7E90FE] rounded-lg p-2 w-[150px] text-center">{job_type}</h4>
                </div>

                <div className="flex justify-start gap-2">
                    <h4 className="flex items-center text-lg font-medium">
                        <span className="mr-2">
                            <CiLocationOn className="text-blue-500" />
                        </span>
                        {location}
                    </h4>
                    <h4 className="flex items-center text-lg font-medium">
                        <span className="mr-2">
                            <CiBadgeDollar className="text-green-500" />
                        </span>
                        {salary}
                    </h4>
                </div>
            </div>

            <div>
                <Link to={`/job/${id}`}><button className=" btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border font-semibold text-white tracking-wide">View Details</button></Link>
            </div>

        </div>
    );
}

export default AllJobs;
