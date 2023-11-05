import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
// import SpinnerParent from "../../components/SpinnerParent";
// import Spinner from "../../components/Spinner";
import Spinner from "../../components/Spinner"
import SpinnerParent from '@/app/components/SpinnerParent';
interface User {
    _id: string | null;
    isAdmin: boolean;
    isHod: boolean;
    department : string
  }
  
export default function Page () {
    const headerlist :any = headers()
    const user : User = JSON.parse(headerlist.get('user'))
    // console.log(user);
    
    const department  = user.department;
    // /console.log(department)
    // console.log(`/dashboard/${department}`)
    
  return (
    <div className="z-50 fixed inset-0  flex justify-center items-center align-center bg-neutral-400 backdrop-blur-sm bg-white/20">
        <Spinner/>
        {redirect(`/dashboard/${department}`)}
    </div>
    
  )
}