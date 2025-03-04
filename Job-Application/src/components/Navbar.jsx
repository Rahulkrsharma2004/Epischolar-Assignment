import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Calendar,
  Settings,
  Bell,
  User,
} from "react-feather";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#171923] text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
        <svg
            width="146"
            height="50"
            viewBox="0 0 146 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65 8C67.2091 8 69 6.20914 69 4C69 1.79086 67.2091 0 65 0C62.7909 0 61 1.79086 61 4C61 6.20914 62.7909 8 65 8Z"
              fill="#F7FAFC"
            />
            <path
              d="M58.7564 7H53.2436C53.1091 7 53 7.11245 53 7.25116V40.7488C53 40.8876 53.1091 41 53.2436 41H58.7564C58.8909 41 59 40.8876 59 40.7488V7.25116C59 7.11245 58.8909 7 58.7564 7Z"
              fill="#F7FAFC"
            />
            <path
              d="M6.55742 21.8874H16.6703C16.6946 21.8874 16.7185 21.8921 16.7409 21.9013C16.7633 21.9105 16.7837 21.924 16.8008 21.941C16.8179 21.958 16.8315 21.9782 16.8408 22.0005C16.8501 22.0227 16.8548 22.0465 16.8548 22.0706V28.1338C16.8548 28.1578 16.8501 28.1817 16.8408 28.2039C16.8315 28.2261 16.8179 28.2463 16.8008 28.2633C16.7837 28.2803 16.7633 28.2938 16.7409 28.303C16.7185 28.3122 16.6946 28.317 16.6703 28.317H6.55387C6.52964 28.317 6.50565 28.3217 6.48326 28.3309C6.46088 28.3401 6.44053 28.3536 6.4234 28.3706C6.40627 28.3876 6.39267 28.4078 6.3834 28.4301C6.37413 28.4523 6.36935 28.4761 6.36935 28.5002L6.39774 34.4788C6.39774 34.5274 6.41718 34.574 6.45179 34.6084C6.48639 34.6427 6.53332 34.662 6.58226 34.662L21.8155 34.655C21.8644 34.655 21.9114 34.6743 21.946 34.7086C21.9806 34.743 22 34.7896 22 34.8382V40.8168C22 40.8654 21.9806 40.912 21.946 40.9463C21.9114 40.9807 21.8644 41 21.8155 41H0.184518C0.135581 41 0.0886447 40.9807 0.0540412 40.9463C0.0194377 40.912 0 40.8654 0 40.8168V9.1832C0 9.13461 0.0194377 9.08802 0.0540412 9.05366C0.0886447 9.0193 0.135581 9 0.184518 9L21.8155 9.13388C21.8644 9.13388 21.9114 9.15318 21.946 9.18753C21.9806 9.22189 22 9.26849 22 9.31708V15.2816C22 15.3057 21.9952 15.3295 21.986 15.3517C21.9767 15.374 21.9631 15.3942 21.946 15.4112C21.9288 15.4282 21.9085 15.4417 21.8861 15.4509C21.8637 15.4601 21.8397 15.4648 21.8155 15.4648L6.57871 15.4472C6.52977 15.4472 6.48284 15.4665 6.44824 15.5009C6.41363 15.5352 6.3942 15.5818 6.3942 15.6304L6.37291 21.7042C6.37291 21.7528 6.39234 21.7994 6.42695 21.8337C6.46155 21.8681 6.50848 21.8874 6.55742 21.8874Z"
              fill="#F7FAFC"
            />
            <path
              d="M48.8775 40.4567C41.8189 44.9718 32.5045 43.4049 27.5906 36.3161C23.5303 30.4608 24.3562 22.6057 29.2737 17.5305C33.4346 13.2387 39.6708 11.9777 45.4246 13.8263C45.4513 13.8359 45.4743 13.8536 45.4903 13.8769C45.5063 13.9001 45.5145 13.9278 45.5137 13.9559C45.513 13.9841 45.5033 14.0113 45.486 14.0337C45.4688 14.056 45.4448 14.0725 45.4176 14.0806C38.2583 16.0873 34.4132 22.8944 36.1657 30.0416C37.4359 35.2165 41.1387 38.4774 46.195 39.8382C46.9446 40.0409 47.9371 40.089 48.8289 40.2333C49.0395 40.2677 49.0557 40.3421 48.8775 40.4567Z"
              fill="#F7FAFC"
            />
            <path
              d="M76.9517 19.5582C78.6275 18.1356 79.896 17.2549 80.7571 16.9158C87.428 14.2949 94.4366 17.4457 96.4107 24.4978C98.4962 31.9376 94.9693 39.8681 87.0555 41.1199C84.2284 41.568 81.5614 40.8319 79.2322 39.1996C79.2108 39.1839 79.1856 39.1748 79.1594 39.1731C79.1331 39.1715 79.1069 39.1774 79.0835 39.1903C79.0601 39.2032 79.0405 39.2225 79.0268 39.246C79.0131 39.2696 79.0059 39.2966 79.0059 39.324V49.8222C79.0059 49.8693 78.9875 49.9146 78.9549 49.9479C78.9222 49.9813 78.878 50 78.8318 50H73.3482C73.2558 50 73.1673 49.9625 73.102 49.8958C73.0367 49.8291 73 49.7387 73 49.6444V17.3177C72.9994 17.1456 73.051 16.9776 73.1477 16.8367C73.2443 16.6959 73.3814 16.589 73.5402 16.5306C73.699 16.4723 73.8718 16.4653 74.035 16.5107C74.1981 16.5561 74.3437 16.6516 74.4519 16.7843L76.6766 19.5333C76.6931 19.5534 76.7132 19.57 76.736 19.5821C76.7587 19.5943 76.7835 19.6017 76.8091 19.604C76.8347 19.6063 76.8604 19.6035 76.8849 19.5956C76.9093 19.5877 76.932 19.575 76.9517 19.5582ZM85.1235 35.1025C86.7126 35.0883 88.2307 34.3838 89.3438 33.144C90.457 31.9042 91.074 30.2307 91.0591 28.4915C91.0443 26.7523 90.3988 25.09 89.2646 23.8703C88.1304 22.6505 86.6005 21.9732 85.0114 21.9874C83.4223 22.0015 81.9042 22.706 80.7911 23.9458C79.6779 25.1856 79.0609 26.8592 79.0757 28.5983C79.0906 30.3375 79.7361 31.9998 80.8703 33.2195C82.0045 34.4393 83.5344 35.1166 85.1235 35.1025Z"
              fill="#F7FAFC"
            />
            <path
              d="M135.455 34.8473C138.224 35.2222 140.304 34.2053 141.695 31.7968C141.713 31.7652 141.738 31.7384 141.768 31.7184C141.798 31.6984 141.831 31.6857 141.867 31.6813C141.902 31.6769 141.938 31.6809 141.971 31.693C142.005 31.7051 142.035 31.725 142.06 31.7511L145.944 35.7962C146.014 35.8688 146.018 35.9461 145.958 36.0281C141.955 41.4333 135.712 42.4736 130.161 38.9416C124.347 35.2374 123.478 26.3424 127.389 20.7721C130.796 15.9187 137.703 14.4742 142.618 17.8059C143.321 18.2803 145.775 19.9989 145.937 21.0497C145.96 21.2043 145.878 21.4 145.69 21.6366C142.263 25.9734 138.82 30.2961 135.363 34.6048C135.347 34.6251 135.336 34.6498 135.331 34.6762C135.327 34.7025 135.33 34.7296 135.339 34.7545C135.348 34.7794 135.364 34.8012 135.384 34.8175C135.405 34.8339 135.429 34.8442 135.455 34.8473ZM137.838 22.1146C132.47 21.2641 129.671 26.6376 131.429 31.3891C131.474 31.5133 131.536 31.5227 131.614 31.4172L138.014 22.5644C138.042 22.5255 138.061 22.4794 138.067 22.4308C138.074 22.3821 138.068 22.3325 138.05 22.287C138.032 22.2415 138.003 22.2017 137.966 22.1714C137.929 22.1412 137.885 22.1216 137.838 22.1146Z"
              fill="#F7FAFC"
            />
            <path
              d="M68.784 17H63.216C63.0967 17 63 17.1003 63 17.224V40.776C63 40.8997 63.0967 41 63.216 41H68.784C68.9033 41 69 40.8997 69 40.776V17.224C69 17.1003 68.9033 17 68.784 17Z"
              fill="#F7FAFC"
            />
            <path
              d="M115.458 32.5572C111.534 31.4336 106.775 33.4417 103.341 30.8843C97.3216 26.4078 100.14 17.1196 107.852 17.0269C110.772 16.9936 114.884 16.9912 120.185 17.0198C120.249 17.0207 120.311 17.0463 120.356 17.091C120.401 17.1357 120.426 17.196 120.426 17.2587L120.43 22.7625C120.43 22.8448 120.397 22.9237 120.339 22.9819C120.281 23.0401 120.202 23.0728 120.12 23.0728C116.081 23.0704 112.016 23.0716 107.924 23.0763C105.987 23.0799 105.562 25.7694 107.542 26.0654C110.015 26.4364 113.885 25.8371 116.362 26.5291C121.154 27.8703 123.713 33.506 120.707 37.6971C118.655 40.5577 115.923 40.975 112.229 40.9893C108.209 41.0036 104.201 41.0036 100.205 40.9893C100.151 40.9893 100.099 40.9679 100.06 40.9298C100.022 40.8916 100 40.8399 100 40.786L100.004 35.1788C100.004 35.1145 100.03 35.0528 100.076 35.0073C100.123 34.9618 100.186 34.9363 100.252 34.9363C104.668 34.9315 109.068 34.9303 113.453 34.9327C114.947 34.9327 116.092 34.5261 115.678 32.7819C115.665 32.7288 115.637 32.6801 115.599 32.6406C115.56 32.6012 115.512 32.5724 115.458 32.5572Z"
              fill="#F7FAFC"
            />
          </svg>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-white hover:text-white/80 font-medium">
            Find Job
          </Link>
          <Link to="/" className="text-white hover:text-white/80 font-medium">
            Messages
          </Link>
          <Link to="/" className="text-white hover:text-white/80 font-medium">
            Hiring
          </Link>
          <Link to="/" className="text-white hover:text-white/80 font-medium">
            Community
          </Link>
          <Link
            to="/applied-jobs"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 font-medium shadow-md"
          >
            Applied Job
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="md:flex items-center space-x-2">
            <ThemeToggle />
            <span className="text-sm">Theme</span>
          </div>
          <Settings className="md:flex hidden w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <Bell className="md:flex hidden w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          <div className="md:flex hidden w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-400" />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-white/80 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-between items-center py-4 text-white border-t border-gray-800 mt-4 px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            <select className="appearance-none bg-[#1A202C] text-white pl-10 pr-8 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-gray-600">
              <option>Designer</option>
              <option>Developer</option>
            </select>
          </div>

          <div className="relative flex items-center">
            <MapPin className="absolute left-3 w-4 h-4 text-gray-400" />
            <select className="appearance-none bg-[#1A202C] text-white pl-10 pr-8 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-gray-600">
              <option>Work Location</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="relative flex items-center">
            <Briefcase className="absolute left-3 w-4 h-4 text-gray-400" />
            <select className="appearance-none bg-[#1A202C] text-white pl-10 pr-8 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-gray-600">
              <option>Experience</option>
              <option>1-3 years</option>
            </select>
          </div>

          <div className="relative flex items-center">
            <Calendar className="absolute left-3 w-4 h-4 text-gray-400" />
            <select className="appearance-none bg-[#1A202C] text-white pl-10 pr-8 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-gray-600">
              <option>Per month</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">Salary Range</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm">$600</span>
            <div className="relative w-32">
              <input
                type="range"
                min="600"
                max="1200"
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
            <span className="text-sm">$1200</span>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1A202C] mt-2 p-4 space-y-4 rounded-md border border-gray-700">
          <Link to="/" className="block text-gray-300 hover:text-white">
            Find Job
          </Link>
          <Link to="/" className="block text-gray-300 hover:text-white">
            Messages
          </Link>
          <Link to="/" className="block text-gray-300 hover:text-white">
            Hiring
          </Link>
          <Link
            to="/"
            className="block text-gray-300 hover:text-white"
          >
            Community
          </Link>
          <div>
            <Link
            to="/applied-jobs"
            className="bg-blue-600 text-white  py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 font-medium shadow-md"
          >
            Applied Job
          </Link>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;