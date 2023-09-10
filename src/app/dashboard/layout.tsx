import React from 'react'

// const getAdmin=()=>{
//     return true;
//     // return false;
// }
export default function Layout(props: any) {
    // const isAdmin=getAdmin();
    // const isAdmin = true;
    const isAdmin = false;
    return isAdmin ? props.admin : props.department;
}
