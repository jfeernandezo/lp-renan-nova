"use client";

import { CheckCircle, XCircle, AlertTriangle, FileText, Clock, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ProblemsSection() {
  console.log("Rendering ProblemsSection component");
  const { isVisible, elementRef } = useScrollAnimation();

  const problems = [
    {
      icon: <XCircle className="w-8 h-8 text-red-500" />,
      text: "Já teve o pedido de aposentadoria do PCD negado?",
      color: "red"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      text: "Tem uma limitação e não sabe como comprovar?",
      color: "yellow"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      text: "Confunde aposentadoria PCD com invalidez?",
      color: "blue"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      text: "Tem medo de cair em exigências do INSS?",
      color: "purple"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-orange" />,
      text: "Não sabe quais documentos apresentar?",
      color: "orange"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-success" />,
      text: "Quer se aposentar com o melhor valor possível como PCD?",
      color: "green"
    }
  ];

  const getHoverClasses = (color: string) => {
    const colorMap: {[key: string]: string} = {
      red: "hover:border-red-400/50 hover:shadow-red-400/20",
      yellow: "hover:border-yellow-400/50 hover:shadow-yellow-400/20",
      blue: "hover:border-blue-400/50 hover:shadow-blue-400/20",
      purple: "hover:border-purple-400/50 hover:shadow-purple-400/20",
      orange: "hover:border-brand-orange/50 hover:shadow-brand-orange/20",
      green: "hover:border-success/50 hover:shadow-success/20"
    };
    return colorMap[color] || "";
  };

  return (
    <section 
      ref={elementRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-brand-light-gray/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-brand-orange rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-accent-electric-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark-gray mb-6 leading-tight">
            Você se encaixa em alguma dessas <span className="text-transparent bg-clip-text bg-electric-gradient">situações?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`
                transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}
                bg-white/80 backdrop-blur-sm p-8 rounded-3xl border-2 border-gray-100/50 
                hover:border-2 ${getHoverClasses(problem.color)}
                hover:shadow-2xl hover:shadow-gray-200/50 hover:scale-105 
                transform transition-all duration-500 group cursor-pointer
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <p className="text-brand-dark-gray font-semibold text-lg leading-relaxed">
                  {problem.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== BLOCO CORRIGIDO ABAIXO ===== */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-brand-orange/10 to-accent-neon-orange/10 rounded-3xl p-8 border-2 border-brand-orange/20 shadow-lg">
            
            <p className="text-2xl md:text-3xl text-brand-dark-gray font-bold flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span>Se você respondeu</span>
              
              <span className="text-brand-orange bg-brand-orange/10 px-4 py-2 rounded-2xl border-2 border-brand-orange/30 shadow-neon">
                SIM
              </span>
              
              <span>para pelo menos uma pergunta, este guia é para você!</span>
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}