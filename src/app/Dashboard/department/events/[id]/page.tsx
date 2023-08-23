import EventCard from '@/app/components/DashboardComponents/EventCard';
import AddEventButton from '@/app/components/FormModals/addEvent/AddEventButton';
import React from 'react'
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
const getDepartmentEvents = async (departId: string) => {
    const params = new URLSearchParams();
    params.append("departmentId", departId);
    try {
        console.log(departId);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/event/info?${params.toString()}`, { cache: 'no-store' });
        const data = await res.json();
        return { events: data }
    }
    catch (error) {
        console.log(error + "Some error occred");
        return { events: [] }
    }
}
export default async function page({ params }: any) {
    const { id } = params;
    const { department } = await getDepartment(id);
    const { events } = await getDepartmentEvents(id);
    console.log(department, events, "from events page")
    return (
        <article className='w-full rounded-lg p-5 bg-white text-black'>
            <div className='w-full flex'>
                <div>
                    <h1 className='font-extrabold text-3xl'>{department.name}</h1>
                    <h2 className='font-semibold text-[#83c5be]'>{events.length > 0 ? events.length : "0"} events</h2>
                    <div className='grid grid-cols-3'>
                        <h3 className='font-bold text-[#83c5be]'>Hod Name</h3>
                        <h3 className='font-bold text-[#83c5be]'>Hod contact</h3>
                        <AddEventButton/>
                    </div>
                </div>

                <div className='flex ml-auto'>
                    <div className='font-extrabold flex flex-col items-center mx-4 text-xl'>
                        <div>40</div>
                        <div className='font-semibold text-[#83c5be]'>papers</div>
                    </div>
                    <div className='font-extrabold flex flex-col items-center text-xl'>
                        <div>{events.length > 0 ? events.length : "0"}</div>
                        <div className='font-semibold text-[#83c5be]'>events</div>
                    </div>
                </div>
            </div>
            <section className='w-full my-3'>
                <hr />
                <div className='flex flex-col w-fit mt-3'>
                    <h3 className='font-bold text-2xl text-[#83c5be]'>Department Events</h3>
                    <div className='w-full border-t-2 border-[#83c5be]'></div>
                </div>
                <main className='text-[#83c5be] w-full flex flex-col justify-center items-center'>
                    {/* {
                        events.length>0 ? <section>
                            {
                                events.map((event:any)=>(
                                    <EventCard event={event}/>
                                ))
                            }
                        </section>:
                        <div>
                            No Department events yet...
                        </div>
                    } */}
                    {/* temporary */}
                    <section className='grid grid-cols-4 w-full gap-3 mt-5'>
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </section>
                </main>
            </section>
        </article>
    )
}
