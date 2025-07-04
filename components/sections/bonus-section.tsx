"use client";

import { Bot, Calculator, ArrowRightLeft, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BonusSection() {
  console.log("Rendering BonusSection component");

  const bonuses = [
    {
      icon: <Bot className="w-12 h-12 text-brand-orange" />,
      title: "Agente de IA para revisar seu atestado",
      description: "Inteligência artificial exclusiva que analisa seu atestado médico e sugere melhorias para aumentar suas chances de aprovação",
      value: "R$ 297"
    },
    {
      icon: <Calculator className="w-12 h-12 text-success" />,
      title: "Calculadora do tempo de contribuição PCD",
      description: "Ferramenta automatizada que calcula exatamente quanto tempo você tem de contribuição como PCD e quanto falta para se aposentar",
      value: "R$ 197"
    },
    {
      icon: <ArrowRightLeft className="w-12 h-12 text-blue-500" />,
      title: "Conversor de tempo insalubre",
      description: "Converta automaticamente seu tempo de trabalho em condições insalubres para acelerar sua aposentadoria",
      value: "R$ 147"
    },
    {
      icon: <FileText className="w-12 h-12 text-purple-500" />,
      title: "Modelos prontos de documentos e laudos",
      description: "Biblioteca completa com modelos editáveis de atestados, laudos e documentos necessários para o processo",
      value: "R$ 97"
    }
  ];

  const totalValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('R$ ', ''));
  }, 0);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-brand-light-gray to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-gray mb-6">
            Ferramentas que colocam você na frente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Além do curso completo, você recebe bônus exclusivos no valor de <span className="text-brand-orange font-bold">R$ {totalValue}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-brand-orange shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {bonus.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg font-bold text-brand-dark-gray flex-1">
                    {bonus.title}
                  </CardTitle>
                  <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-bold ml-4">
                    {bonus.value}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed">
                  {bonus.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-success to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🎁 Valor Total dos Bônus: R$ {totalValue}
          </h3>
          <p className="text-xl opacity-90">
            Mas hoje você leva tudo por apenas <span className="font-bold text-2xl">R$ 97,99</span>
          </p>
        </div>
      </div>
    </section>
  );
}