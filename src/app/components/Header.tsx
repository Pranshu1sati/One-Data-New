'use client'
import {use, useState} from 'react'
import {usePathname} from "next/navigation"
import * as React from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
const header = () => {
    const path = usePathname();
    const isPublic = path ==='/login'
    let Links =[
        {name:"Home",link:"/"},
        {name:"Dashboard",link:"/Dashboard"},
        {name:"NIRF",link:"/NIRF"},
        {name:"Contact",link:"/Contact"},
      ];
    const [open, setIsOpen] = useState(false);
  return (
    <div className='sticky shadow-md w-full z-50 top-0'>
           <div className='md:flex items-center justify-center bg-white py-0 md:px-8 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center justify-center -ml-4'>
                <img src='https://lawbhoomi.com/wp-content/uploads/2022/03/Graphic-Era-Hill-University.jpg' className='w-28 h-21'/>
                <p className='text-gray-800 -mx-4'>Graphic Era</p>
            </div>
            

            
           </div>
        </div>
  )
}
export default header