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
            Transformamos <br />
            <span className="italic text-electric-blue">processos</span> <br />
            em <br />
            <span className="font-sans font-bold tracking-tighter text-electric-blue">crescimento</span>.
          </h1>

          {/* Subtext */}
          <div className="pt-6 max-w-xl">
            <p className="font-sans text-lg md:text-xl font-medium leading-snug text-off-black/75 dark:text-white/80">
              Com IA, automação e software sob medida.
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

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-4 z-10 w-full mt-10 lg:mt-0">
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden shadow-2xl">
            <Image
              src="/hero.png"
              alt="Zeone Hero Image"
              fill
              priority
              className="object-cover transition-transform duration-500 hover:scale-102"
            />
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
