import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useJobContext } from '../context/JobContext'; 

export default function JobForm({ jobId, onSubmit }) {
  const { applyForJob } = useJobContext();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      resume: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      resume: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      applyForJob({ ...values, jobId });
      formik.resetForm();
      alert("Job submitted successfully")
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="w-full p-2 border rounded-lg"
        />
        {formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full p-2 border rounded-lg"
        />
        {formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300">Resume</label>
        <textarea
          name="resume"
          onChange={formik.handleChange}
          value={formik.values.resume}
          className="w-full p-2 border rounded-lg"
        />
        {formik.errors.resume && <p className="text-red-500">{formik.errors.resume}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Submit
      </button>
    </form>
  );
}
