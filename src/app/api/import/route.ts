import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest){
  const body = await req.json();
  return NextResponse.json({ message: 'Import pipeline initialized', receivedRows: body?.rows?.length ?? 0, partialSuccess: true, errors: [] });
}
