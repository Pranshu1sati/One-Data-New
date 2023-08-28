'use client'
import React from "react";
import {
  MdDashboard,
  MdEqualizer,
  MdSettings,
  MdMoreHoriz,
  MdExitToApp,
  MdIntegrationInstructions
} from "react-icons/md";
import { IoMdArrowDroprightCircle } from 'react-icons/Io'
import { HiSwitchHorizontal } from 'react-icons/hi'
import { PiStudentBold } from 'react-icons/Pi'
import { CgProfile } from "react-icons/cg";
export default function SideBar() {
  return (
    <div className=" rounded-md shadow-md  px-2">
      <div className="flex flex-col justify-start item-center">
        <div className=" my-4 border-b border-gray-100 pb-4">
          <SidebarMenuItem Icon={MdDashboard} title="Dashboard" />
          <SidebarMenuItem Icon={CgProfile} title="AddFaculty" />
          <SidebarMenuItem Icon={HiSwitchHorizontal} title="ChangeRoles" />
          <SidebarMenuItem Icon={MdEqualizer} title="Analytics" />
          <SidebarMenuItem Icon={PiStudentBold} title="Sudents" />
          <SidebarMenuItem
            Icon={MdIntegrationInstructions}
            title="Integration"
          />
        </div>
        {/* setting  */}
        <div className="my-4 border-b border-gray-100 pb-4">
          <SidebarMenuItem Icon={MdSettings} title="Settings" />
          <SidebarMenuItem Icon={MdMoreHoriz} title="More" />
        </div>
        {/* logout */}
        <div className="my-4">
          <SidebarMenuItem Icon={MdExitToApp} title="Logout" />
        </div>
      </div>
    </div>
  );
}
function SidebarMenuItem({ Icon, title }: any) {
  return (
    <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-indigo-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
      <Icon className="text-2xl text-gray-600 group-hover:text-white" />
      <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
        {title}
      </h3>
    </div>
  );
}
