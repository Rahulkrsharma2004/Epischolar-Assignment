import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function JobCard({ job = {} }) {
  const {
    title = "No Title Available",
    rating = 0,
    reviews = 0,
    location = "Not Specified",
    tags = [],
    salary = "N/A",
    id = "",
  } = job;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h2>
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-300">({reviews} Reviews)</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white text-xs font-medium rounded-full">
          {location}
        </span>
        {Array.isArray(tags) &&
          tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
        <div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">{salary}</span>
        </div>
        {id && (
          <Link
            to={`/jobs/${id}`}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-300"
          >
            Apply
          </Link>
        )}
      </div>
    </div>
  );
}
