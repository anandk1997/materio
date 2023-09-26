import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authToken } from './constants/auth'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublicPath = path === '/login' || path === '/register' || path === '/error'
  const token = request.cookies.get(authToken)?.value || ''

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
    '/account-settings',
    '/usdt/activate-now',
    '/usdt/activation-history',
    '/usdt/re-activation-history',
    '/usdt/topup-wallet-statement',
    '/team-details/my-partner-tree',
    '/team-details/my-partner',
    '/team-details/level-report',
    '/statement/direct-income',
    '/statement/dtb-income',
    '/statement/team-level-income',
    '/statement/rewards-income',
    '/statement/payout-summary',
    '/fund-manager/deposit-vmc',
    '/fund-manager/fund-request-history',
    '/fund-manager/deposit-manually',
    '/fund-manager/withdraw',
    '/fund-manager/vmc-closing',
    '/fund-manager/fund-history',
    '/support-ticket/create-ticket',
    '/support-ticket/inbox',
    '/support-ticket/outbox',
    '/error',
    '/typography',
    '/icons',
    '/cards',
    '/tables',
    '/form-layouts',
  ],
}
