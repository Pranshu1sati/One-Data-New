
import { headers } from 'next/headers'
import React from 'react'
import { useRouter } from 'next/navigation'

interface User {
    _id: string | null;
    isAdmin: boolean;
    isHod: boolean;
  }
  
export default function layout(props: any) {
    const headersList : any = headers()
    const user : User = JSON.parse(headersList.get('user'));
    // console.log(user)
    // console.log(user,"here is the user  layout")
    //   const {isHod}=user;
    // const flag = user.isAdmin;
    const isAdmin = true;
    // console.log(user.isAdmin)
    // return user.isAdmin ? props.admin : props.department;
    // return flag ? props.admin : props.department;
    if (user?.isAdmin === true) {
          return props.admin;
        } else if (user?.isHod === true) {
          return props.department;
        } else {
          return props.teacher;
        }
}



// import { headers } from 'next/headers'
// import React from 'react'

//   export default function layout(props: any) {
//     // const headersList = headers();
//     const headersList : any= headers();
//     const user: User | null = JSON.parse(headersList.get('user'));
//     console.log(user)
//    // Access the user.isAdmin and user.isHod properties using the optional chaining operator
//   if (user?.isAdmin === true) {
//     return props.admin;
//   } else if (user?.isHod === true) {
//     return props.department;
//   } else {
//     return props.teacher;
//   }
//   }
