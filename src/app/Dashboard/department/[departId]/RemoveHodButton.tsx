'use client'
import React from 'react';
import axios from 'axios';

interface AddFacultypProps {
  _id: string;
}

export default function RemoveHodButton({ _id }: AddFacultypProps) {
  const handleClick = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/department/removehod`, {
        departmentId: _id,
      });
      
      // Handle the response if needed
      console.log(response);
    } catch (error) {
      // Handle errors if necessary
      console.error('Error removing HOD:', error);
      alert('An error occurred while removing the HOD.');
    }
  };

  return (
    <button onClick={handleClick}>Remove Hod</button>
  );
}

