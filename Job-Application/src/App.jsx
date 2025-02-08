import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import Navbar from './components/Navbar';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import AppliedJobs from './pages/AppliedJobs';

export default function App() {
  return (
    <JobProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/applied-jobs" element={<AppliedJobs />} />
        </Routes>
      </Router>
    </JobProvider>
  );
}