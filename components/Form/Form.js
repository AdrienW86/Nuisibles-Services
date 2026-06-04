'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setIsLoading(false);

      if (!response.ok) {
        console.log("error");
        alert("Le formulaire n'a pas pu être envoyé");
      } else {
        console.log("ok");
        reset();
        setIsSended(true);
      }
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 font-sans">
      
      {/* MESSAGE DE CONFIRMATION SUCCÈS */}
      {isSended && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center animate-fade-in">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-base md:text-lg font-semibold text-green-900 leading-relaxed">
            Votre message a bien été envoyé. <br />
            <span className="text-sm font-normal text-green-700">Nous vous répondrons dans les plus brefs délais.</span>
          </p>
        </div>
      )}

      {/* FORMULAIRE ACTIF */}
      {!isSended && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <h3 id="devis" className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight border-b-2 border-red-600 pb-2 mb-6">
            Demandez votre devis gratuit
          </h3>

          <div className="space-y-4">
            
            {/* CHAMP NOM */}
            <div className="space-y-1">
              <input
                className={`w-full bg-gray-50 text-gray-800 placeholder-gray-400 text-sm md:text-base rounded-xl px-4 py-3 border transition-all duration-200 outline-none focus:bg-white ${
                  errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                }`}
                placeholder="Nom"
                {...register('name', { required: true })}
              />
              {errors.name && <span className="text-xs text-red-500 font-medium block pl-1">Ce champ est requis.</span>}
            </div>

            {/* CHAMP EMAIL */}
            <div className="space-y-1">
              <input
                type="email"
                className={`w-full bg-gray-50 text-gray-800 placeholder-gray-400 text-sm md:text-base rounded-xl px-4 py-3 border transition-all duration-200 outline-none focus:bg-white ${
                  errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                }`}
                placeholder="Email"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-xs text-red-500 font-medium block pl-1">Ce champ est requis.</span>}
            </div>

            {/* CHAMP DEMANDE / SUJET */}
            <div className="space-y-1">
              <input
                className={`w-full bg-gray-50 text-gray-800 placeholder-gray-400 text-sm md:text-base rounded-xl px-4 py-3 border transition-all duration-200 outline-none focus:bg-white ${
                  errors.subject ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                }`}
                placeholder="Objet de la demande (ex: Rats, Frelons...)"
                {...register('subject', { required: true })}
              />
              {errors.subject && <span className="text-xs text-red-500 font-medium block pl-1">Ce champ est requis.</span>}
            </div>

            {/* CHAMP TEXTAREA MESSAGE */}
            <div className="space-y-1">
              <textarea
                rows="4"
                className={`w-full bg-gray-50 text-gray-800 placeholder-gray-400 text-sm md:text-base rounded-xl px-4 py-3 border transition-all duration-200 outline-none focus:bg-white resize-y ${
                  errors.message ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                }`}
                placeholder="Décrivez votre situation en quelques mots..."
                {...register('message', { required: true })}
              />
              {errors.message && <span className="text-xs text-red-500 font-medium block pl-1">Ce champ est requis.</span>}
            </div>

          </div>

          {/* BOUTON DE SOUMISSION */}
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-black uppercase tracking-widest text-sm py-4 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg active:scale-[0.99] flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  {/* Petit spinner SVG pendant le chargement */}
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <span>Envoyer ma demande</span>
              )}
            </button>
          </div>

        </form>
      )}
    </section>
  );
}