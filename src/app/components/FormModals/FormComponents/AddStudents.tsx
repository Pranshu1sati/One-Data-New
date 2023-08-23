'use client'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import ArrayInput from './ArrayInput'
import { useState } from 'react';
interface FormValues {
  firstName: string;
  lastName: string;
  address : string;
  studentId : string;
  Education: string[];
  dateofenrollment : Date;
  dateofGraduation : Date;
  course : string;
  semester : string;
  email : string;
}

export default function AddStudents() {
  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    address : "",
    studentId :"",
    Education: [],
    dateofenrollment : new Date(),
    dateofGraduation : new Date(),
    course : "",
    semester : '',
    email : "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address : Yup.string().required("This is required Information"),
    
    studentId : Yup.string().required("This is Required"),
    email : Yup.string().email("Enter Valid Email").required("This is Required"),

    Education: Yup.array().of(Yup.string().required("This is required Info")),
    course: Yup.string().required("Enter Current Course"),
    semester : Yup.string().required("Enter Current Course"),
    
  });

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
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
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    
    >
    <div>
    <Form className="px-4 rounded mx-auto max-w-3xl w-full my-8 Fields space-y-4 mt-8 ">
      <div>
        <h1 className="text-4xl font-bold">Add Students</h1>
        <p className="text-gray-600">
          Step {currentStep}
        </p>
      </div>
      
      { (currentStep===1)&&
      ( <> 
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
      { (currentStep===2)&&(<>
      <div>
        <label htmlFor="address">Email Id</label>
        <Field
          className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="email"
          name="email"
          placeholder="@gmail.com"
          id="email"
        />
        <p className="text-sm text-gray-600">
          We will use this primary email for communications
        </p>
        <ErrorMessage name="email" component="div" />
      </div>
      <div>
        <label htmlFor="address">Student Id</label>
        <Field
          className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="text"
          name="studentId"
          placeholder="007"
          id="studentId"
        />
        <p className="text-sm text-gray-600">
         The same as your ID Card
        </p>
        <ErrorMessage name="studentId" component="div" />
      </div>
      
      <div className="paragraph overflow-y-auto px-4 py-2 border-2 border-slate-500" style={{ maxHeight: '250px', maxWidth:"407px" }}>
      <FieldArray name="Education">
          {({ push, remove } : any) => (
            <ArrayInput name="Education" placeholder="Tripel MA in ITUS"/>
          )}
        </FieldArray>
        <p className="text-sm text-gray-600">
          Enter Prior Academic Qualifications 
        </p>
      </div>
      </>
      )}

    {(currentStep===3)
    &&(  <>
      <div className="flex space-x-4">
      <div className="w-1/2" >
        <label htmlFor="date">Date of Enrollment</label>
        <div >
          <Field
            min="0"
            step="0.01"
            placeholder="0.00"
            className="border text-black border-gray-400 px-4 py-2 rounded-r w-full focus:outline-none focus:border-teal-400"
            type="date"
            name="dateofenrollment"
            id="dateofenrollment"
          />
        </div>
      </div>
      <div className="w-1/2">
        <label htmlFor="dateofGraduation">Date of Graduation</label>
        <div >
          <Field
            min="0"
            step="0.01"
            placeholder="0.00"
            className="border text-black border-gray-400 px-4 py-2 rounded-r w-full focus:outline-none focus:border-teal-400"
            type="date"
            name="dateofGraduation"
            id="dateofGraduation"
          />
        </div>
      </div>
      </div>
   
    <div>
        <label htmlFor="address">Current Course</label>
        <Field
          className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="text"
          name="course"
          placeholder="ITUS"
          id="course"
        />
        <ErrorMessage name="course" component="div" />
    </div>
    <div>
    
        <label htmlFor="address">Current Semester</label>
        <Field
          className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="text"
          name="semester"
          placeholder="12th"
          id="semester"
        />
        <ErrorMessage name="semester" component="div" />
    </div>
    </>
    )}
      <div className="flex space-x-4"> 
      <button onClick={prevStep} className='bg-blue-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover:bg-blue-500 transition duration-2oo ease-in-out'>Back</button> 
      {(currentStep!=3) ?(<button onClick={nextStep} className='bg-blue-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover:bg-blue-500 transition duration-2oo ease-in-out'>Next</button>) :
      
      (<button type="submit" className='bg-green-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover:bg-green-500 transition duration-2oo ease-in-out'>Submit</button>)}
      </div> 
    </Form>
    </div>
</Formik>
    
  )
}
