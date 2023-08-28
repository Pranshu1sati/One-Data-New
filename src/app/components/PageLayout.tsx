'use client'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'
import {Toaster} from 'react-hot-toast'
import * as React from 'react'
const PageLayout = ({ children }: any) => {
  return (
    <>
      <Toaster/>
      <Header />
      <div className='w-full md:grid md:grid-cols-5 bg-[#e9ecef]'>
        {/* we need to hide this in login and signup page , check if user is present in context if and then use conditional rendering */}
        <section className='col-span-1 hidden md:flex  md:flex-col bg-white sticky'>
          <SideBar />
        </section>
        <main className='md:col-span-4 cols-span-5 flex flex-col px-10' >
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
export default PageLayout