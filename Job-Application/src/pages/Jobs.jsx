// import { FilterSidebar } from '../components/FilterSidebar';
import JobCard from '../components/JobCard';
import { JOBS } from '../utils/constants';

export default function Jobs() {
  return (
    <div className="container mx-auto py-40 ">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Job Listings</h1>
      {/* <FilterSidebar/> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
