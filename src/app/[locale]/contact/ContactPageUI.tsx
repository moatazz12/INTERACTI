// src/app/contact/ContactPageUI.tsx

import { ContactDict } from '@/lib/dictionaries'; 
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Breadcrumb from '@/app/components/Breadcrumb';
import ContactForm from '@/app/components/ContactForm';
import Image from 'next/image';

interface ContactPageUIProps {
  dict: ContactDict;  
}

const ContactPageUI: React.FC<ContactPageUIProps> = ({ dict }) => {
  return (
    <>
      <section className="min-h-[35vh] bg-[#301F50] text-white font-sans">
        <NavBar activeUnderline={dict.contactTitle} />
        <div className="flex flex-col items-center justify-center text-center py-10 md:py-3 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{dict.contactTitle}</h1>
          <Breadcrumb homeLabel={dict.breadcrumbHome} currentLabel={dict.breadcrumbContact} />
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-center gap-12 min-h-screen px-6 py-12">
        <div className="relative w-full lg:w-1/2 h-[300px] md:h-[550px]">
          <Image src="/contact.webp" alt="Contact" fill className="object-contain" />
        </div>

        <div className="w-full lg:w-1/2 max-w-xl">
          <h2 className="text-[36px] font-extrabold text-[#16012b] mb-4">
            {dict.respondTime}
          </h2>
          <p className="text-[#666]">{dict.helpText}</p>
          <ContactForm dict={dict} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPageUI;
