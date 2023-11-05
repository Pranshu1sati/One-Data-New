import AddQualificationsButton from "../../../../Teachers/AddQualificationsButton";
import * as React from 'react'
import UploadFiles from "../../../../Teachers/UploadFiles";
import Image from "next/image";
let Qualifications: Array<string>;
Qualifications = ['Btech', 'Mtech', 'Doc']; 

const getTeacherData = async(teacherId : string)=>{
  try{
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/teacher/info/${teacherId}` , {cache: 'no-store',})
  const data = await res.json()
  console.log(data);
  return data;
}
catch(err){
  // alert("An Error Occured")
  return {data: []};
}
}

export default async function Profile({ params }: any) {
  
const {id} = params;
console.log(id);
const teacherData = await getTeacherData(id);
console.log(teacherData)
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white  mt-10 rounded-lg w-full">
        <div className="flex items-center justify-center pt-10 flex-col">
        <Image src={`${process.env.NEXT_PUBLIC_API}/teacher/image/${id}` || "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} className="rounded-full w-32" alt="Profile" />
          <h1 className="text-gray-800 font-bold text-xl mt-5">{teacherData.name}</h1>
          <h1 className="text-gray-500 text-sm">{(teacherData.isHod) ? "Hod" : "Faculty"}</h1>
          <h1 className={`text-gray-500 text-sm p-4 text-center ${teacherData.active ? "text-green-500" : 'text-red-500'}`}>
            {teacherData.active ? "Active" : "Deactivated"}
          </h1>
        </div>
        <div className="grid grid-cols-3 p-4">
          <div className="col-span-1">
            <h1 className="text-md  uppercase text-gray-900 font-bold ">Designation</h1>
            <h1 className="text-xs text-yellow-500">{teacherData.designation}</h1>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <button className="text-md text-white border-green-2 py-1 px-2 bg-green-500 font-bold">Add Research Papers &#8314; </button>
          </div>
        </div>
        <div className="grid grid-cols-3 p-4">
          <div  className="col-span-1">
            <h1 className="text-md uppercase text-gray-900 font-bold ">Date of Joining</h1>
            
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <button className="text-md uppercase text-gray-600 font-semibold ">12/6/2023</button>
          </div>
        </div>
        <div className="grid grid-cols-3 p-4">
          <div  >
            <h1 className="text-md uppercase text-gray-900 font-bold ">Number of Research Papers</h1>
            
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <button className="text-md uppercase text-gray-600 font-semibold ">1000</button>
          </div>
        </div>
        <div className="grid grid-cols-3 p-4">
          <div className="col-span-1">
            <h1 className="text-md uppercase text-gray-900 font-semibold ">Department</h1>
            
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center">
            <button className="text-md uppercase text-gray-600 font-semibold ">CSIT</button>
          </div>
        </div>
        <div className="grid grid-cols-3 p-4">
          <div className="col-span-1">
            <h1 className="text-md uppercase text-gray-900 font-semibold ">Qualifications</h1>
            
          </div>
          <div className="col-span-2  grid grid-cols-2">
          {teacherData.qualification.map((qualification : any, index : number) => (
            <>
              <div key={index} className="text-md uppercase text-gray-600 font-semibold my-1">
                {qualification.description}
              </div>
              <div className="text-md  font-semibold">
                Upload Degree Button
              </div>
              </>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 p-4">
          <div className="col-span-1">
            <h1 className="text-md uppercase text-gray-900 font-semibold ">Address</h1>
            
          </div >
          <div className="col-span-2 flex flex-col justify-center items-center">
            <button className="text-md uppercase text-gray-600 font-semibold ">221b Baker Street</button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 mb-4 flex-col">
          <h1 className="text-xs text-gray-500">Should I Add Buttons here for Switching the roles and deleting the users ?</h1>

        </div>
        <div className="flex items-center justify-center pt-2 flex-col">
          <AddQualificationsButton teacherId={teacherData._id} />
          <UploadFiles id={id}/>
        </div>
      </div>
    </div>
  );
}
