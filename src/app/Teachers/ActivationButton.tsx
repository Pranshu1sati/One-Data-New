'use client'
import React from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
// import { BsPersonFillX, BsFillPersonCheckFill } from "react-icons/bs";

interface ActivateButtonProps {
  teacherId: string;
  isActive: boolean;
}
const ActivateButton: React.FC<ActivateButtonProps> = ({ teacherId, isActive }) => {
  const router = useRouter();
  const handleToggle = () => {
    axios.post(
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
    router.refresh();
    router.push("/Teachers");
  };

  return (
    <button id="activate" onClick={handleToggle}>
  {isActive ? "❌" : "✓"}
</button>
  );
};

export default ActivateButton;
