"use client"
import Link from 'next/link';
import React from 'react';

// Import the Department type
interface Department {
  _id: string;
  name: string;
  HOD:{
    _id :string,
    name: string
  }
  __v: number;
}

// Use the Department type in the React.FC type annotation
const DepartmentList: React.FC<{ department: Department }> = ({ department }) => {
  return (
    <Link href={`/department/${department._id}`} className='grid grid-cols-6 my-2 text-black font-bold text-lg'>
      {/* Use the data from the department prop to populate the component */}
      <h3 className='col-span-2'>{department.name}</h3>
      <h3 className='text-center'>{department.HOD?department.HOD.name : <div>Not Set</div> }</h3>

      {/* Add other data as needed */}
      <h3 className='text-center'>50</h3>
      <h3 className='text-center'>250</h3>
      <h3 className='text-center'>2000</h3>
    </Link>
  );
};

export default DepartmentList;
