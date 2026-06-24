"use client"

import React from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const CASES = [
  {
    tag: "Software & CRM",
    title: "Concessionária Multitenant",
    description: "Desenvolvimento de plataforma de gestão e CRM para rede de concessionárias com integração de WhatsApp API Meta, automação de funil e acompanhamento de equipe em tempo real.",
    img: "/28c1fa1a-8cca-436a-a9d5-5f9f6873a783.png",
    metric: "+40% Conversão"
  },
  {
    tag: "Automação Meta",
    title: "Onboarding WhatsApp Flows",
    description: "Criação de fluxos interativos nativos do WhatsApp para qualificação de crédito imediata de clientes, dispensando formulários web externos.",
    img: "/26a89a1718451a651ccaea7e8b76f56c.jpg",
    metric: "92% Retenção"
  }
]

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
                {/* Image frame */}
                <div className="relative aspect-[16/10] overflow-hidden border border-off-black/10 dark:border-white/10 p-3 bg-white dark:bg-neutral-900 shadow-lg">
                  <div className="relative w-full h-full overflow-hidden border border-off-black/10 dark:border-white/10">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-750 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-off-black text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 border border-white">
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
