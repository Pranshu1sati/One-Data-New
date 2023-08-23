import Image from 'next/image'
import React from 'react'
interface Event {
    _id: string;
    name: string;
    date: Date;
    images: string[];
    department: string;
    attendence: string;
    notableGuests: string[];
  }
interface EventProps {
    event: Event,
}
// export default function EventCard({ event }: EventProps) {
export default function EventCard() {
    // console.log(event);
    return (
        <div>
            <Image alt='Event Image' src={"https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"} height={700} width={700} />
            <div className='mx-2'>
                <div className='grid grid-cols-2'>
                    <h3>Event Name</h3>
                    <div className='flex flex-row-reverse'>attendence</div>
                </div>
                <div>date</div>
                <div>Guest1,Guest2</div>
            </div>
        </div>
    )
}
