import Spinner from "@/app/components/Spinner";
import { headers } from "next/headers"
import { redirect } from "next/navigation";
interface User {
  _id: string | null;
  isAdmin: boolean;
  isHod: boolean;
}
export default function Teacher() {
  const headerlist : any = headers();
  const user : User = JSON.parse(headerlist?.get('user'));
  const id = user._id
 
  return (
    <div className="z-50 fixed inset-0  flex justify-center items-center align-center bg-neutral-400 backdrop-blur-sm bg-white/20">
    <Spinner/>
    { redirect(`/dashboard/profile/${id}`)}
</div>
  )
}