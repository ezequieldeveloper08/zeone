"use client"

import React from "react"
import { ArrowUpRight } from "lucide-react"

const CASES = [
  {
    tag: "Software & CRM",
    title: "Concessionária Multitenant",
    description: "Desenvolvimento de plataforma de gestão e CRM para rede de concessionárias com integração de WhatsApp API Meta, automação de funil e acompanhamento de equipe em tempo real.",
    metric: "+40% Conversão"
  },
  {
    tag: "Automação Meta",
    title: "Onboarding WhatsApp Flows",
    description: "Criação de fluxos interativos nativos do WhatsApp para qualificação de crédito imediata de clientes, dispensando formulários web externos.",
    metric: "92% Retenção"
  }
]

function CaseVisual({ index }: { index: number }) {
  if (index === 0) {
    // Case 1: CRM Kanban Board Mockup
    return (
      <div className="w-full h-full bg-neutral-950 text-white p-6 flex flex-col justify-between select-none">
        <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-4">
          <span className="text-[8px] font-mono uppercase tracking-widest text-white/40">Funil de Atendimento CRM</span>
          <span className="text-[8px] font-mono text-emerald-400 flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Ativo
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 flex-1 items-stretch">
          <div className="bg-neutral-900/60 p-2.5 border border-white/5 flex flex-col gap-2 rounded">
            <span className="text-[7px] font-bold text-white/30 uppercase tracking-wider">Novos Leads</span>
            <div className="bg-neutral-900 p-2 border border-white/5 text-[8px] space-y-1">
              <span className="block font-semibold text-white/90">Ezequiel Pires</span>
              <span className="block text-[6px] text-white/40 font-mono">WhatsApp Meta</span>
            </div>
            <div className="bg-neutral-900 p-2 border border-white/5 text-[8px] space-y-1">
              <span className="block font-semibold text-white/90">Yasmin Lopes</span>
              <span className="block text-[6px] text-white/40 font-mono">Instagram CRM</span>
            </div>
          </div>
          <div className="bg-neutral-900/60 p-2.5 border border-white/5 flex flex-col gap-2 rounded">
            <span className="text-[7px] font-bold text-electric-blue uppercase tracking-wider">Em Atendimento</span>
            <div className="bg-neutral-900 p-2 border-l-2 border-l-electric-blue border-y border-r border-white/5 text-[8px] space-y-1">
              <span className="block font-semibold text-white/90">Marcos Lima</span>
              <span className="block text-[6px] text-electric-blue font-bold">IA Ativa</span>
            </div>
          </div>
          <div className="bg-neutral-900/60 p-2.5 border border-white/5 flex flex-col gap-2 rounded">
            <span className="text-[7px] font-bold text-emerald-500 uppercase tracking-wider">Fechamento</span>
            <div className="bg-neutral-900 p-2 border-l-2 border-l-emerald-500 border-y border-r border-white/5 text-[8px] space-y-1">
              <span className="block font-semibold text-white/90">Gisele Reis</span>
              <span className="block text-[6px] text-emerald-400 font-mono">Proposta Aceita</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Case 2: WhatsApp Flows visualizer
  return (
    <div className="w-full h-full bg-neutral-950 text-white p-6 flex flex-col justify-between select-none">
      <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-4">
        <span className="text-[8px] font-mono uppercase tracking-widest text-white/40">Fluxo de Crédito WhatsApp Flows</span>
        <span className="text-[8px] font-mono text-electric-blue">API Meta</span>
      </div>
      <div className="flex flex-col gap-3 flex-1 justify-center items-center max-w-xs mx-auto text-center w-full">
        <div className="w-full bg-neutral-900 border border-white/5 p-2.5 rounded flex items-center gap-2 justify-between">
          <span className="text-[7px] font-mono text-white/40">PASSO 01</span>
          <span className="text-[9px] font-bold">Simulação de Parcelas</span>
          <span className="text-[7px] text-emerald-400 font-bold">✓ NATIVO</span>
        </div>
        <div className="h-4 w-0.5 bg-electric-blue" />
        <div className="w-full bg-neutral-900 border border-electric-blue/40 p-2.5 rounded flex items-center gap-2 justify-between shadow-lg shadow-electric-blue/5">
          <span className="text-[7px] font-mono text-electric-blue font-bold">PASSO 02</span>
          <span className="text-[9px] font-bold text-electric-blue">Envio de Documentação</span>
          <span className="text-[7px] bg-electric-blue text-white px-1.5 py-0.5 font-bold rounded-sm">FLOWS</span>
        </div>
        <div className="h-4 w-0.5 bg-white/10" />
        <div className="w-full bg-neutral-900 border border-white/5 p-2.5 rounded flex items-center gap-2 justify-between opacity-50">
          <span className="text-[7px] font-mono text-white/40">PASSO 03</span>
          <span className="text-[9px] font-bold">Aprovação Automática</span>
          <span className="text-[7px] text-white/30">PENDENTE</span>
        </div>
      </div>
    </div>
  )
}

export function CaseStudies() {
  return (
    <section className="bg-off-white dark:bg-off-black py-20 md:py-32 border-b border-off-black/10 dark:border-white/10 paper-grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24 pb-8 border-b border-off-black/10 dark:border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-off-black/40 dark:text-white/40 block mb-2">
              [ Casos de Sucesso ]
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal uppercase text-off-black dark:text-white">
              Projetos em <span className="italic text-electric-blue">foco</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-off-black/50 dark:text-white/50 max-w-sm">
            Cases reais que provam como a infraestrutura técnica integrada e o posicionamento de marca geram crescimento previsível.
          </p>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {CASES.map((project, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={project.title}
                className={`lg:col-span-6 space-y-6 group cursor-pointer ${
                  !isEven ? "lg:translate-y-12" : ""
                }`}
              >
                {/* Visual frame instead of static out-of-context image */}
                <div className="relative aspect-[16/10] overflow-hidden border border-off-black/10 dark:border-white/10 p-3 bg-white dark:bg-neutral-900 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="relative w-full h-full overflow-hidden border border-off-black/10 dark:border-white/10">
                    <CaseVisual index={idx} />
                    <div className="absolute top-4 left-4 bg-off-black text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 border border-white z-10">
                      {project.metric}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-electric-blue font-bold">
                      {project.tag}
                    </span>
                    <h3 className="font-serif text-2xl uppercase tracking-wide text-off-black dark:text-white group-hover:text-electric-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-off-black/60 dark:text-white/60 leading-relaxed max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="size-10 rounded-full border border-off-black/10 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-electric-blue group-hover:text-white group-hover:border-electric-blue transition-all duration-300">
                    <ArrowUpRight className="size-4 transform group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
