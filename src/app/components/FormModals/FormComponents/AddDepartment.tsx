import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
interface FormValues {
    name: string;
  }
export default function AddDepartment() {
  const api=process.env.NEXT_PUBLIC_API;
    const initialValues: FormValues = {
        name: ''
      };
      const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        // Send the form data to the backend API
        await axios.post(`${api}/department/register`, values)
          .then((response:any) => {
            // Handle the API response if needed
            console.log(response);
            // alert('Form data submitted successfully!');
            resetForm();
          })

          .catch((error:any) => {

            // Handle errors if necessary
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
          });
      };

      const validationSchema = Yup.object({
        name: Yup.string().required('Department Name is required'),
        // hodId: Yup.string().required('HOD ID is required'),
      });
    
    
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    <div>
      <Form className="px-4 rounded mx-auto max-w-3xl w-full my-8 Fields space-y-4 mt-8">
        <div>
          <h1 className="text-4xl font-bold">Add Departments</h1>
          <p className="text-gray-600">This will create a new Department</p>
        </div>

       
          <>
            <div>
              <label htmlFor="name">Department Name</label>
              <Field
                className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                type="text"
                name="name"
                placeholder="Department of Computer Science"
                id="name"
              />
              <ErrorMessage name="name" component="div" />
            </div>

            {/* <div>
              <label htmlFor="hodId">HOD ID</label>
              <Field
                className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                type="text"
                name="hodId"
                placeholder="HOD123"
                id="hodId"
              />
              <ErrorMessage name="hodId" component="div" />
            </div> */}
          </>
       
          <button type="submit" className='bg-green-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover:bg-green-500 transition duration-2oo ease-in-out'>Submit</button>
      </Form>
    </div>
  </Formik>
  )
}