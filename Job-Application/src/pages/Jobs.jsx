import FilterSidebar from '../components/FilterSidebar';
import JobCard from '../components/JobCard';
import { JOBS } from '../utils/constants';

export default function Jobs() {
  return (
    <div className="mx-auto py-40 px-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Job Listings</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64">
          <FilterSidebar />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOBS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
