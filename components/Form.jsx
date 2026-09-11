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
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        setIsLoading(false);

        if (!response.ok) {
          alert("Le formulaire n'a pas pu être envoyé. Veuillez réessayer ou nous contacter par téléphone.");
        } else {
          reset();
          setIsSended(true);
        }
      } catch (error) {
        setIsLoading(false);
        alert("Une erreur réseau est survenue.");
      }
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto bg-gray-900 rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-800 font-sans text-white">
      
      {/* MESSAGE DE CONFIRMATION SUCCÈS */}
      {isSended && (
        <div className="bg-green-950/80 border border-green-800 rounded-2xl p-6 text-center animate-fade-in">
          <div className="w-12 h-12 bg-green-900/60 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-base md:text-lg font-bold text-white leading-relaxed">
            Votre demande d'intervention a bien été transmise. <br />
            <span className="text-sm font-normal text-green-400">Un technicien vous rappellera dans les plus brefs délais.</span>
          </p>
        </div>
      )}

      {/* FORMULAIRE ACTIF */}
      {!isSended && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <h3 id="devis" className="text-xl md:text-2xl font-black text-slate-100 uppercase tracking-tight border-b-2 border-red-600 pb-3 mb-6">
            Demandez votre devis gratuit
          </h3>

          <div className="space-y-4">
            
            {/* TYPE DE NUISIBLE */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-400 uppercase">Problème rencontré *</label>
              <select
                className={`w-full bg-gray-950 text-white text-sm md:text-base rounded-xl px-4 py-3 border transition-all duration-200 outline-none ${
                  errors.service ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-800 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                }`}
                {...register('service', { required: true })}
              >
                <option value="">Sélectionnez un type de nuisible...</option>
                <option value="Dératisation (Rats / Souris)">Dératisation (Rats / Souris)</option>
                <option value="Punaises de lit / Puces">Punaises de lit / Puces</option>
                <option value="Guêpes & Frelons asiatiques">Guêpes & Frelons asiatiques</option>
                <option value="Cafards & Blattes">Cafards & Blattes</option>
                <option value="Dépigeonnage">Dépigeonnage</option>
                <option value="Autre / Désinfection">Autre intervention / Désinfection</option>
              </select>
              {errors.service && <span className="text-xs text-red-500 font-medium block pl-1">Veuillez sélectionner un service.</span>}
            </div>

            {/* NOM & TÉLÉPHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-400 uppercase">Nom complet *</label>
                <input
                  className={`w-full bg-gray-950 text-white placeholder-gray-500 text-sm md:text-base rounded-xl px-4 py-3 border transition-all duration-200 outline-none ${
                    errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-800 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                  }`}
                  placeholder="Votre nom"
                  {...register('name', { required: true })}
                />
                {errors.name && <span className="text-xs text-red-500 font-medium block pl-1">Ce champ est requis.</span>}
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-400 uppercase">Téléphone *</label>
                <input
                  type="tel"
                  className={`w-full bg-gray-950 text-white placeholder-gray-500 text-sm md:text-base rounded-xl px-4 py-3 border transition-all duration-200 outline-none ${
                    errors.phone ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-800 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                  }`}
                  placeholder="06 00 00 00 00"
                  {...register('phone', { required: true })}
                />
                {errors.phone && <span className="text-xs text-red-500 font-medium block pl-1">Numéro requis pour rappel.</span>}
              </div>
            </div>

            {/* EMAIL & VILLE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-400 uppercase">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-950 text-white placeholder-gray-500 text-sm md:text-base rounded-xl px-4 py-3 border border-gray-800 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all duration-200 outline-none"
                  placeholder="votre@email.com (optionnel)"
                  {...register('email')}
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-400 uppercase">Ville (66) *</label>
                <input
                  className={`w-full bg-gray-950 text-white placeholder-gray-500 text-sm md:text-base rounded-xl px-4 py-3 border transition-all duration-200 outline-none ${
                    errors.city ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-800 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                  }`}
                  placeholder="Ex: Perpignan, Canet..."
                  {...register('city', { required: true })}
                />
                {errors.city && <span className="text-xs text-red-500 font-medium block pl-1">Ville requise.</span>}
              </div>
            </div>

            {/* MESSAGE / PRÉCISIONS */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-400 uppercase">Détails de la situation</label>
              <textarea
                rows="3"
                className="w-full bg-gray-950 text-white placeholder-gray-500 text-sm md:text-base rounded-xl px-4 py-3 border border-gray-800 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all duration-200 outline-none resize-y"
                placeholder="Précisez votre problème, urgence ou pièces concernées..."
                {...register('message')}
              />
            </div>

          </div>

          {/* BOUTON DE SOUMISSION */}
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-800 text-white font-black uppercase tracking-widest text-sm py-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl active:scale-[0.99] flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Transmission en cours...</span>
                </>
              ) : (
                <span>Envoyer ma demande d'urgence</span>
              )}
            </button>
          </div>

        </form>
      )}
    </section>
  );
}