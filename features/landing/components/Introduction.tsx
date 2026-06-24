"use client"

import React from "react"
import { AlertCircle } from "lucide-react"

export function Introduction() {
  return (
    <section className="bg-off-white dark:bg-off-black py-20 md:py-32 border-b border-off-black/10 dark:border-white/10 paper-grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* Editorial Layout: Large question */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-28">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-electric-blue font-bold block mb-4">
              [ Diagnóstico Operacional ]
            </span>
            <h2 className="font-serif text-[36px] sm:text-[54px] md:text-[72px] leading-[0.95] font-normal uppercase text-off-black dark:text-white">
              Seu negócio <br />
              está <span className="italic text-electric-blue">crescendo</span>, <br />
              ou apenas ficando <br />
              mais <span className="font-sans font-bold tracking-tighter text-electric-blue">ocupado</span>?
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-16">
            <p className="font-sans text-sm md:text-base leading-relaxed text-off-black/60 dark:text-white/60">
              O excesso de processos manuais e planilhas desconectadas cria a ilusão de progresso. Operar não é crescer. Para escalar de verdade, a tecnologia precisa deixar de ser um custo e se tornar a infraestrutura do seu negócio.
            </p>
          </div>
        </div>

        {/* Stark positioning statements - Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-off-black dark:border-white">
          {/* Card 1 */}
          <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-off-black dark:border-white bg-off-white/30 dark:bg-off-black/30 hover:bg-electric-blue hover:text-white group transition-all duration-300">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-off-black/50 group-hover:text-white/70 dark:text-white/50 block mb-6">
              01 / SISTEMÁTICA
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light uppercase leading-none text-off-black dark:text-white group-hover:text-white mb-6">
              Empresas não <br />crescem por falta <br />de clientes.
            </h3>
            <p className="font-sans text-lg font-bold text-electric-blue group-hover:text-white leading-tight uppercase tracking-wide">
              Crescem devagar <br />por falta de sistema.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 md:p-12 lg:p-16 bg-off-white/30 dark:bg-off-black/30 hover:bg-electric-blue hover:text-white group transition-all duration-300">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-off-black/50 group-hover:text-white/70 dark:text-white/50 block mb-6">
              02 / INFRAESTRUTURA
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light uppercase leading-none text-off-black dark:text-white group-hover:text-white mb-6">
              Sua empresa <br />já tem clientes <br />ativos.
            </h3>
            <p className="font-sans text-lg font-bold text-electric-blue group-hover:text-white leading-tight uppercase tracking-wide">
              Agora ela <br />precisa de estrutura.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
