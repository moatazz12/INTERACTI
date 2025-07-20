// app/components/forms/ContactForm.tsx
import ContactFormClient from './ContactFormClient';

type Props = {
  dict: {
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
  };
};

export default function ContactForm({ dict }: Props) {
  return (
    <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-b from-[#330052] to-[#FBD915] shadow-md">
      <div className="bg-white rounded-xl p-6">
        <h3 className="text-[#330052] font-bold mb-4">{dict.formTitle}</h3>
        <ContactFormClient dict={dict} />
      </div>
    </div>
  );
}
