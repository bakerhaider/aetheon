import Contact from '@/models/contact';
import connectMongoDB from '@/utils/database';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const { email, message } = await request.json();

  try {
    await connectMongoDB();
    const newContact = new Contact({ email, message });

    await newContact.save();
    return new NextResponse(JSON.stringify(newContact), { status: 201 });
  } catch (error) {
    console.log(error);
  }
};
