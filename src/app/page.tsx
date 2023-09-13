'use client'
import React from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useState } from 'react'
import { toast } from 'react-hot-toast'

import * as Yup from 'yup';
import SpinnerParent from './components/SpinnerParent';
import { useRouter } from 'next/navigation';

const validationSchema = Yup.object().shape({
  employeeId: Yup.string()
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

const LoginForm: React.FC = () => {
  const router = useRouter()
  interface FormValues {
    employeeId: string;
    password: string;
  }
  const [loading, setLoading] = useState(false);
  const handleLogin = async (values: FormValues, { setSubmitting }: any) => {
    try {
      setLoading(true);
      // Make a POST request to your login API with the user's credentials

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/auth/login`, values, { withCredentials: true });
      console.log(response);

      toast.success(response?.data.message)
      router.push("/dashboard")
      // console.log(response.data); // Handle the response data as needed
    } catch (error: any) {
      // console.error('Login failed:', error);
      console.log(error);

      toast.error(error.response?.data.message)
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {loading && <SpinnerParent />}
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Formik
          initialValues={{ employeeId: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <Field
                    id="email-address"
                    name="employeeId"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                  <ErrorMessage name="employeeId" component="div" className="text-red-500 text-xs" />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
