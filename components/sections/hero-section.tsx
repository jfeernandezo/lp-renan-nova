"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function HeroSection() {
  console.log("Rendering HeroSection component");
  const { isVisible, elementRef } = useScrollAnimation();

  const handleCTAClick = () => {
    console.log("CTA button clicked in hero section");
    // Scroll to final CTA or redirect to checkout
    const finalSection = document.getElementById('final-cta');
    if (finalSection) {
      finalSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={elementRef}
      className="relative bg-gradient-to-br from-brand-light-gray via-white to-brand-light-gray py-20 md:py-32 px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-orange rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent-electric-blue rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent-neon-purple rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-7xl font-bold text-brand-dark-gray mb-8 leading-tight tracking-tight">
            Aposente-se com Segurança, Sem Depender de <span className="text-transparent bg-clip-text bg-neon-gradient bg-200% animate-gradient-shift">Advogado</span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Aprenda sozinho, de forma prática, como conquistar sua aposentadoria da pessoa com deficiência (PCD) – com bônus exclusivos que evitam erros e aumentam suas chances.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
          <Button
            onClick={handleCTAClick}
            className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg px-8 py-4 md:text-xl md:px-12 md:py-6 font-bold rounded-2xl shadow-lg hover:shadow-orange-500/70 transition-all duration-300 transform hover:scale-105 hover:from-orange-600 hover:to-orange-700 h-auto whitespace-normal text-center"
          >
            <span className="relative z-10">Quero Me Aposentar Sem Complicações</span>
          </Button>
        </div>

        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100/50 hover:border-brand-orange/30 transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-brand-dark-gray text-lg font-semibold">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-success rounded-full animate-pulse shadow-neon-green"></div>
                <span>Acesso imediato</span>
              </div>
              <div className="hidden md:block w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-accent-electric-blue rounded-full animate-pulse shadow-neon-blue"></div>
                <span>Garantia de 7 dias</span>
              </div>
              <div className="hidden md:block w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-brand-orange rounded-full animate-pulse shadow-neon"></div>
                <span className="text-brand-orange font-bold">Por apenas R$ 97,99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}