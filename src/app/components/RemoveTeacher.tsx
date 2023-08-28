'use client'
import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation'
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Spinner from './Spinner';
import { toast } from 'react-hot-toast';
import SpinnerParent from './SpinnerParent';
// import { message } from 'antd';

interface FormValues {
  teacherId: string;
  departmentId: string;
}

interface AddFacultyProps {
  _id: string;
}

const RemoveTeacher: React.FC<AddFacultyProps> = ({ _id }) => {
  const [loading , setIsLoading] = useState(false)
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API;
  const [teachers, setTeachers] = useState<any>([]);

  useEffect(() => {
    async function fetchTeachers() {
      try {
        const response = await axios.get('http://localhost:8001/api/teacher/info');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    }

    fetchTeachers();
  }, []);

  const initialValues: FormValues = {
    teacherId: '',
    departmentId: _id, // You should use the passed department ID
  };

  const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    try {
      setIsLoading(true)
      const response = await axios.post(`${api}/department/removeteacher`, values);
      // console.log('Response:', response);
      toast.success(response.data.message)
      // Handle success if needed
      resetForm();
      router.refresh();
    } catch (error : any) {

      console.error('Error submitting form:', error);
      // Handle error if necessary
      // alert('An error occurred while submitting the form.');
      toast.error(error.response.data.message)
    }
    finally{
      setIsLoading(false)
    }
  };

  const validationSchema = Yup.object({
    teacherId: Yup.string().required('Teacher is required'),
    departmentId: Yup.string().required('Department is required'),
  });

  return (
    <div>
      {loading &&<SpinnerParent/>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="px-4 rounded mx-auto max-w-3xl w-full my-8 Fields space-y-4 mt-8 h-full">
          <div>
            <h1 className="text-4xl font-bold">Add HOD</h1>
            <p className="text-gray-600">This will Assign HOD</p>
          </div>

          <div className="flex flex-col w-full h-full">
            <label htmlFor="teacherId">Select Teacher</label>
            <Field as="select" id="teacherId" name="teacherId">
              <option value="">Select a teacher</option>
              {teachers.map((teacher: any) => (
                <option key={teacher._id} value={teacher._id}>
                  {teacher.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name="teacherId" component="div" className="text-red-500" />
             <button
              type="submit"
              className="bg-green-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover:bg-green-500 transition duration-2oo ease-in-out mt-auto"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RemoveTeacher;
