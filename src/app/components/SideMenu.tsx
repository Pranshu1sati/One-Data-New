'use client'
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
// import PropTypes from 'prop-types';
import {
  MdDashboard,
  MdEqualizer,
  MdSettings,
  MdMoreHoriz,
  MdExitToApp,
  MdIntegrationInstructions
} from "react-icons/md";
import {IoMdArrowDroprightCircle} from 'react-icons/Io'
import {HiSwitchHorizontal} from 'react-icons/hi'
import {PiStudentBold} from 'react-icons/Pi'
import { CgProfile } from "react-icons/cg";
// import { FaRegComments } from "react-icons/fa";
// import { BiMessageSquareDots } from "react-icons/bi";

// SidebarMenuItem.propTypes = {
//     Icon: PropTypes.elementType.isRequired, // Assumes Icon is a React component
//     title: PropTypes.string.isRequired,
//   };

function SideNavbar() {
  return (
    <div>
      <Disclosure  >
        {({ open }) => (
          <>
            <Disclosure.Button
              className="z-40 -ml-1 absolute md:text-lg top-4 left-0 inline-flex items-center peer justify-center rounded-md p-0 text-gray-800 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
            > <IoMdArrowDroprightCircle/>
              
            </Disclosure.Button>
            <Disclosure.Panel
              className={`${
                open ? "block" : "hidden"
              } mt-20 p-6 w-1/2 h-screen border-solid-8-black bg-white z-10 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200`}
            style={{minHeight:"100%"}}
            >
              <div className="flex flex-col justify-start item-center">
                <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                  Navigation/ToolBar {open}
                </h1>
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

// Sidebar menu item component
function SidebarMenuItem({ Icon, title}: any) {
  return (
    <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-indigo-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
      <Icon className="text-2xl text-gray-600 group-hover:text-white" />
      <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
        {title}
      </h3>
    </div>
  );
}

export default SideNavbar;
