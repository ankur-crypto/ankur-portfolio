import emailjs from "@emailjs/browser";

export const sendEmail = async (templateParams: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
  console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
  console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    templateParams,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
};