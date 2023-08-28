'use client'
import React from 'react';
import axios from 'axios';
import {useState} from 'react'
import { toast } from 'react-hot-toast';
import Spinner from './Spinner';
interface AddFacultypProps {
  _id: string;
}

export default function RemoveHodButton({ _id }: AddFacultypProps) {
  const [loading , setIsLoading] = useState(false)
  const handleClick = async () => {
    try {
      setIsLoading(!loading)
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/department/removehod`, {
        departmentId: _id,
      });
      toast.success(response.data.message)
      // Handle the response if needed
      console.log(response);
    } catch (error :any) {
      // Handle errors if necessary
      console.error('Error removing HOD:', error);
      // alert('An error occurred while removing the HOD.');
      toast.error(error.response.data.message)
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <>
    {loading ? (
      <Spinner />   
    ) : (
      <button onClick={handleClick}>Remove Hod</button>
    )}
    </>
  );
}

