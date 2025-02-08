import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {job.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-100">{job.company}</p>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-100 space-y-2">
        <p className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1" /> {job.rating} / 5.0
        </p>
        <p className="flex items-center">📍 {job.location}</p>
        <p>💼 {job.jobType}</p>
        <p>💰 {job.salary}</p>
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="block mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline"
      >
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
          Apply Now
        </button>
      </Link>
    </div>
  );
}
