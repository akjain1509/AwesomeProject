import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  jobTitle: Yup.string().required('Job Title is required'),
  salary: Yup.number()
    .typeError('Salary must be a number')
    .required('Salary is required'),
});

export default validationSchema;
