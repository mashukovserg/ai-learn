import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'ru']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const preferredLanguage = request.cookies.get('preferred-language')?.value
  const locale = locales.includes(preferredLanguage ?? '') ? preferredLanguage : 'ru'

  // Redirect if there is no locale
  request.nextUrl.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip static files and internal paths so assets are not locale-redirected.
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
