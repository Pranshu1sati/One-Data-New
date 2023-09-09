import { log } from 'console'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import axios from 'axios';
import { parse } from 'path';


export async function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith('/login')) return NextResponse.next()

    const cookie = request.cookies.get('Authorization')
    if (!cookie) return NextResponse.redirect(new URL('/login', request.url))



    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/authenticate`, {
        headers: {
            'Cookie': `${cookie.name}=${cookie.value}`,
        },
    }).then(data => data.json())
        .catch((error) => {
            console.log("error while authentication ");
        })

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('user', JSON.stringify(res))

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })

    return response
}


export const config = {
    matcher: ['/((?!login|_next/static).*)',]
}