import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";
import logger from "@/utils/loggerUtils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
  try {
    const {
      name,
      club,
      email,
      phone,
      length,
      numberOfGuests,
      roomType,
      airports,
    } = await request.json();
    logger.debug("New Enquiry - ", {
      details: {
        name,
        club,
        email,
        phone,
        length,
        numberOfGuests,
        roomType,
        airports,
      },
    });

    const { data, error } = await resend.emails.send({
      from: "Admin <admin@matchdayescapes.co.uk>",
      to: ["matchdayescapes@gmail.com"],
      subject: "New Enquiry",
      react: EmailTemplate({
        name: name,
        club: club,
        email: email,
        phone: phone,
        length: length,
        numberOfGuests: numberOfGuests,
        roomType: roomType,
        airports: airports,
      }),
    });

    if (error) {
      logger.error("Error sending email - ", { error: error });
      return Response.json({ error }, { status: 500 });
    }
    logger.info("Email sent - ", { data: data });
    return Response.json(data);
  } catch (error) {
    logger.error("Error sending email - ", { error: error });
    return Response.json({ error }, { status: 500 });
  }
}
