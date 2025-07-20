'use client';

import { ChangeEvent, useState, useEffect } from 'react';
import { ServiceDict, ServiceRequestDict } from '@/lib/dictionaries';
import Image from 'next/image';

interface Props {
  serviceDict: ServiceDict;
  requestDict: ServiceRequestDict;
  selectedSubServices?: ServiceDict[]; // Ce sont les sous-services du service sélectionné
  parentServiceSlug?: string;
}

export default function ServiceRequestFormClient({
  serviceDict,
  requestDict,
  selectedSubServices = [],
  parentServiceSlug,
}: Props) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    services: [] as string[],
    message: '',
  });

  // ✅ CORRECTION: Utiliser les selectedSubServices passés en props
  // Ces services viennent du service spécifique sélectionné via l'URL
  const availableServices = selectedSubServices.length > 0
    ? selectedSubServices
    : []; // Si aucun service spécifique n'est sélectionné, afficher une liste vide

  // Pré-sélection des services si fournis
  useEffect(() => {
    if (selectedSubServices.length > 0) {
      setFormData(prev => ({
        ...prev,
        services: selectedSubServices.map(service => service.title || service.slug)
      }));
    }
  }, [selectedSubServices]);

  // Gestion des changements dans le formulaire
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Gestion de la sélection multiple des services
  const handleServiceToggle = (serviceTitle: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceTitle)
        ? prev.services.filter(s => s !== serviceTitle)
        : [...prev.services, serviceTitle]
    }));
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      parentService: parentServiceSlug || null,
      selectedServices: formData.services,
      timestamp: new Date().toISOString(),
    };

    console.log('Données du formulaire :', submissionData);
    // TODO: Appel API ici
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Informations personnelles en grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nom complet */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="fullName">
            {requestDict.namePlaceholder} *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#330052] focus:border-transparent"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="email">
            {requestDict.emailPlaceholder} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#330052] focus:border-transparent"
            required
          />
        </div>

        {/* Entreprise */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="company">
            {requestDict.companyPlaceholder}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#330052] focus:border-transparent"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="phone">
            {requestDict.PhonePlaceholder}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#330052] focus:border-transparent"
          />
        </div>
      </div>

      {/* Sélection des services */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-[#330052]">
          {requestDict.requestChoose} *
          {parentServiceSlug && (
            <span className="text-sm font-normal text-gray-600 block">
              Service principal: {/* Trouver le titre du service parent */}
              {serviceDict.subServices?.find(s => s.slug === parentServiceSlug)?.title || parentServiceSlug}
            </span>
          )}
        </h4>

        {availableServices.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableServices.map((service) => {
                const serviceTitle = service.title;
                const serviceIcon = '/default-service-icon.svg';
                const isSelected = formData.services.includes(serviceTitle);

                return (
                  <div
                    key={serviceTitle}
                    onClick={() => handleServiceToggle(serviceTitle)}
                    className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'border-[#330052] bg-purple-50 shadow-lg scale-105'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    {/* Badge de sélection */}
                    <div className={`absolute top-2 right-2 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected 
                        ? 'bg-[#330052] border-[#330052]' 
                        : 'border-gray-300 bg-white'
                    }`}>
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>

                    <div className="flex flex-col items-center text-center space-y-3">
                      <Image 
                        src={serviceIcon} 
                        alt={serviceTitle} 
                        width={40} 
                        height={40}
                        className="flex-shrink-0"
                      />
                      <h5 className="text-sm font-semibold text-gray-800 leading-tight">
                        {serviceTitle}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Compteur de sélection */}
            <div className="mt-3 text-sm text-gray-600">
              {formData.services.length > 0 ? (
                <span className="text-[#330052] font-medium">
                  {formData.services.length} service(s) sélectionné(s)
                </span>
              ) : (
                <span>Sélectionnez au moins un service</span>
              )}
            </div>
          </>
        ) : (
          // ✅ Message quand aucun service spécifique n'est sélectionné
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500 mb-4">
              Aucun service spécifique sélectionné. 
            </p>
            <p className="text-sm text-gray-400">
              Décrivez vos besoins dans le message ci-dessous.
            </p>
          </div>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700" htmlFor="message">
          {requestDict.messagePlaceholder} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#330052] focus:border-transparent resize-none"
          placeholder="Décrivez votre projet et vos besoins spécifiques..."
          required
        />
      </div>

      {/* Bouton de soumission */}
      <div className="pt-4">
        <button
          type="submit"
          // ✅ Permettre la soumission même sans services sélectionnés (cas général)
          disabled={false}
          className="w-full bg-[#330052] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#4a0075] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {requestDict.sendButton}
        </button>
      </div>

      {/* Note de confidentialité */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Vos informations sont confidentielles et ne seront utilisées que pour traiter votre demande.
      </p>
    </form>
  );
}