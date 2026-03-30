import FadeIn from "./FadeIn";

const servicos = [
  {
    title: "Injetáveis",
    subtitle: "Toxina botulínica & Bioestimuladores",
    description:
      "Procedimentos de alta precisão com toxina botulínica, ácido hialurônico e bioestimuladores de colágeno. Resultados naturais que realçam sua beleza e devolvem a harmonia facial.",
    beneficios: [
      "Suavização de rugas e linhas de expressão",
      "Preenchimento labial e malar",
      "Lifting sem cirurgia",
      "Protocolos anti-aging personalizados",
    ],
    icone: "💉",
  },
  {
    title: "Soroterapia",
    subtitle: "Vitaminas & Nutrição celular",
    description:
      "Cocktails vitamínicos personalizados prescritos com embasamento clínico-farmacêutico. Nutrição celular profunda para pele, cabelo e energia vital — de dentro para fora.",
    beneficios: [
      "Vitamina C de alta dosagem",
      "Complexo B para energia e cabelo",
      "Antioxidantes e anti-inflamatórios",
      "Protocolos para fadiga e imunidade",
    ],
    icone: "✨",
  },
  {
    title: "Harmonização Glútea",
    subtitle: "Volume & Definição corporal",
    description:
      "Técnica especializada de harmonização glútea com bioestimuladores e injetáveis de última geração. Resultados volumétricos e naturais com segurança farmacológica máxima.",
    beneficios: [
      "Volumização e definição natural",
      "Bioestimuladores de longa duração",
      "Sem cirurgia, recuperação mínima",
      "Protocolo personalizado para cada biótipo",
    ],
    icone: "🌿",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Procedimentos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2c2420] mb-4">
              Serviços Exclusivos
            </h2>
            <div className="gold-line mx-auto mb-5" />
            <p className="text-[#6b5c52] max-w-lg mx-auto text-base leading-relaxed">
              Cada procedimento é realizado com rigor técnico, insumos de alta qualidade
              e protocolos validados pela farmacologia clínica.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-7">
          {servicos.map((servico, i) => (
            <FadeIn key={servico.title} delay={i * 110} from={i === 0 ? "left" : i === 2 ? "right" : "bottom"}>
              <div className="group rounded-3xl bg-white border border-[#C9A84C]/10 hover:border-[#C9A84C]/35 card-shadow card-shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
                {/* Top accent line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

                <div className="p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center text-2xl mb-5">
                    {servico.icone}
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#2c2420] mb-1">
                    {servico.title}
                  </h3>
                  <p className="text-[#C9A84C] text-sm font-medium mb-4">{servico.subtitle}</p>

                  <p className="text-[#6b5c52] text-sm leading-relaxed mb-6">
                    {servico.description}
                  </p>

                  <ul className="space-y-2 mb-8 flex-1">
                    {servico.beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#6b5c52]">
                        <span className="text-[#C9A84C] mt-0.5 flex-shrink-0 text-xs">◆</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/5599982504810?text=Olá! Tenho interesse no procedimento: ${encodeURIComponent(servico.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full text-center px-6 py-3 rounded-full border border-[#C9A84C]/50 text-[#C9A84C] text-sm font-semibold hover:bg-[#C9A84C] hover:text-white transition-all duration-200"
                  >
                    Saiba mais / Agendar
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
