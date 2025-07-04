"use client";

import { UserCheck, Shield, FileText, Stethoscope, Calculator, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function BenefitsSection() {
  console.log("Rendering BenefitsSection component");
  const { isVisible, elementRef } = useScrollAnimation();

  const benefits = [
    {
      icon: <UserCheck className="w-10 h-10 text-brand-orange" />,
      title: "Dar entrada sozinho, sem advogado",
      description: "Aprenda o passo a passo completo para fazer seu pedido de aposentadoria sem intermediários",
      gradient: "from-brand-orange/10 to-accent-neon-orange/10",
      borderColor: "border-brand-orange/30"
    },
    {
      icon: <Shield className="w-10 h-10 text-success" />,
      title: "Evitar erros que atrasam o processo",
      description: "Conheça os principais erros e como evitá-los para ter seu pedido aprovado na primeira tentativa",
      gradient: "from-success/10 to-accent-cyber-green/10",
      borderColor: "border-success/30"
    },
    {
      icon: <FileText className="w-10 h-10 text-accent-electric-blue" />,
      title: "Saber exatamente quais documentos entregar",
      description: "Lista completa e modelos prontos de todos os documentos necessários",
      gradient: "from-accent-electric-blue/10 to-blue-400/10",
      borderColor: "border-accent-electric-blue/30"
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-accent-neon-purple" />,
      title: "Entender como funciona a perícia do INSS",
      description: "Prepare-se adequadamente para as avaliações médica e social",
      gradient: "from-accent-neon-purple/10 to-purple-400/10",
      borderColor: "border-accent-neon-purple/30"
    },
    {
      icon: <Calculator className="w-10 h-10 text-yellow-500" />,
      title: "Calcular quanto tempo falta para se aposentar",
      description: "Ferramentas exclusivas para saber exatamente quando você poderá se aposentar",
      gradient: "from-yellow-400/10 to-amber-400/10",
      borderColor: "border-yellow-400/30"
    },
    {
      icon: <Headphones className="w-10 h-10 text-red-500" />,
      title: "Receber apoio com bônus práticos e tecnologia",
      description: "Acesso a ferramentas de IA e suporte especializado durante todo o processo",
      gradient: "from-red-400/10 to-pink-400/10",
      borderColor: "border-red-400/30"
    }
  ];

  const differentials = [
    { text: "Uso de IA para calcular o tempo de contribuição", icon: "🤖" },
    { text: "Modelos de atestados médicos", icon: "📋" },
    { text: "Desenvolvido por um ex-servidor do INSS", icon: "👨‍💼" }
  ];

  return (
    <section 
      ref={elementRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-white via-brand-light-gray/20 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-20 w-96 h-96 bg-brand-orange rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-20 w-64 h-64 bg-accent-electric-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark-gray mb-6 leading-tight">
            Com este guia, você vai <span className="text-transparent bg-clip-text bg-neon-gradient bg-200% animate-gradient-shift">conseguir:</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`
                transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}
                border-2 ${benefit.borderColor} shadow-xl hover:shadow-2xl 
                hover:transform hover:scale-110 hover:-translate-y-2 
                bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm
                rounded-3xl overflow-hidden group cursor-pointer
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-white/50 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark-gray mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium flex-grow">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
          <div className="bg-neon-gradient bg-200% animate-gradient-shift rounded-3xl p-12 text-white shadow-neon hover:shadow-glow-intense transition-all duration-500 border-2 border-white/20">
            <h3 className="text-3xl md:text-5xl font-bold text-center mb-12">
              Diferenciais Exclusivos:
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {differentials.map((differential, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">{differential.icon}</span>
                  </div>
                  <p className="font-bold text-xl leading-tight">
                    {differential.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}