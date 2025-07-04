import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dados para cada cartão de comparação, facilitando a manutenção
const comparisonData = [
  {
    status: "ARRISCADO",
    title: "Tentar sozinho, sem orientação",
    borderColor: "border-yellow-400",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    items: [
      "Alta chance de erro",
      "Processo mais longo",
      "Sem suporte especializado",
    ],
    itemIcon: <X className="w-5 h-5 text-red-500 flex-shrink-0" />,
    cost: "Tempo perdido",
    costDetail: "Meses de atraso",
  },
  {
    status: "RECOMENDADO",
    title: "Guia Prático da Aposentadoria da PCD",
    borderColor: "border-green-500",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
    isRecommended: true,
    items: [
      "Aposente-se com autonomia",
      "Acesso imediato ao conteúdo",
      "Bônus exclusivos inclusos",
      "Garantia de 7 dias",
    ],
    itemIcon: <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />,
    cost: "R$ 97,99",
    costDetail: "Pagamento único",
  },
];

export const ComparisonSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Você não precisa pagar caro por algo que pode fazer sozinho
          </h2>
          <p className="text-lg text-gray-600">
            Compare as alternativas e veja por que nosso guia é a melhor opção
          </p>
        </div>

        {/* Layout de Grid Responsivo */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
          {comparisonData.map((card, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 border-t-8 flex flex-col ${card.borderColor} ${card.isRecommended ? 'lg:scale-105' : ''}`}
            >
              {card.isRecommended && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Melhor Escolha
                </div>
              )}

              <div className="text-center mb-6">
                <p className={`font-bold uppercase tracking-widest ${card.textColor}`}>
                  {card.status}
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mt-4">{card.title}</h3>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    {card.itemIcon}
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">Custo</p>
                <p className={`text-4xl font-bold ${card.textColor}`}>{card.cost}</p>
                <p className="text-sm text-gray-500 mt-1">{card.costDetail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
           <Button size="lg" className="relative bg-neon-gradient text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 h-auto whitespace-normal text-center text-lg py-4 px-8 md:text-xl md:py-6 md:px-10">
          Quero o Guia com a Melhor Opção
        </Button>
        </div>
      </div>
    </section>
  );
};