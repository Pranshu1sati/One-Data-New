import React from "react";
import Link from "next/link";
import axios from "axios";
import {BsPersonFillX, BsFillPersonCheckFill} from 'react-icons/Bs'
import ActivateButton from "./ActivationButton";
interface Teacher {
    isHod: boolean;
    view: boolean;
    active: boolean;
    _id: string;
    name: string;
    designation: string;
    email: string;
    departments: string[]; // Assuming departments is an array of strings
    __v: number;
  }
  interface TeachersListProps {
    teacher: Teacher;
  }


  const TeachersList: React.FC<TeachersListProps> = ({ teacher }) => {
    // Implement the rendering of the teacher details here
    return (
      <div className='grid grid-cols-6 my-2 text-black font-bold text-lg'>       
       <Link href={`/Teachers/profile/${teacher._id}`} className="col-span-2" >
       <h3 >{teacher.name}</h3>
       </Link>
      
      <h3 className='text-center'><ActivateButton teacherId={teacher._id} isActive={teacher.active} /></h3>
      <h3 className='text-center'><button>Set</button></h3>
      <h3 className='text-center'>1000</h3>
       
      </div>
    );
  };
  
  export default TeachersList;