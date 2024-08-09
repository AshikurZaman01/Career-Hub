import { CiBadgeDollar, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Jobs = ({ job }) => {

    const { id, company_name, contact_information, educational_requirements, experiences, job_description, job_responsibility, job_title, job_type, location, logo, remote_or_onsite, salary } = job || {};

    return (
        <div>
            <div>
                <div>
                    <img src={`${logo}`} alt="" />
                </div>

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

                    <div>
                        <Link to={`/job/${id}`}><button className=" btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border font-semibold text-white tracking-wide">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Jobs;
