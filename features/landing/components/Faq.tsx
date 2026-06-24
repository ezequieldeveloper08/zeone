"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"

const FAQ_DATA = [
  {
    question: "O que é e qual a vantagem da API Oficial do WhatsApp?",
    answer: "A API Oficial (WhatsApp Business Cloud API) é a única forma autorizada e estável fornecida pela Meta. Diferente de sistemas piratas, a API oficial elimina riscos de banimento, permite múltiplos operadores simultâneos no mesmo número, oferece o selo verde de verificação oficial e possibilita o envio de WhatsApp Flows (formulários nativos) e disparos automáticos via webhooks."
  },
  {
    question: "Como a inteligência artificial (Gemini) é treinada para minha empresa?",
    answer: "Carregamos o cérebro da IA com toda a base de conhecimento específica da sua marca: tabelas de preços, estoque de veículos, PDFs de especificações técnicas, tom de voz da empresa e regras de agendamento. Assim, a IA consegue responder dúvidas altamente técnicas e específicas sem inventar informações (sem alucinar) e de forma 100% natural."
  },
  {
    question: "Vocês desenvolvem sistemas sob medida ou usam templates?",
    answer: "Trabalhamos de forma híbrida e focada em resultados. Para sistemas core (como o CRM multitenant de concessionárias), criamos código limpo e escalável em Next.js e NestJS sob medida. Para automações e marketing digital, integramos soluções robustas do mercado para garantir velocidade de entrega e estabilidade operacional."
  },
  {
    question: "O que acontece se um cliente da IA precisar de atendimento humano?",
    answer: "O sistema possui um mecanismo automático de Handoff (transferência). Assim que o cliente demonstra intenção de compra direta ou solicita falar com uma pessoa (ou se o vendedor envia uma mensagem manual), o robô de IA é imediatamente pausado para aquele telefone específico e o chat é atribuído ao atendente humano responsável no CRM, garantindo um atendimento contínuo e sem conflitos."
  },
  {
    question: "Quanto tempo demora para implementar o ecossistema comercial?",
    answer: "O tempo médio de implementação varia de 3 a 6 semanas, dependendo da complexidade das integrações (ERP existente, API Meta e treinamento personalizado da IA). Nossos projetos são entregues em etapas modulares, garantindo que você já veja resultados nas primeiras duas semanas."
  }
]

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq" className="bg-off-white dark:bg-off-black py-20 md:py-32 border-b border-off-black/10 dark:border-white/10 paper-grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Header Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-electric-blue font-bold block">
              [ Perguntas Frequentes ]
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal uppercase text-off-black dark:text-white leading-none">
              Dúvidas <br />
              <span className="italic text-electric-blue">Comuns</span>
            </h2>
            <p className="font-sans text-xs text-off-black/50 dark:text-white/50 leading-relaxed max-w-sm">
              Tem alguma pergunta específica sobre integração comercial ou automações? Entre em contato para uma conversa detalhada.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 border-t border-off-black dark:border-white">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <div
                  key={idx}
                  className="border-b border-off-black/10 dark:border-white/10 py-6 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left gap-4 group cursor-pointer"
                  >
                    <h3 className="font-serif text-lg sm:text-xl uppercase font-semibold tracking-wide text-off-black dark:text-white group-hover:text-electric-blue transition-colors">
                      {faq.question}
                    </h3>
                    <div className="size-8 rounded-full border border-off-black/10 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-electric-blue transition-colors">
                      {isOpen ? (
                        <Minus className="size-4 text-electric-blue" />
                      ) : (
                        <Plus className="size-4 group-hover:text-electric-blue" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-sm leading-relaxed text-off-black/60 dark:text-white/60 max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
