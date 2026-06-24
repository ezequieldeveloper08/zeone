"use client"

import React from "react"
import { Brain, Sparkles, UserCheck, ShieldCheck } from "lucide-react"

export function AiAutomation() {
  return (
    <section id="ia" className="bg-off-white dark:bg-off-black py-20 md:py-32 border-b border-off-black/10 dark:border-white/10 paper-grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* Editorial Big Typography */}
        <div className="border border-off-black dark:border-white p-8 sm:p-12 md:p-16 relative overflow-hidden bg-off-white/40 dark:bg-off-black/40">
          <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none" />
          
          <span className="font-mono text-xs uppercase tracking-widest text-electric-blue font-bold block mb-8">
            [ Escalabilidade de Atendimento ]
          </span>

          <h2 className="font-serif text-[42px] sm:text-[68px] md:text-[96px] leading-[0.85] font-normal uppercase text-off-black dark:text-white mb-10 max-w-4xl">
            Atenda <br />
            <span className="italic text-electric-blue">100 clientes</span>. <br />
            Sem contratar <br />
            100 pessoas.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 border-t border-off-black/10 dark:border-white/10">
            <div className="lg:col-span-6">
              <p className="font-sans text-lg md:text-xl font-bold uppercase text-off-black/75 dark:text-white/80">
                Automações inteligentes integradas ao WhatsApp, CRM e operação comercial.
              </p>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-sm md:text-base text-off-black/50 dark:text-white/50 leading-relaxed">
                Nossos agentes inteligentes são treinados nas regras do seu negócio. Eles respondem instantaneamente, qualificam leads no funil de vendas, geram links de pagamento e agendam visitas. Sem fila de espera, 24 horas por dia.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-24">
          
          {/* Card 1 */}
          <div className="p-8 border border-off-black/10 dark:border-white/10 flex flex-col justify-between h-72 hover:border-electric-blue dark:hover:border-electric-blue transition-colors duration-300">
            <div className="size-12 rounded-full bg-violet-50 dark:bg-violet-950/20 flex items-center justify-center">
              <Brain className="size-6 text-violet-600 dark:text-violet-400" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl uppercase font-bold text-off-black dark:text-white">
                Inteligência Natural
              </h3>
              <p className="font-sans text-xs text-off-black/60 dark:text-white/55 leading-relaxed">
                Configurado com modelos de linguagem avançados (Gemini 2.0). Respostas contextualizadas e humanizadas baseadas em regras de negócios complexas.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 border border-off-black/10 dark:border-white/10 flex flex-col justify-between h-72 hover:border-electric-blue dark:hover:border-electric-blue transition-colors duration-300">
            <div className="size-12 rounded-full bg-emerald-50 dark:bg-emerald-950/20 flex items-center justify-center">
              <UserCheck className="size-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl uppercase font-bold text-off-black dark:text-white">
                Handoff Integrado
              </h3>
              <p className="font-sans text-xs text-off-black/60 dark:text-white/55 leading-relaxed">
                Transição fluida: a IA transfere automaticamente para um atendente humano quando identifica intenção de compra imediata, pausando o agente de IA para evitar atritos.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 border border-off-black/10 dark:border-white/10 flex flex-col justify-between h-72 hover:border-electric-blue dark:hover:border-electric-blue transition-colors duration-300">
            <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-950/20 flex items-center justify-center">
              <Sparkles className="size-6 text-electric-blue" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl uppercase font-bold text-off-black dark:text-white">
                Sincronização CRM
              </h3>
              <p className="font-sans text-xs text-off-black/60 dark:text-white/55 leading-relaxed">
                Toda conversa atualiza o status do funil de vendas. Leads qualificados são inseridos automaticamente no pipeline dos vendedores corretos com sumário de intenção.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
