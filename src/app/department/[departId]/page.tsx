import * as React from "react";
import ChangeViewButton from '@/app/components/ChangeViewButton';
import RemoveHodButton from '@/app/components/RemoveHodButton';
import AddFacultyButton from '@/app/components/AddFacultyButton';
import DepTeachersContainer from "@/app/components/DepartmentComponents/DepTeachersContainer";
import RemoveTeacherButton from "@/app/components/RemoveTeacherButton";

const getDepartment = async (departId: string) => {
  try {
    console.log(departId);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/department/info/${departId}`, { cache: 'no-store' });
    const data = await res.json();
    return { department: data }
  }
  catch (error) {
    console.log(error + "Some error occred");
    return { department: null }
  }
}
export default async function page({ params }: any) {
  // console.log(params);
  const { departId } = params;
  console.log(departId);
  const { department } = await getDepartment(departId);
  console.log(department);
  const { teachers } = department;
  console.log(teachers, "teacher");
  return (
    <main className="mt-5">
      <DepTeachersContainer teachers={teachers} department={department} />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="button bg-blue-500 text-white p-4 rounded-lg flex items-center">
          {/* <PiChalkboardTeacherBold className="text-2xl mr-2" /> */}
          <span>
            <AddFacultyButton _id={department._id} />
          </span>
        </div>
        <div className="button bg-red-500 text-white p-4 rounded-lg flex items-center">
          {/* <PiStudentFill className="text-2xl mr-2" /> */}
          <span>
            <RemoveHodButton _id={department._id} />
          </span>
        </div>
        <div className="button bg-yellow-500 text-white p-4 rounded-lg flex items-center">
          {/* <BsFillBuildingFill className="text-2xl mr-2" /> */}
          <span>

            <RemoveTeacherButton _id={department._id} />
          </span>
        </div>
        <div className="button bg-orange-500 text-white p-4 rounded-lg flex items-center">
          {/* <BsFillBuildingFill className="text-2xl mr-2" /> */}
          <span>

            <ChangeViewButton _id={department._id} />
          </span>
        </div>
      </div>
    </main>
  )
}
