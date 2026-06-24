"use client"

import React from "react"
import { ArrowDown } from "lucide-react"

const FLOW_STEPS = [
  {
    step: "01",
    channel: "Instagram",
    description: "Atraia potenciais clientes através de posicionamento estratégico de marca e anúncios direcionados.",
    action: "Geração de Demanda"
  },
  {
    step: "02",
    channel: "WhatsApp",
    description: "Primeiro contato imediato controlado por nossa IA integrada para responder dúvidas e qualificar interesse.",
    action: "Atendimento Automatizado"
  },
  {
    step: "03",
    channel: "CRM",
    description: "Os dados do lead e o histórico da conversa são salvos. O status do funil de vendas é atualizado.",
    action: "Centralização de Dados"
  },
  {
    step: "04",
    channel: "Equipe",
    description: "Distribuição automática do lead qualificado para os vendedores. Alerta enviado com resumo do caso.",
    action: "Handoff Comercial"
  },
  {
    step: "05",
    channel: "Venda",
    description: "Fechamento ágil com o cliente já qualificado, munido de toda a infraestrutura de pagamento necessária.",
    action: "Receita Escalável"
  }
]

export function Process() {
  return (
    <section id="processos" className="bg-off-black text-off-white py-20 md:py-32 border-b border-white/10 relative paper-grain">
      <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20 md:mb-32">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-electric-blue block mb-4">
              [ Conectividade de Operação ]
            </span>
            <h2 className="font-serif text-[36px] sm:text-[54px] md:text-[72px] leading-[0.95] font-normal uppercase">
              O problema <br />
              não é a falta <br />
              de <span className="font-sans font-bold tracking-tighter text-electric-blue">tecnologia</span>. <br />
              É a falta de <br />
              <span className="italic text-electric-blue">conexão</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-16">
            <p className="font-sans text-sm md:text-base leading-relaxed text-off-white/60">
              Muitas empresas compram ferramentas caras de marketing, CRM e ERP, mas mantêm equipes copiando e colando dados manualmente. Criamos ecossistemas onde o tráfego, o WhatsApp, o CRM e o vendedor trabalham como uma única engrenagem.
            </p>
          </div>
        </div>

        {/* Vertical/Horizontal Flow Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-5 border border-white/20 divide-y lg:divide-y-0 lg:divide-x divide-white/20 bg-off-black/40">
          {FLOW_STEPS.map((step, index) => {
            const isLast = index === FLOW_STEPS.length - 1
            return (
              <div key={step.step} className="p-8 flex flex-col justify-between h-96 relative group hover:bg-white hover:text-off-black transition-all duration-500 ease-in-out">
                
                {/* Step number */}
                <div className="flex justify-between items-start">
                  <span className="font-mono text-sm font-bold text-electric-blue group-hover:text-electric-blue">
                    {step.step}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest border border-white/30 px-2 py-0.5 group-hover:border-off-black/30 group-hover:text-off-black transition-colors duration-300">
                    {step.action}
                  </span>
                </div>

                {/* Core step visualizer */}
                <div className="space-y-4 pt-12">
                  <h3 className="font-serif text-3xl sm:text-4xl uppercase font-light tracking-wide">
                    {step.channel}
                  </h3>
                  <p className="font-sans text-xs opacity-60 group-hover:opacity-80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting arrow indicator */}
                <div className="flex justify-end pt-8">
                  {!isLast && (
                    <div className="size-10 rounded-full border border-white/20 group-hover:border-off-black/25 flex items-center justify-center transition-colors">
                      <ArrowDown className="size-4 rotate-[270deg] lg:rotate-[270deg] group-hover:text-electric-blue transition-transform" />
                    </div>
                  )}
                  {isLast && (
                    <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest group-hover:text-emerald-600">
                      [ SUCESSO ]
                    </span>
                  )}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
