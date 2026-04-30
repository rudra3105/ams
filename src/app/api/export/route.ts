import { NextResponse } from 'next/server';
export async function GET(){
  const csv = 'name,email\nAcme Corp,info@acme.com';
  return new NextResponse(csv, { headers: { 'Content-Type': 'text/csv', 'Content-Disposition': 'attachment; filename="companies.csv"' } });
}
