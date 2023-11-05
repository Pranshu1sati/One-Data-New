let Qualifications: Array<string>;
import Image from "next/image";
// Qualifications = ['Btech', 'Mtech', 'Doc']; 
import * as React from "react";

export default function Profile({ params }: any) {
  const {id} = params;
  return (
    <>
    <div className="flex items-center justify-center">
      <div className="bg-white w-1/3 mt-10 rounded-lg">
        <div className="flex items-center justify-center pt-10 flex-col">
          <Image src={`${process.env.NEXT_PUBLIC_API}/teacher/image/${id}`} className="rounded-full w-32" alt="Profile" />
          <h1 className="text-gray-800 font-bold text-xl mt-5">Babu Rao</h1>
          <h1 className="text-gray-500 text-sm">Role</h1>
          <h1 className="text-gray-500 text-sm p-4 text-center">
            Ye Babu Rao Ka Style Hai!
          </h1>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-md uppercase text-gray-900 font-bold ">Designation</h1>
            <h1 className="text-xs text-yellow-500">Professor</h1>
          </div>
          <div>
            <button className="text-md text-white border-green-2 py-1 px-2 bg-green-500 font-bold">Add Research Papers &#8314; </button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-md uppercase text-gray-900 font-bold ">Date of Joining</h1>
            
          </div>
          <div>
            <button className="text-md uppercase text-gray-600 font-semibold ">12/6/2023</button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-md uppercase text-gray-900 font-bold ">Number of Research Papers</h1>
            
          </div>
          <div>
            <button className="text-md uppercase text-gray-600 font-semibold ">1000</button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-md uppercase text-gray-900 font-semibold ">Department</h1>
            
          </div>
          <div>
            <button className="text-md uppercase text-gray-600 font-semibold ">CSIT</button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-md uppercase text-gray-900 font-semibold ">Qualifications</h1>
            
          </div>
          <div>
          {Qualifications.map((qualification, index) => (
              <div key={index} className="text-md uppercase text-gray-600 font-semibold">
                {qualification}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-md uppercase text-gray-900 font-semibold ">Address</h1>
            
          </div>
          <div>
            <button className="text-md uppercase text-gray-600 font-semibold ">221b Baker Street</button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 mb-6 flex-col">
          <h1 className="text-xs text-gray-500">Should I Add Buttons here for Switching the roles and deleting the users ?</h1>

        </div>
      </div>
    </div>
    </>
  );
}
