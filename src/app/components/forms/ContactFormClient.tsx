// app/components/forms/ContactFormClient.tsx
'use client';

import { useReducer } from 'react';

type Props = {
  dict: {
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
  };
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function reducer(state: FormState, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  return { ...state, [e.target.name]: e.target.value };
}

export default function ContactFormClient({ dict }: Props) {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      alert(result.success ? '✅ Message envoyé !' : '❌ Erreur lors de l’envoi.');
    } catch (error) {
      alert('❌ Erreur réseau.');
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={dispatch} placeholder={dict.namePlaceholder} required className="form-input" />
      <input name="email" value={formData.email} onChange={dispatch} placeholder={dict.emailPlaceholder} type="email" required className="form-input" />
      <input name="subject" value={formData.subject} onChange={dispatch} placeholder={dict.subjectPlaceholder} required className="form-input" />
      <textarea name="message" value={formData.message} onChange={dispatch} placeholder={dict.messagePlaceholder} required className="form-input" />
      <button type="submit" className="btn-submit">{dict.sendButton}</button>
    </form>
  );
}
