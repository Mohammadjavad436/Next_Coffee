import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAccessToken } from './utility/auth'

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value

    const publicPaths = ['/login-register', '/api/auth/signIn', '/api/auth/signup', '/api/auth/verify']

    if (publicPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
        return NextResponse.next()
    }

    if (!token) {
        return NextResponse.redirect(new URL('/login-register', request.url))
    }

    try {
        const validToken = await verifyAccessToken(token)
        if (validToken) {
            return NextResponse.next()
        }
    } catch (error) {
        console.error('Middleware token verification error:', error)
        return NextResponse.redirect(new URL('/login-register', request.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
} 