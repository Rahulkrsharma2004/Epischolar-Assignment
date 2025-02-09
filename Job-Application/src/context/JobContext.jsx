import { createContext, useContext, useState, useEffect } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [appliedJobs, setAppliedJobs] = useState(() => {
    const savedJobs = localStorage.getItem('appliedJobs');
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  const applyForJob = (application) => {
    const updatedJobs = [...appliedJobs, application];
    setAppliedJobs(updatedJobs);
    localStorage.setItem('appliedJobs', JSON.stringify(updatedJobs));
  };

  useEffect(() => {
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  return (
    <JobContext.Provider value={{ appliedJobs, applyForJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
