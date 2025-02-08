import { useParams } from 'react-router-dom';
import JobForm from '../components/JobForm';
import { JOBS } from '../utils/constants';
import { useJobContext } from '../context/JobContext';

export default function JobDetails() {
  const { id } = useParams();
  const job = JOBS.find((job) => job.id === parseInt(id));
  const { applyForJob } = useJobContext();

  if (!job) {
    return <div className="container mx-auto p-4">Job not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
      <JobForm jobId={job.id} onSubmit={applyForJob} />
    </div>
  );
}