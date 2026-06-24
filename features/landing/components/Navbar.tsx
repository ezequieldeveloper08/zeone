"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-off-black/10 bg-off-white/80 backdrop-blur-md dark:border-white/10 dark:bg-off-black/80 transition-colors duration-300">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex h-20 items-center justify-between">
        <Link href="/" className="relative h-8 w-36 transition-opacity hover:opacity-85">
          {/* Logo changes color based on theme */}
          <div className="block dark:hidden">
            <Image
              src="/zeone-dark.svg"
              alt="Zeone Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="hidden dark:block">
            <Image
              src="/zeone.svg"
              alt="Zeone Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Editorial-style minimal navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-off-black/60 dark:text-white/60">
          <Link href="#servicos" className="hover:text-electric-blue dark:hover:text-electric-blue transition-colors">
            Serviços
          </Link>
          <Link href="#whatsapp" className="hover:text-electric-blue dark:hover:text-electric-blue transition-colors">
            WhatsApp
          </Link>
          <Link href="#ia" className="hover:text-electric-blue dark:hover:text-electric-blue transition-colors">
            Inteligência Artificial
          </Link>
          <Link href="#processos" className="hover:text-electric-blue dark:hover:text-electric-blue transition-colors">
            Processos
          </Link>
          <Link href="#faq" className="hover:text-electric-blue dark:hover:text-electric-blue transition-colors">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contato">
            <Button
              variant="outline"
              className="h-10 px-6 border-2 border-off-black bg-transparent text-off-black font-bold uppercase text-[10px] tracking-wider rounded-none hover:bg-off-black hover:text-off-white transition-all duration-300 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-off-black"
            >
              Falar com Especialista
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
