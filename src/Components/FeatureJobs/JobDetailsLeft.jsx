
const JobDetailsLeft = ({ findJob }) => {

    const { educational_requirements, experiences, job_description, job_responsibility } = findJob || {};

    return (
        <div>
            <div className='py-10'>
                <h3 className='text-xl font-bold'>Job Description : <span className='text-sm font-medium text-justify text-gray-500'>{job_description}</span></h3>
            </div>

            <div className='pb-10'>
                <h3 className='text-xl font-bold'>Job Responsibility : <span className='text-sm font-medium text-justify text-gray-500'>{job_responsibility}</span></h3>
            </div>

            <div className='pb-10'>
                <h3 className='text-xl font-bold'>Educational Requirements : <p className='text-sm font-medium text-justify pt-2 text-gray-500'>{educational_requirements}</p></h3>
            </div>

            <div className='pb-10'>
                <h3 className='text-xl font-bold'>Experience : <p className='text-sm font-medium text-justify pt-2 pb-10 text-gray-500'>{experiences}</p></h3>
            </div>

        </div>
    );
}

export default JobDetailsLeft;
