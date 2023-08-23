import { NextResponse, NextRequest } from "next/server";
export async function GET(request : NextRequest) {
    try{
        const {searchParams} = new URL(request.nextUrl)
        console.log(searchParams.get('user'));
        return NextResponse.json({
            message : "Users get request accessed succefull",
            //can send data as well
            data :{
                name : "John Doe",
                email : "johndoe@gmail.com"
            }
        });
    }
    catch(error : any) {
        return NextResponse.json({error : error.message}, {status : 500})
    }
}