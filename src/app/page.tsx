import React from "react";
import { PiStudentFill, PiChalkboardTeacherBold } from "react-icons/Pi";
import { CgProfile } from "react-icons/cg";
import { BsFillBuildingFill, BsFillCloudUploadFill } from "react-icons/Bs";
import DepartmentContainer from "./components/DashboardComponents/DepartmentContainer";
import AddStudentsButton from "./components/addStudents/AddStudentsButton";
import AddDepartmentButton from "./components/addDepartment/AddDepartmentButton";
import UploadFiles from "./components/UploadFiles";
import AddFacultyButton from "./components/FormModals/addFaculty/AddFacultyButton";

interface Department {
  id: number;
  name: string;
  hod: string;
  // Add other properties as needed
}

interface DashboardProps {
  departments: Department[];
}
export async function getDepartment() {
  // console.log("I am running");
  try {
    // Make the API call here and fetch the data from the API
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/department/info`, { cache: 'no-store' });
    const data = await res.json();

    // Log the data to the console to inspect the response
    // console.log("API Response:", data);

    // Pass the fetched data as props to the component
    return {
        departments: data, // You can pass any data you fetched from the API here
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
        departments: [], // Return an empty array or handle the error as needed
    };
  }
}

const Home: React.FC<DashboardProps> = async() => {
  const apiEnd = process.env.NEXT_PUBLIC_API;
  // console.log(departments);
  console.log(apiEnd);
  const {departments}=await getDepartment();
  const {data,count}=departments;

  // const data=departments;
  console.log(departments,data,"data found");
  // const [loading,setLoading]=useState<Boolean>(true);
  return (
    <article className=" p-5 w-full">
      <DepartmentContainer departments={data} />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="button bg-blue-500 text-white p-4 rounded-lg flex items-center">
          <PiChalkboardTeacherBold className="text-2xl mr-2" />
          <span>
            <AddFacultyButton/>
          </span>
        </div>
        <div className="button bg-green-500 text-white p-4 rounded-lg flex items-center">
          <PiStudentFill className="text-2xl mr-2" />
          <span>
            <AddStudentsButton />
          </span>
        </div>
        <div className="button bg-red-500 text-white p-4 rounded-lg flex items-center">
          <BsFillBuildingFill className="text-2xl mr-2" />
          <span>
            <AddDepartmentButton />
          </span>
        </div>
        <div className="button bg-sky-500 text-white p-4 rounded-lg flex items-center">
          <BsFillCloudUploadFill className="text-2xl mr-2" />
          <span>
            <UploadFiles route={"teacher"}/>
          </span>
        </div>
        <div className="button bg-sky-500 text-white p-4 rounded-lg flex items-center">
          <BsFillCloudUploadFill className="text-2xl mr-2" />
          <span>
          <UploadFiles route={"department"}/>
          </span>
        </div>
        <div className="button bg-sky-500 text-white p-4 rounded-lg flex items-center">
          <BsFillCloudUploadFill className="text-2xl mr-2" />
          <span>
          <UploadFiles route={"student"}/>
          </span>
        </div>
      </div>
    </article>
  );
};



export default Home;
