import { useJobContext } from '../context/JobContext';

export default function AppliedJobs() {
  const { appliedJobs } = useJobContext();
  if (!appliedJobs) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="space-y-6 py-40 px-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Applied Jobs</h2>
      {appliedJobs.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">No jobs applied yet.</p>
      ) : (
        appliedJobs.map((application, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">Applicant Details:</h3>
            <p className="mt-2"><strong>Name:</strong> {application.name}</p>
            <p className="mt-1"><strong>Email:</strong> {application.email}</p>
            <p className="mt-1"><strong>Resume:</strong> {application.resume}</p>
          </div>
        ))
      )}
    </div>
  );
}
