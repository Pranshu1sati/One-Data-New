import React from "react";
import TeachersList from "./TeachersList";
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
export async function getTeachers() {
    try{
    const res = await fetch("http://localhost:8001/api/teacher/info", {cache: 'no-store',} )
    const data = await res.json();
    return data
}
    catch(err){
        console.log(err)
        // alert("There was an error")
        return {
            data: [], // Return an empty array or handle the error as needed
        };
    }
  
}
export default async function page() {
    const data = await getTeachers();
    console.log(data) 
  return (
    <>
    <article className='w-full rounded-lg p-5 bg-white text-black'>
      <div className='w-full flex'>
        <div>
          <h1 className='font-extrabold text-4xl'>Teacehrs</h1>
          <h2 className='font-semibold text-[#83c5be]'>{data.length}</h2>
        </div>
        <div className='flex ml-auto'>
          <div className='font-extrabold flex flex-col items-center mx-4 text-xl'>
            <div>10</div>
            <div className='font-semibold text-[#83c5be]'>departments</div>
          </div>
          <div className='font-extrabold flex flex-col items-center text-xl'>
            <div>113</div>
            <div className='font-semibold text-[#83c5be]'>teachers</div>
          </div>
        </div>
      </div>
      <section className='w-full my-3'>
        <hr />
        <div id='teach-header' className='grid grid-cols-6 my-2 text-[#83c5be] font-semibold text-lg'>
          <h3 className='col-span-2'>Name</h3>
          <h3 className='text-center'>Deactivate</h3>
          <h3 className='text-center'>Make HOD</h3>
          <h3 className='text-center'>Papers</h3>
        </div>
        
        <hr />
       
        {data.map((data : any) => (
          <React.Fragment key={data._id}>
            <TeachersList teacher={data }/>
            <hr />
          </React.Fragment>
        ))}
    
      </section>
    </article>
    </>

  )
}