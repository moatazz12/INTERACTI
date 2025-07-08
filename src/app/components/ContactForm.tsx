'use client';
import { useState } from 'react';

type Props = {
  dict: any;
};

export default function ContactForm({ dict }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      alert('Message envoyé avec succès !');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Erreur lors de l’envoi du message.');
    }
  };

  return (
    <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-b from-[#301f50] to-[#FBD915] shadow-md">
      <div className="bg-white rounded-xl p-6">
        <h3 className="text-[#301f50] font-bold mb-4">{dict.formTitle}</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={dict.namePlaceholder}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={dict.emailPlaceholder}
            className="form-input"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={dict.subjectPlaceholder}
            className="form-input"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={dict.messagePlaceholder}
            className="form-input"
            required
          />
          <button type="submit" className="btn-submit">
            {dict.sendButton}
          </button>
        </form>
      </div>
    </div>
  );
}

/*'use client';

type Props = {
  dict: any;
};

export default function ContactForm({ dict }: Props) {
  return (
    <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-b from-[#301f50] to-[#FBD915] shadow-md">
      <div className="bg-white rounded-xl p-6">
        <h3 className="text-[#301f50] font-bold mb-4">{dict.formTitle}</h3>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder={dict.namePlaceholder} className="form-input" />
          <input type="email" placeholder={dict.emailPlaceholder} className="form-input" />
          <input type="text" placeholder={dict.subjectPlaceholder} className="form-input" />
          <textarea placeholder={dict.messagePlaceholder} className="form-input" />
          <button type="submit" className="btn-submit">
            {dict.sendButton}
          </button>
        </form>
      </div>
    </div>
  );
}
*/ 