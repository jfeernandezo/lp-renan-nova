import { CheckCircle, BookOpenCheck } from "lucide-react";

// Lista de conteúdos abordados para facilitar a manutenção
const courseContents = [
  "Aposentadoria por tempo ou idade",
  "Como transformar tempo comum em tempo PCD",
  "Modelos de atestados prontos para uso",
  "Avaliações médicas e sociais descomplicadas",
  "Passo a passo no site e app Meu INSS",
  "Como responder exigências e apresentar recurso",
];

export function AboutCourseSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Título e Subtítulo da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Guia Prático da Aposentadoria da PCD
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Criado por um ex-servidor do INSS, <span className="font-semibold text-gray-800">este guia</span> foi pensado para quem tem uma
            deficiência de longo prazo e quer garantir sua aposentadoria com clareza e autonomia.
          </p>
        </div>

        {/* Layout de 2 Colunas */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: Lista de Conteúdos */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Conteúdo abordado:
            </h3>
            <ul className="space-y-4">
              {courseContents.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna da Direita: Card de Destaque com o Novo Texto */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-md">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto flex items-center justify-center mb-6">
                <BookOpenCheck className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                O atalho para sua aposentadoria: todo o conhecimento de mais de 200 páginas de normas, transformado em um passo a passo prático.
              </h3>
              <p className="mt-4 text-gray-600">
                Aqui você encontra o essencial para agir com confiança e sem erros, explicado de forma simples e objetiva por quem conhece o sistema por dentro.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}