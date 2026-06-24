"use client"

import React from "react"
import { CheckCircle2, MessageSquare, ShieldAlert, Cpu } from "lucide-react"

export function WhatsAppAutomation() {
  return (
    <section id="whatsapp" className="bg-off-black text-off-white py-20 md:py-32 border-b border-white/10 relative overflow-hidden paper-grain">
      {/* Decorative halftone or blueprint background grid */}
      <div className="absolute inset-0 halftone-bg opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Visual Mockup of WhatsApp Flows (Clean, High Contrast, Vector representation) */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm border-4 border-white/95 rounded-[40px] bg-off-black p-3.5 shadow-[0_0_50px_rgba(0,82,255,0.15)] overflow-hidden">
            {/* Phone Speaker & Camera notches */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/95 rounded-b-2xl z-20 flex items-center justify-center">
              <span className="w-12 h-1 bg-off-black rounded-full mb-1" />
            </div>

            {/* Chat Screen */}
            <div className="rounded-[32px] bg-neutral-900 border border-white/10 aspect-[9/19] p-4 flex flex-col justify-between overflow-hidden relative">
              
              {/* WhatsApp Header */}
              <div className="flex items-center gap-2 pb-3 border-b border-white/5 pt-2">
                <div className="size-8 rounded-full bg-electric-blue flex items-center justify-center font-bold text-xs">
                  ZN
                </div>
                <div className="leading-tight flex-1">
                  <h4 className="text-[11px] font-bold tracking-wide uppercase">Zeone Oficial</h4>
                  <span className="text-[9px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Conta Comercial Oficial
                  </span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1 text-[10px]">
                
                {/* Outbound AI Message */}
                <div className="flex gap-2 max-w-[85%]">
                  <div className="bg-neutral-800 p-2.5 rounded-2xl rounded-tl-none border border-white/5 leading-normal">
                    Olá! Vejo que você tem interesse em escalar seu negócio. Gostaria de montar seu fluxo de agendamento automático?
                  </div>
                </div>

                {/* User Message */}
                <div className="flex gap-2 max-w-[85%] ml-auto">
                  <div className="bg-electric-blue text-white p-2.5 rounded-2xl rounded-tr-none leading-normal">
                    Sim! Preciso integrar com meu CRM e agendar reuniões direto no WhatsApp.
                  </div>
                </div>

                {/* Flow Trigger Form (WhatsApp Flows Representation) */}
                <div className="bg-neutral-800/80 border border-white/10 rounded-2xl p-3.5 space-y-3 shadow-lg">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
                    <Cpu className="size-3 text-electric-blue animate-pulse" />
                    <span className="text-[9px] font-bold tracking-wider uppercase text-electric-blue">Formulário Interno Meta</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <span className="text-[8px] text-white/50 uppercase font-mono">Nome da Empresa</span>
                      <div className="h-7 border border-white/10 bg-off-black/40 rounded px-2 flex items-center text-white/90">
                        Zeone Corp
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] text-white/50 uppercase font-mono">Setor de Atuação</span>
                      <div className="h-7 border border-white/10 bg-off-black/40 rounded px-2 flex items-center text-white/90 justify-between">
                        <span>Tecnologia & Growth</span>
                        <span className="text-[8px] text-white/40">▼</span>
                      </div>
                    </div>
                  </div>

                  <button type="button" className="w-full h-8 bg-electric-blue text-white rounded font-bold text-[9px] uppercase tracking-wider hover:bg-electric-blue/90 transition-colors">
                    Enviar Agendamento
                  </button>
                </div>

                {/* Automation response */}
                <div className="flex gap-2 max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="bg-neutral-800 p-2.5 rounded-2xl rounded-tl-none border border-white/5 leading-normal">
                    ✓ Agendamento confirmado para Amanhã às 14h. Link gerado no seu CRM e notificação enviada para a equipe de vendas!
                  </div>
                </div>

              </div>

              {/* Chat Input */}
              <div className="h-9 border-t border-white/5 flex items-center justify-between px-1 pt-2">
                <span className="text-[9px] text-white/30">Digite uma resposta...</span>
                <div className="size-6 rounded-full bg-electric-blue flex items-center justify-center text-white font-bold">
                  →
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Editorial Text */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-electric-blue">
            02 / AUTOMAÇÃO META
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase leading-none">
            A API Oficial do <br />
            <span className="italic text-electric-blue">WhatsApp</span> é a ponte <br />
            de crescimento.
          </h2>

          <p className="font-sans text-sm md:text-base leading-relaxed text-off-white/60">
            Esqueça chips bloqueados ou hacks instáveis. A API Oficial Meta (Cloud API) garante estabilidade absoluta para sua empresa disparar lembretes de cobrança, recuperar carrinhos, criar WhatsApp Flows interativos e conectar múltiplos atendentes humanos em um só painel.
          </p>

          {/* Bullet List */}
          <div className="pt-4 space-y-4 font-sans text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-electric-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">WhatsApp Flows</h4>
                <p className="text-off-white/50 text-[11px] mt-0.5">Permita que seus clientes comprem, agendem ou preencham formulários complexos sem precisar sair do aplicativo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-electric-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Estabilidade e Selo de Verificação</h4>
                <p className="text-off-white/50 text-[11px] mt-0.5">Sua marca oficial com selo verde verificado. Adequação 100% à LGPD e livre de riscos de banimento de número.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-electric-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Disparos Automáticos Massivos</h4>
                <p className="text-off-white/50 text-[11px] mt-0.5">Notificações automatizadas integradas com ERP/CRM por webhook de compras ou ações do cliente.</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="#contato"
              className="inline-block border-2 border-white bg-transparent text-white font-bold uppercase text-[10px] tracking-widest px-8 py-3.5 hover:bg-white hover:text-off-black transition-colors rounded-none"
            >
              Criar meu fluxo de WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
