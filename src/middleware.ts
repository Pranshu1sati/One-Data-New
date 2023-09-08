import { log } from 'console'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    if (request.nextUrl.pathname.startsWith('/login')) return NextResponse.next()

    const cookie = request.cookies.get('Authorization')
    // if (!cookie) return NextResponse.redirect(new URL('/login', request.url))

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('user', 'hello')

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })

    return response
}


export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',]
}