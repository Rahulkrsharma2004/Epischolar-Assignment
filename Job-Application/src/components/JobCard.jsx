import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{job.company}</p>
      <Link to={`/jobs/${job.id}`} className="mt-4 inline-block text-blue-500">
        View Details
      </Link>
    </div>
  );
}