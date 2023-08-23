'use client'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'
import SideMenu from './SideMenu'
import {Toaster} from 'react-hot-toast'
import * as React from 'react'
const PageLayout = ({ children }: any) => {

  return (
    <>
      <Toaster/>
      <Header />
      {/* <div className='w-full md:grid md:grid-cols-5 mt-20 h-[75vh] bg-[#e9ecef]'> */}
        {/* we need to hide this in login and signup page , check if user is present in context if and then use conditional rendering */}
        <section className='col-span-1 md:flex h-full  w-full md:flex-col'>
          <SideMenu />
        </section>
        <main className='col-span-4 flex flex-col px-10' >
          {children}
        </main>
      
      <Footer />
    </>
  )
}
export default PageLayout