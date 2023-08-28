'use client'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import ArrayInput from './ArrayInput'
import { useState } from 'react';
import React from 'react';
import { toast } from 'react-hot-toast';
import SpinnerParent from '../../SpinnerParent';
import axios from 'axios';
interface FormValues {
  firstName: string;
  lastName: string;
  address : string;
  qualifications: string[];
  date : Date;
  email : string,
  password : string,
  department : string,
  empId : string,
}

export default function AddFaculty() {
  const [loading, setIsLoading] = useState(false)
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    address : "",

    qualifications: [],
    date : new Date(),
    email : '',
    password : '',
    department : '',
    empId : ""
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address : Yup.string().required("This is required Information"),
    qualifications: Yup.array().of(Yup.string().required("This is required Info")),
    email : Yup.string().email("Enter Valid Email").required("This is required Information"),
    password : Yup.string().min(5,'Password should be at least 5 characters long').required("This is required info"),
    empId : Yup.string().required("This is required ")
  });

  const handleSubmit = async (values: FormValues) => {
    
    //alert(JSON.stringify(values, null, 2));
    try{
      setIsLoading(true)
      // console.log("req send add teacher")
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/teacher/register`, values)
      // setIsLoading(true)
      //axious.postreq()
      toast.success("Registration seccesfull")
    }
    catch(error: any){
      toast.error(error.response.data.message)
    }
    finally{
      setIsLoading(false)
    }
  };
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => {
      const nextStep = prevStep + 1;
      return Math.min(nextStep, 3);
    });
  };
  
  const prevStep = () => {
    setCurrentStep((prevStep) => {
      const previousStep = prevStep - 1;
      return Math.max(previousStep, 1);
    });
  };
  return (
    <>
    
   { loading &&(<SpinnerParent/>) }
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    ><div>
    <Form className="px-4 rounded mx-auto max-w-3xl w-full my-8 Fields space-y-4 mt-8">
      <div>
        <h1 className="text-4xl font-bold">Add Accounts</h1>
        <p className="text-gray-600">
          Step {currentStep}
        </p>
      </div>
      {currentStep === 1 &&
      (<>
      
        <div >
          <label htmlFor="firstName">First Name</label>
          <Field
            className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
            type="text"
            name="firstName"
            placeholder="Lord"
            id="firstName"
          />
          <ErrorMessage name="firstName" component="div" />
        </div>
        <div >
          <label htmlFor="lastName">Last Name</label>
          <Field
            className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
            type="text"
            name="lastName"
            placeholder="Puneet"
            id="lastName"
          />
          <ErrorMessage name="lastName" component="div" />
        </div>
      
      <div>
        <label htmlFor="address">Current Address</label>
        <Field
          className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="text"
          name="address"
          placeholder="221B Baker Street"
          id="address"
        />
        <p className="text-sm text-gray-600">
          We will use this as your home address
        </p>
        <ErrorMessage name="address" component="div" />
      </div>
      </>
      )}
      { (currentStep==2)&&
      (<>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="email"
          name="email"
          placeholder="221B Baker Street"
          id="email"
        />
        <p className="text-sm text-gray-600">
          We will use this as primary email for communication
        </p>
        <ErrorMessage name="email" component="div" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="password"
          name="password"
          placeholder="221B Baker Street"
          id="password"
        />
        <ErrorMessage name="password" component="div" />
      </div>
      <div>
        <label htmlFor="password">Confirm Pssword</label>
        <Field
          className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="password"
          name="password"
          placeholder="221B Baker Street"
          id="password"
        />
        <ErrorMessage name="password" component="div" />
      </div>
      </>
      )}
        {(currentStep==3) &&(<>
          <div>
        <label htmlFor="empId">Emp Id</label>
        <Field
          className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="text"
          name="empId"
          placeholder="007"
          id="empId"
        />
        <p className="text-sm text-gray-600">
          We will use this as primary email for communication
        </p>
        <ErrorMessage name="empId" component="div" />
      </div>
      <div className="paragraph overflow-y-auto px-4 py-2 border-2 border-slate-500" style={{ maxHeight: '250px', maxWidth:"407px" }}>
      <FieldArray name="qualifications" >
          {({ push, remove } : any) => (
            <ArrayInput name="qualifications" placeholder="Tripel MA in ITUS"/>
          )}
        </FieldArray>
        <p className="text-sm text-gray-600">
          Enter the academic qualifications 
        </p>
      </div>
      <div>
        <label htmlFor="date">Date of Joining</label>
        <div className="flex w-1/2">
          <Field
            min="0"
            step="0.01"
            placeholder="0.00"
            className="border text-black border-gray-400 px-4 py-2 rounded-r w-full focus:outline-none focus:border-teal-400"
            type="date"
            name="date"
            id="date"
          />
        </div>
      </div>
      </>)
      }

     
      
      <div className="flex space-x-4"> 
      <button onClick={prevStep} className='bg-blue-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover: bg-blue-500 transition duration-2oo ease-in-out'>Back</button> 
      {(currentStep!=3) ?(<button onClick={nextStep} className='bg-blue-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover: bg-blue-500 transition duration-2oo ease-in-out'>Next</button>) :
      
      (<button type="submit" className='bg-green-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover: bg-green-500 transition duration-2oo ease-in-out'>Submit</button>)}
      </div> 
    </Form>
    </div>
    </Formik>
  
  </>
  )
}
