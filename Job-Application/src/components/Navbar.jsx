import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Job Dashboard
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/applied-jobs" className="mr-4 text-gray-800 dark:text-white">
              Applied Jobs
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}