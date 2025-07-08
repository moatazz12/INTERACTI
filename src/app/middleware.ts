import { NextRequest, NextResponse } from 'next/server'

export const locales = ['en', 'fr'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return
  }

  const pathnameHasLocale = locales.some((loc) => pathname.startsWith(`/${loc}/`))

  if (!pathnameHasLocale) {
    const accept = req.headers.get('accept-language')?.split(',')[0] ?? defaultLocale
    const base = locales.includes(accept as Locale) ? accept : defaultLocale
    const url = req.nextUrl.clone()
    url.pathname = `/${base}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
