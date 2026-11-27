import { NextResponse } from 'next/server';
import { z } from 'zod';

const registerSchema = z.object({
  teamName: z.string().min(2, 'Team name required'),
  track: z.string().min(1, 'Track selection required'),
  teamSize: z.number().min(3).max(5),
  leaderName: z.string().min(2, 'Leader name required'),
  leaderEmail: z.string().email('Valid leader email required'),
  leaderPhone: z.string().min(10, 'Valid phone required'),
  college: z.string().min(2, 'College name required'),
  studentId: z.string().min(1, 'Student ID required'),
  member2Name: z.string().optional(),
  member2Email: z.string().optional(),
  member3Name: z.string().optional(),
  member3Email: z.string().optional(),
  member4Name: z.string().optional(),
  member4Email: z.string().optional(),
  member5Name: z.string().optional(),
  member5Email: z.string().optional(),
  githubLink: z.string().optional(),
  ideaSummary: z.string().optional(),
  consent: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = registerSchema.parse(body);

    const gatePass = `CV2-${Math.floor(100000 + Math.random() * 900000)}`;

    // In production with Supabase:
    // await supabase.from('registrations').insert({ ...validated, gate_pass: gatePass });

    return NextResponse.json({
      success: true,
      gatePass,
      message: 'Squad registration verified and archived.',
      registeredAt: new Date().toISOString(),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0]?.message || 'Validation error' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
