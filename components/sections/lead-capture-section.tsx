"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function LeadCaptureSection() {
  console.log("Rendering LeadCaptureSection component");
  const { isVisible, elementRef } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: ""
  });

  // NOVO: Estado para gerenciar o status do envio do formulário
  const [submissionStatus, setSubmissionStatus] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ status: 'idle', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Form field ${name} changed:`, value);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ATUALIZADO: Função de envio com fetch para o script PHP
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus({ status: 'loading', message: 'Enviando...' });

    try {
      const response = await fetch('https://seusite.com/capturar_lead.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Lança um erro se a resposta do servidor não for de sucesso (e.g., erro 400 ou 500)
        throw new Error(result.message || 'Ocorreu um erro no servidor.');
      }

      console.log('Success:', result);
      setSubmissionStatus({ status: 'success', message: 'Obrigado! Em breve você receberá as orientações personalizadas.' });

      // Limpa o formulário após o sucesso
      setFormData({ nome: "", email: "", whatsapp: "" });

    } catch (error) {
      console.error('Submission Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Falha ao enviar os dados. Tente novamente.';
      setSubmissionStatus({ status: 'error', message: errorMessage });
    }
  };

  return (
    <section 
      ref={elementRef}
      className="py-20 md:py-32 px-4 bg-gradient-to-br from-brand-orange via-accent-neon-orange to-brand-orange bg-200% animate-gradient-shift relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/15 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quer ajuda? Receba orientações <span className="text-yellow-300 drop-shadow-lg">personalizadas</span> antes de se inscrever!
          </h2>
          <p className="text-orange-100 text-xl md:text-2xl font-medium">
            Preencha os dados abaixo e receba dicas exclusivas para o seu caso específico
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-r from-brand-light-gray to-white p-8">
              <CardTitle className="text-2xl md:text-3xl text-brand-dark-gray font-bold">
                📋 Formulário de Orientação Gratuita
              </CardTitle>
              <div className="mt-4 p-4 bg-gradient-to-r from-success/10 to-accent-cyber-green/10 rounded-2xl border-2 border-success/20">
                <p className="text-success font-bold text-lg">
                  🎁 100% Gratuito - Sem Compromisso
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Campos do formulário (nenhuma mudança aqui) */}
                <div>
                  <Label htmlFor="nome" className="text-base font-bold text-brand-dark-gray mb-3 block">
                    Nome Completo *
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome completo"
                    required
                    className="text-lg py-4 px-6 rounded-2xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base font-bold text-brand-dark-gray mb-3 block">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Digite seu melhor e-mail"
                    required
                    className="text-lg py-4 px-6 rounded-2xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="text-base font-bold text-brand-dark-gray mb-3 block">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    required
                    className="text-lg py-4 px-6 rounded-2xl border-2 border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all duration-300"
                  />
                </div>

                {/* NOVO: Bloco para exibir mensagens de status */}
                {submissionStatus.status !== 'idle' && (
                  <div className={`text-center p-3 rounded-xl ${
                    submissionStatus.status === 'success' ? 'bg-green-100 text-green-800' :
                    submissionStatus.status === 'error' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    <p className="font-medium">{submissionStatus.message}</p>
                  </div>
                )}
                
                {/* ATUALIZADO: Botão com estado de loading */}
                <Button
                  type="submit"
                  disabled={submissionStatus.status === 'loading'}
                  className="w-full relative bg-neon-gradient text-white font-bold py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-auto whitespace-normal text-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {submissionStatus.status === 'loading' ? 'Enviando Aguarde...' : 'Quero Receber as Orientações'}
                  </span>
                </Button>

                <div className="text-center">
                  <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-100">
                    <p className="text-sm text-gray-600 font-medium">
                      🔒 Não se preocupe, nós odiamos spam tanto quanto você.
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}