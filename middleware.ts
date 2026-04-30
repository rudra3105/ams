import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const protectedPaths = ['/dashboard','/companies','/members','/invoices','/events','/imports','/exports','/settings'];
  const isProtected = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));
  if (!isProtected) return NextResponse.next();
  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
