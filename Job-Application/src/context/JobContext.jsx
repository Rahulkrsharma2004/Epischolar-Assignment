import { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const applyForJob = (application) => {
    setAppliedJobs((prevAppliedJobs) => [...prevAppliedJobs, application]);
  };

  return (
    <JobContext.Provider value={{ appliedJobs, applyForJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
