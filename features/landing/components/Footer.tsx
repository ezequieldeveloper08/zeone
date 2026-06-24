"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-off-black text-off-white/80 py-16 border-t border-white/10 paper-grain">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-12 border-b border-white/10">
          
          {/* Logo column */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative h-8 w-36">
              <Image
                src="/zeone.svg"
                alt="Zeone Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-sans text-xs text-white/40 max-w-sm leading-relaxed">
              Infraestrutura digital, automações Meta e sistemas sob medida para estruturar e acelerar o crescimento de empresas locais e nacionais.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/50">
              [ Links Rápidos ]
            </h4>
            <ul className="space-y-2 font-sans text-xs">
              <li>
                <Link href="#servicos" className="hover:text-electric-blue transition-colors">Serviços</Link>
              </li>
              <li>
                <Link href="#whatsapp" className="hover:text-electric-blue transition-colors">WhatsApp API</Link>
              </li>
              <li>
                <Link href="#ia" className="hover:text-electric-blue transition-colors">Inteligência Artificial</Link>
              </li>
              <li>
                <Link href="#processos" className="hover:text-electric-blue transition-colors">Processos Comerciais</Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/50">
              [ Contato & Sede ]
            </h4>
            <ul className="space-y-2 font-sans text-xs text-white/45">
              <li>contato@zeone.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>Catalão, GO • São Paulo, SP</li>
              <li>Zeone Tecnologia e Crescimento Ltda.</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/30">
          <span>© {new Date().getFullYear()} ZEONE. TODOS OS DIREITOS RESERVADOS.</span>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidade" className="hover:underline">POLÍTICA DE PRIVACIDADE</Link>
            <Link href="/termos-de-uso" className="hover:underline">TERMOS DE USO</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
