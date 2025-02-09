import { useJobContext } from '../context/JobContext';

export default function AppliedJobs() {
  const { appliedJobs } = useJobContext();
  if (!appliedJobs) return <div>Loading...</div>;
  console.log(JSON.stringify(appliedJobs,1));

  return (
    <div className="space-y-4 py-40">
      <h2 className="text-xl font-bold">Applied Jobs</h2>
      {appliedJobs.length === 0 ? (
        <p>No jobs applied yet.</p>
      ) : (
        appliedJobs.map((application, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            {/* <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Job Details:
            </h3>
            <p><strong>Job Title:</strong> {application.title}</p>
            <p><strong>Company:</strong> {application.company}</p>
            <p><strong>Location:</strong> {application.location}</p>
            <p><strong>Salary:</strong> {application.salary}</p>
            <p><strong>Job Type:</strong> {application.jobType}</p>
            <p><strong>Rating:</strong> {application.rating} / 5.0</p> */}

            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
              Applicant Details:
            </h3>
            <p><strong>Name:</strong> {application.name}</p>
            <p><strong>Email:</strong> {application.email}</p>
            <p><strong>Resume:</strong> {application.resume}</p>
          </div>
        ))
      )}
    </div>
  );
}
