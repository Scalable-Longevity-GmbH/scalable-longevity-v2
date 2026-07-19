import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { localeFromCountry, routing, type Locale } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

function resolvePreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && routing.locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  const country = request.headers.get("x-vercel-ip-country");
  return localeFromCountry(country);
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!pathnameHasLocale) {
    const locale = resolvePreferredLocale(request);
    const url = request.nextUrl.clone();
    url.pathname =
      pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    const response = NextResponse.redirect(url);
    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
