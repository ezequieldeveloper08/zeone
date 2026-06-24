"use client"

import React, { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const SERVICES_DATA = [
  {
    num: "01",
    title: "Desenvolvimento",
    tagline: "Sistemas robustos e interfaces impecáveis.",
    description: "Criamos sites institucionais de alta conversão, landing pages autorais, sistemas web sob medida (SaaS, ERP, CRM) e aplicativos móveis rápidos (iOS/Android) pensados para escalar sua operação sem atritos técnicos.",
    tags: ["Sites", "Sistemas Web", "Aplicativos", "UX/UI Design"]
  },
  {
    num: "02",
    title: "WhatsApp Meta",
    tagline: "Comunicação oficial diretamente nos fluxos de venda.",
    description: "Integração direta com a API Oficial da Meta (WhatsApp Business Cloud). Criação de WhatsApp Flows (formulários e compras dentro do próprio WhatsApp), automações de disparo de mensagens, recuperação de carrinhos e fluxos de atendimento inteligente.",
    tags: ["API Oficial", "WhatsApp Flows", "Chatbots", "Templates Meta"]
  },
  {
    num: "03",
    title: "CRM Integrado",
    tagline: "A central de comando dos seus clientes.",
    description: "Implementamos e customizamos sistemas de CRM conectados aos canais de atendimento e automações. Centralize todo o histórico de conversas, pipelines de vendas, follow-ups de leads e atribuição de vendedores automaticamente.",
    tags: ["Gestão de Leads", "Funil de Vendas", "Relatórios em tempo real"]
  },
  {
    num: "04",
    title: "Social Media",
    tagline: "Conteúdo estratégico voltado para demanda real.",
    description: "Não fazemos posts bonitinhos aleatórios. Desenvolvemos estratégias editoriais e posicionamento digital para atrair o público ideal, nutrir leads e abastecer seus canais de vendas com demanda qualificada e consistente.",
    tags: ["Design Editorial", "Estratégia de Marca", "Copywriting", "Criação de Demanda"]
  }
]

export function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id="servicos" className="bg-off-white dark:bg-off-black py-20 md:py-32 border-b border-off-black/10 dark:border-white/10 paper-grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24 pb-8 border-b border-off-black/10 dark:border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-off-black/40 dark:text-white/40 block mb-2">
              [ Nossas Especialidades ]
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal uppercase text-off-black dark:text-white">
              O que <span className="italic text-electric-blue">fazemos</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-off-black/50 dark:text-white/50 max-w-sm">
            Toda a engenharia, design e automação que sua empresa precisa para deixar de gerenciar processos manuais.
          </p>
        </div>

        {/* Editorial Table Grid */}
        <div className="border-t border-off-black dark:border-white">
          {SERVICES_DATA.map((srv, idx) => {
            const isHovered = hoveredIdx === idx
            return (
              <div
                key={srv.num}
                className="group relative border-b border-off-black/10 dark:border-white/10 py-10 md:py-14 transition-all duration-300 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Hover Background Accent */}
                <div className="absolute inset-0 bg-electric-blue/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-start z-10">
                  {/* Number & Name */}
                  <div className="lg:col-span-5 flex items-baseline gap-6">
                    <span className="font-serif text-xl sm:text-2xl font-light text-off-black/40 dark:text-white/40 font-mono">
                      {srv.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase font-light text-off-black dark:text-white group-hover:text-electric-blue transition-colors duration-300">
                        {srv.title}
                      </h3>
                      <p className="font-sans text-xs font-semibold text-off-black/40 dark:text-white/45 uppercase tracking-wider mt-2">
                        {srv.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4 pt-2 lg:pt-0">
                    <p className="font-sans text-sm md:text-base leading-relaxed text-off-black/60 dark:text-white/70">
                      {srv.description}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-6 pt-2 lg:pt-0">
                    <div className="flex flex-wrap gap-1.5 lg:justify-end">
                      {srv.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] uppercase tracking-widest border border-off-black/20 dark:border-white/20 px-2 py-1 text-off-black/60 dark:text-white/60 group-hover:border-electric-blue/40 group-hover:text-electric-blue transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="size-10 rounded-full border border-off-black/20 dark:border-white/20 flex items-center justify-center group-hover:bg-electric-blue group-hover:border-electric-blue group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="size-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
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
