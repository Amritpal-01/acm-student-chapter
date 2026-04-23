import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { formPayloadType } from '../../../types/interface';

// Define the schema
const ApplicationSchema = new mongoose.Schema({
  email: { type: String, required: true },
  full_name: { type: String, required: true },
  justification: { type: String, required: false, default: null },
  skill: { type: [String], required: false, default: null },
  course_name: { type: String, required: true },
  study_year: { type: String, required: true },
  role: { type: String, required: true },
}, { timestamps: true });

// Create or get the model
const Application = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    if (!process.env.MONGODB_URI) {
      return NextResponse.json({ error: 'MONGODB_URI not configured' }, { status: 500 });
    }

    await mongoose.connect(process.env.MONGODB_URI);

    // Parse the request body
    const body: formPayloadType = await request.json();

    // Basic validation
    const { email, full_name, justification, skill, course_name, study_year, role } = body;
    if (!email || !full_name || !course_name || !study_year || !role) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    body.full_name = body.full_name.trim()
    body.course_name = body.course_name.trim()
    if(body.justification){
      body.justification = body.justification.trim()
    }

    // Create and save the application
    const application = new Application(body);
    await application.save();

    return NextResponse.json({ message: 'Application submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}