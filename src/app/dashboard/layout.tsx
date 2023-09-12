import { headers } from 'next/headers'
import React from 'react'

export default function layout(props: any) {
    const headersList = headers()
    const user = headersList.get('user');
    console.log(user,"here is the user")
    //   const {isHod}=user;
    const isAdmin = true;
    return isAdmin ? props.admin : props.department;
}
