"use client";

import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Zap, Shield, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function FinalCtaSection() {
  console.log("Rendering FinalCtaSection component");
  const { isVisible, elementRef } = useScrollAnimation();

  const handleFinalCTA = () => {
    console.log("Final CTA button clicked");
    // Here you would redirect to the actual checkout page
    alert("Redirecionando para o checkout...");
  };

  return (
    <section 
      id="final-cta" 
      ref={elementRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-br from-brand-dark-gray via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-electric-blue/20 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-neon-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <Clock className="w-20 h-20 text-brand-orange mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              Cada mês de atraso pode custar <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">anos de benefício</span>
            </h2>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
          <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-3xl p-10 mb-12 border-2 border-red-500/30 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-red-300 animate-pulse">
              ⚠️ URGENTE: Não perca mais tempo!
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed font-medium">
              Evite erros, dores de cabeça e perda de tempo. Aprenda agora o passo a passo e conquiste sua aposentadoria com confiança.
            </p>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm p-8 rounded-3xl border-2 border-red-400/50 hover:border-red-400 transition-all duration-300 hover:scale-105">
            <h4 className="font-bold text-2xl mb-4 text-red-300">❌ Sem o guia</h4>
            <ul className="text-lg space-y-3 text-red-100">
              <li>• Pedidos negados</li>
              <li>• Meses de espera</li>
              <li>• Dinheiro perdido</li>
              <li>• Estresse constante</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-success/20 to-green-800/20 backdrop-blur-sm p-8 rounded-3xl border-2 border-success/50 hover:border-success transition-all duration-300 hover:scale-105">
            <h4 className="font-bold text-2xl mb-4 text-success">✅ Com o guia</h4>
            <ul className="text-lg space-y-3 text-green-100">
              <li>• Pedido aprovado</li>
              <li>• Processo rápido</li>
              <li>• Economia total</li>
              <li>• Tranquilidade</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-brand-orange/20 to-orange-800/20 backdrop-blur-sm p-8 rounded-3xl border-2 border-brand-orange/50 hover:border-brand-orange transition-all duration-300 hover:scale-105">
            <h4 className="font-bold text-2xl mb-4 text-brand-orange">💰 Investimento</h4>
            <div className="text-4xl font-bold text-orange-300 mb-2">R$ 97,99</div>
            <p className="text-lg text-orange-200">
              Menos que uma consulta jurídica
            </p>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
          <div className="bg-neon-gradient bg-200% animate-gradient-shift rounded-3xl p-10 mb-12 shadow-neon hover:shadow-glow-intense transition-all duration-500 border-2 border-white/20">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <TrendingUp className="w-10 h-10 text-white animate-bounce" />
              <span className="text-3xl md:text-4xl font-bold">OFERTA ESPECIAL</span>
            </div>
            <p className="text-2xl mb-4">
              🎯 Mais de R$ 738 em bônus exclusivos
            </p>
            <p className="text-xl">
              ⏰ Aproveite enquanto ainda está disponível
            </p>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
          <Button
            onClick={handleFinalCTA}
            className="relative bg-cyber-gradient bg-200% animate-gradient-shift text-white font-bold rounded-3xl shadow-neon-green hover:shadow-glow-intense transition-all duration-500 transform hover:scale-105 animate-pulse-glow mb-8 border-2 border-success/30 h-auto whitespace-normal text-center text-xl p-6 md:text-3xl md:px-16 md:py-8"
          >
            <span className="relative z-10">👉 Quero Acessar o Guia Agora – R$ 97,99 👈</span>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-success/20 to-accent-cyber-green/20 blur-sm"></div>
          </Button>
        </div>

        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-lg">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6 text-success" />
              <span>Compra 100% segura via Hotmart</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6 text-brand-orange" />
              <span>Acesso imediato após o pagamento</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-accent-electric-blue" />
              <span>Garantia incondicional de 7 dias</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300">
            <p className="text-yellow-200 font-bold text-xl md:text-2xl leading-relaxed">
              ⚠️ <strong>ÚLTIMA CHAMADA:</strong> Não deixe sua aposentadoria para depois. Cada dia que passa é dinheiro que você deixa de receber.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}