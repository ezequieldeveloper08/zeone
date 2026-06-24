"use client"

import React from "react"
import Image from "next/image"
import { ArrowDownRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-off-white dark:bg-off-black transition-colors duration-300 py-16 md:py-24 border-b border-off-black/10 dark:border-white/10 paper-grain">
      {/* Editorial Decorative Grid lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 mx-auto max-w-[1400px] px-6 md:px-12">
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            className="h-full border-r border-off-black/[0.04] dark:border-white/[0.02] last:border-r-0"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Asymmetrical Oversized Serif Typography */}
        <div className="lg:col-span-8 space-y-8 z-10">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-electric-blue bg-electric-blue/10 px-3 py-1.5 dark:text-electric-blue dark:bg-electric-blue/10">
            Zeone Growth & Tech
          </span>
          
          <h1 className="font-serif text-[42px] sm:text-[64px] md:text-[84px] leading-[0.9] font-normal tracking-tight text-off-black dark:text-white uppercase">
            A maioria das <br />
            <span className="italic text-electric-blue">empresas</span> <br />
            trabalha mais. <br />
            <span className="font-sans font-bold tracking-tighter text-stroke text-off-black dark:text-white">Nós fazemos</span> <br />
            elas crescerem <br />
            <span className="underline decoration-electric-blue decoration-wavy underline-offset-8">melhor</span>.
          </h1>

          {/* Subtext */}
          <div className="pt-6 max-w-xl">
            <p className="font-mono text-xs uppercase tracking-widest text-off-black/40 dark:text-white/40 mb-3">
              Ecossistema Conectado:
            </p>
            <p className="font-sans text-lg md:text-xl font-medium leading-snug text-off-black/75 dark:text-white/80">
              Sites. Sistemas. Aplicativos. WhatsApp Oficial. IA. CRM. Social Media. <br />
              <span className="text-electric-blue font-bold">Tudo integrado em uma única infraestrutura de crescimento.</span>
            </p>
          </div>

          {/* Editorial Arrow Call to action */}
          <div className="pt-6 flex flex-wrap items-center gap-6">
            <a
              href="#contato"
              className="group flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-off-black dark:text-white"
            >
              <span>Escalar meu negócio agora</span>
              <div className="size-10 rounded-full border-2 border-off-black dark:border-white flex items-center justify-center group-hover:bg-electric-blue group-hover:border-electric-blue group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                <ArrowDownRight className="size-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Asymmetrical Editorial Collage */}
        <div className="lg:col-span-4 z-10 w-full mt-10 lg:mt-0">
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-off-black/10 dark:border-white/10 bg-off-white/50 dark:bg-off-black/50 p-4">
            
            {/* Fine line grid paper styling inside mockup box */}
            <div className="absolute inset-0 halftone-bg opacity-30 pointer-events-none" />
            
            {/* The main collage image */}
            <div className="relative w-full h-full overflow-hidden border-2 border-off-black dark:border-white shadow-2xl">
              <Image
                src="/28c1fa1a-8cca-436a-a9d5-5f9f6873a783.png"
                alt="Zeone Infrastructure"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </div>

            {/* Overlapping secondary image or block for editorial collage effect */}
            <div className="absolute -bottom-6 -left-6 w-1/2 aspect-square border-2 border-off-black dark:border-white bg-white dark:bg-off-black p-2 shadow-xl hidden sm:block">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/26a89a1718451a651ccaea7e8b76f56c.jpg"
                  alt="Creative engineering"
                  fill
                  className="object-cover sepia-[20%] hover:sepia-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Tag Overlay */}
            <div className="absolute -top-3 -right-3 bg-electric-blue text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 border border-off-black shadow-lg">
              v0.growth_node
            </div>
          </div>

          <div className="mt-8 border-t border-off-black/10 dark:border-white/10 pt-4 flex justify-between items-center text-[10px] font-mono uppercase text-off-black/50 dark:text-white/50">
            <span>[ ZEONE.V0 ]</span>
            <span>INFRAESTRUTURA DIGITAL</span>
          </div>
        </div>

      </div>
    </section>
  )
}
