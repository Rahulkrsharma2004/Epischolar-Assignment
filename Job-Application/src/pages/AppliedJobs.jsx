import { useJobContext } from '../context/JobContext';

export default function AppliedJobs() {
  const { appliedJobs } = useJobContext();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Applied Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appliedJobs.map((job) => (
          <div key={job.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}