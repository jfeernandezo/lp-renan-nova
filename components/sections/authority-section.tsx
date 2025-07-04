"use client";

import { Card, CardContent } from "@/components/ui/card";

export function AuthoritySection() {
  console.log("Rendering AuthoritySection component");

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-gray mb-6">
            Criado por quem conhece o sistema por dentro
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-0">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-brand-orange to-orange-600 rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <img
                      src="/renan-felix.png" // Lembre-se de colocar a foto na pasta 'public'
                      alt="Foto de Renan Félix"
                      className="w-64 h-64 rounded-full mx-auto mb-4 object-cover object-top border-4 border-white/30"
                    />
                    <h3 className="text-2xl font-bold">Renan Félix</h3>
                    <p className="text-lg opacity-90">Ex-Servidor do INSS</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Especialista em Previdência</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                      <span>+10 anos de experiência</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <blockquote className="text-xl md:text-2xl text-brand-dark-gray leading-relaxed mb-8 font-medium italic">
              "Durante anos trabalhei dentro do INSS e vi muitos segurados perderem tempo com pedidos errados. Criei este curso para você não depender mais de advogado e conquistar sua aposentadoria com confiança."
            </blockquote>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark-gray mb-2">Experiência Prática</h4>
                  <p className="text-gray-600">
                    Mais de 10 anos analisando processos de aposentadoria PCD no INSS
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark-gray mb-2">Conhecimento Interno</h4>
                  <p className="text-gray-600">
                    Conhece todos os critérios e procedimentos internos do INSS
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark-gray mb-2">Resultados Comprovados</h4>
                  <p className="text-gray-600">
                    Já ajudou centenas de pessoas a conquistarem sua aposentadoria PCD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}