"use client"

import React from "react"
import { Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote: "A Zeone mudou nossa perspectiva de crescimento. Antes gerenciavamos leads de forma manual em planilhas que se perdiam. Com a API do WhatsApp integrada ao CRM deles, dobramos nossa velocidade de fechamento com a mesma equipe.",
    author: "Ricardo Mendes",
    role: "Diretor Comercial, Grupo Aliança",
    metric: "120% ROI no 1º Trimestre"
  },
  {
    quote: "O agendamento por WhatsApp Flows foi revolucionário para nossa marca local. Hoje a IA responde as dúvidas frequentes e qualifica o lead, repassando para o vendedor humano apenas o cliente pronto para fechar a compra.",
    author: "Juliana K.",
    role: "Fundadora, JK Estética Avançada",
    metric: "-70% Tempo Operacional"
  }
]

export function Testimonials() {
  return (
    <section className="bg-off-black text-off-white py-20 md:py-32 border-b border-white/10 relative paper-grain">
      <div className="absolute inset-0 halftone-bg opacity-5 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24 pb-8 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-electric-blue block mb-2">
              [ Relatos de Impacto ]
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal uppercase">
              Quem <span className="italic text-electric-blue">cresce</span> conosco
            </h2>
          </div>
          <p className="font-mono text-xs text-white/50 max-w-sm">
            Depoimentos reais de executivos e fundadores que trocaram a bagunça operacional por infraestrutura digital.
          </p>
        </div>

        {/* Quotes Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 border border-white/20 bg-off-black/30 flex flex-col justify-between space-y-8 relative hover:border-white transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 size-8 bg-electric-blue text-white flex items-center justify-center font-bold">
                “
              </div>

              <p className="font-serif text-lg sm:text-xl leading-relaxed font-light italic opacity-95">
                {t.quote}
              </p>

              <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                    {t.author}
                  </h4>
                  <p className="font-sans text-[10px] text-white/40">
                    {t.role}
                  </p>
                </div>
                
                <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
