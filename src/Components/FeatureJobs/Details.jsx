
import logo1 from '../../assets/images/bg1.png';
import JobDetailsLeft from './JobDetailsLeft';
import JobDetailsRight from './JobDetailsRight';

const Details = ({ findJob }) => {



    return (
        <div>

            <div className="bg-left bg-no-repeat h-64 text-center text-3xl font-bold"
                style={{ backgroundImage: `url(${logo1})` }}>
                <h1>Job Details</h1>
            </div>


            <div className='grid grid-cols-3 gap-4 '>

                <div className='left col-span-2'>
                    <JobDetailsLeft findJob={findJob}></JobDetailsLeft>
                </div>

                <div className='right col-span-1'>
                    <JobDetailsRight findJob={findJob}></JobDetailsRight>
                </div>
            </div>

        </div>
    );
}

export default Details;
