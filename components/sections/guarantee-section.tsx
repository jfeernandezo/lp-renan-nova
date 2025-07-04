"use client";

import { Shield, Clock, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function GuaranteeSection() {
  console.log("Rendering GuaranteeSection component");

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-gray mb-6">
            Compra segura, resultado real
          </h2>
        </div>

        <Card className="border-0 shadow-2xl bg-gradient-to-br from-success to-green-600 text-white overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Garantia Incondicional de 7 Dias
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Você terá acesso imediato ao curso na plataforma Hotmart, com garantia de 7 dias. 
                  Se achar que não é pra você, basta pedir o reembolso sem burocracia.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Acesso Imediato</h4>
                    <p className="opacity-90">
                      Receba o login e senha por e-mail em poucos minutos após a compra
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <RefreshCw className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Reembolso Fácil</h4>
                    <p className="opacity-90">
                      Não gostou? Não tem problema. Pediu reembolso, recebeu na conta
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Plataforma Segura</h4>
                    <p className="opacity-90">
                      Compra protegida pela Hotmart, líder em produtos digitais no Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
              <p className="text-center text-lg font-medium">
                🔒 <strong>100% Livre de Riscos</strong> - Você só tem a ganhar!
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-orange rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">SSL</span>
            </div>
            <h4 className="font-bold text-brand-dark-gray mb-2">Pagamento Seguro</h4>
            <p className="text-gray-600 text-sm">
              Seus dados protegidos com certificado SSL
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-success rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <h4 className="font-bold text-brand-dark-gray mb-2">Hotmart Garantida</h4>
            <p className="text-gray-600 text-sm">
              Plataforma com milhões de usuários satisfeitos
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">📱</span>
            </div>
            <h4 className="font-bold text-brand-dark-gray mb-2">Acesso Vitalício</h4>
            <p className="text-gray-600 text-sm">
              Acesse quando quiser, de qualquer dispositivo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}