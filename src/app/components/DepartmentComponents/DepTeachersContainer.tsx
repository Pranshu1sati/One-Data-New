"use client"
import React from 'react';
import ChangeHodButton from '../FormModals/changeHod/ChangeHodButton';
import Link from 'next/link';
import ActivateButton from '@/app/Teachers/ActivationButton';

interface Department {
    _id: string;
    name: string;
    HOD : any;
}
interface Teacher {
    _id: string;
    name: string;
    __v: number;
    hod: string | undefined;
    active : boolean
    designation : string
}

interface DepartmentContainerProps {
    teachers: Teacher[];
    department: Department;
}

const DepTeachersContainer: React.FC<DepartmentContainerProps> = ({ teachers, department }) => {
    // console.log(department,"i almdflsm");
    // const DepTeachersContainer= () => {
    // console.log(departments,"here is the props")

    return (
        <article className='w-full rounded-lg p-5 bg-white text-black'>
            <div className='w-full flex'>
                <div>
                    <h1 className='font-extrabold text-3xl'>{department.name}</h1>
                    <h2 className='font-semibold text-[#83c5be]'>{teachers.length} teachers</h2>
                    <div className='grid grid-cols-4'>
                    {department.HOD? (
              <h3 className='font-bold text-[#83c5be]'>{department.HOD.name}</h3>
            ) : (
              <p className='text-black'>No HOD assigned</p>
            )}
                        <h3 className='font-bold text-[#83c5be]'>Hod contact</h3>
                        <ChangeHodButton _id={department._id}/>
                        <Link href={`events/${department._id}`} className=''>Events</Link>
                    </div>
                </div>

                <div className='flex ml-auto'>
                    <div className='font-extrabold flex flex-col items-center mx-4 text-xl'>
                        <div>40</div>
                        <div className='font-semibold text-[#83c5be]'>papers</div>
                    </div>
                    <div className='font-extrabold flex flex-col items-center text-xl'>
                        <div>{teachers.length}</div>
                        <div className='font-semibold text-[#83c5be]'>teachers</div>
                    </div>
                </div>
            </div>
            <section className='w-full my-3'>
                <hr />
                <div id='department-header' className='grid grid-cols-6 my-2 text-[#83c5be] font-semibold text-lg'>
                    <h3 className='col-span-2'>Name</h3>
                    <h3 className='text-center'>Joining Date</h3>
                    <h3 className='text-center'>Designation</h3>
                    <h3 className='text-center'>Papers</h3>
                    <h3 className='text-center'>Acticvation</h3>
                </div>
                <hr />
                <div
            style={{ maxHeight: "400px", overflowY: "auto" }} // Adjust the height as needed
          >
                {teachers.map((teacher) => (
                    <React.Fragment key={teacher._id}>
                        {/* <DepartmentList teacher={teacher}/> */}
                        <div className='grid grid-cols-6 my-2 text-black font-bold text-lg'>       
                        <Link href={`/Teachers/profile/${teacher._id}`} className="col-span-2" >
                                <h3 className='col-span-2'>{teacher.name}</h3>
                                </Link>
      
                        <h3 className='text-center'>12/12/12</h3>
                        <h3 className='text-center'>{teacher.designation}</h3>
                        <h3 className='text-center'>2000</h3>
                        <h3 className='text-center'><ActivateButton teacherId={teacher._id} isActive ={teacher.active}/></h3>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            </section>
        </article>
    );
};

export default DepTeachersContainer;
