'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import { BsPersonFillX, BsFillPersonCheckFill } from "react-icons/Bs";
import Spinner from "../components/Spinner";
import { toast } from "react-hot-toast";

interface ActivateButtonProps {
  teacherId: string;
  isActive: boolean;
}
const ActivateButton: React.FC<ActivateButtonProps> = ({ teacherId, isActive }) => {
  console.log(isActive)
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleToggle = async() => {
    try{
    setIsLoading(!isLoading)
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/teacher/activate`,
      {
        teacherId,
        option: !isActive,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    toast.success(res.data.message)
    router.refresh();
    // router.push("/Teachers");
  }
    catch(error : any){
      toast.error(error.res.data.message)
    }
    finally{
      setIsLoading(false);
    }
  };

  return (
    <button id="activate" onClick={handleToggle}>
      
      { isLoading ? <Spinner/> : isActive?  <BsFillPersonCheckFill /> :<BsPersonFillX />}
    </button>
  );
};

export default ActivateButton;
