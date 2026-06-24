"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, ArrowRight } from "lucide-react"

export function ContactCTA() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    empresa: "",
    mensagem: ""
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate API lead submission
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contato" className="bg-off-black text-off-white py-20 md:py-32 relative overflow-hidden paper-grain">
      {/* Halftone effect */}
      <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Big Headline */}
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] uppercase text-electric-blue">
            [ Chamado para Ação ]
          </span>

          <h2 className="font-serif text-[42px] sm:text-[60px] md:text-[76px] leading-[0.9] font-normal uppercase">
            Seus concorrentes <br />
            ainda estão <br />
            respondendo <br />
            <span className="font-sans font-bold tracking-tighter text-electric-blue">manualmente</span>.
          </h2>

          <p className="font-sans text-sm md:text-base leading-relaxed text-off-white/60 max-w-lg">
            Enquanto eles perdem leads por demora no atendimento, sua empresa pode operar com fluxos instantâneos e equipes 100% focadas em fechar negócios qualificados.
          </p>

          <div className="pt-8 flex items-center gap-4 text-xs font-mono uppercase text-white/40">
            <span>[ ZEONE.V0 ]</span>
            <span>•</span>
            <span>INFRAESTRUTURA DE CRESCIMENTO</span>
          </div>
        </div>

        {/* Right Column: Editorial Contact Form */}
        <div className="lg:col-span-6 w-full">
          <div className="border-2 border-white/90 p-8 sm:p-10 bg-neutral-950 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="size-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle2 className="size-8 text-emerald-400" />
                </div>
                <h3 className="font-serif text-2xl uppercase tracking-wider text-white">Solicitação Recebida</h3>
                <p className="font-sans text-xs text-white/50 max-w-xs leading-relaxed">
                  Um especialista de crescimento da Zeone entrará em contato via WhatsApp nas próximas 2 horas. Prepare-se para escalar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="pb-4 border-b border-white/10">
                  <h3 className="font-serif text-xl uppercase tracking-wider text-white">Solicitar Diagnóstico</h3>
                  <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest mt-1">Preencha os detalhes da sua operação</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-white/50 uppercase font-mono tracking-wider">Seu Nome</label>
                      <Input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, nome: e.target.value})}
                        placeholder="Ex: João Silva"
                        className="h-10 text-xs bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus-visible:ring-electric-blue focus-visible:border-electric-blue"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-white/50 uppercase font-mono tracking-wider">WhatsApp com DDD</label>
                      <Input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, whatsapp: e.target.value})}
                        placeholder="Ex: (11) 99999-9999"
                        className="h-10 text-xs bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus-visible:ring-electric-blue focus-visible:border-electric-blue"
                      />
                    </div>
                  </div>

                  {/* Empresa */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-white/50 uppercase font-mono tracking-wider">Nome da Empresa</label>
                    <Input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, empresa: e.target.value})}
                      placeholder="Ex: Minha Empresa Ltda"
                      className="h-10 text-xs bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none focus-visible:ring-electric-blue focus-visible:border-electric-blue"
                    />
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold text-white/50 uppercase font-mono tracking-wider">Qual seu maior gargalo hoje?</label>
                    <Textarea
                      required
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, mensagem: e.target.value})}
                      placeholder="Ex: Demora para responder clientes no WhatsApp e perda de leads."
                      className="text-xs bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-none resize-none focus-visible:ring-electric-blue focus-visible:border-electric-blue"
                    />
                  </div>
                </div>

                {/* Main Action Button */}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 bg-white text-off-black hover:bg-electric-blue hover:text-white font-bold uppercase text-xs tracking-[0.2em] transition-all duration-300 rounded-none flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  {submitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <span>Quero escalar meu negócio</span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}
