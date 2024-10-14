import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
  try {
   const { name, club, email, phone, length, numberOfGuests, roomType, airports } = await request.json();

   const { data, error } = await resend.emails.send({
      from: 'Admin <admin@mhfusdohos.co.uk>',
      to: ['matchdayescapes@gmail.com'],
      subject: 'New Enquiry',
      react: EmailTemplate({ name: name, club: club, email: email, phone: phone, length: length, numberOfGuests: numberOfGuests, roomType: roomType, airports: airports }),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
