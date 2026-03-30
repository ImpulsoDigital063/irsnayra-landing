import Image from "next/image";
import FadeIn from "./FadeIn";

const credentials = [
  {
    icon: "🎓",
    title: "Farmacêutica Clínica Hospitalar",
    description: "Formação sólida em farmacologia clínica e hospitalar, garantindo segurança e eficácia em cada procedimento.",
  },
  {
    icon: "💊",
    title: "Prescrição Farmacêutica",
    description: "Habilitada para prescrição farmacêutica, personalizando protocolos para cada paciente com precisão científica.",
  },
  {
    icon: "✨",
    title: "Especialista em Estética",
    description: "Pós-graduada em estética avançada, integrando saúde e beleza com abordagem holística e segura.",
  },
  {
    icon: "📍",
    title: "Atendimento Domiciliar",
    description: "Atende em Imperatriz-MA com conforto e exclusividade no seu lar. Fins de semana disponíveis.",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-[#f2ede6]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Sobre
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-[#2c2420] mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Dra. Irsnayra Mildred
            </h2>
            <div className="gold-line mx-auto" />
          </div>
        </FadeIn>

        {/* Foto + Bio */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">

          <FadeIn from="left" delay={80}>
            <div className="space-y-5">
              <p className="text-[#6b5c52] text-base leading-relaxed">
                Com uma formação diferenciada que alia ciência farmacêutica e estética avançada,
                a Dra. Irsnayra Mildred desenvolveu um método exclusivo de transformação integral
                — cuidando de corpo, rosto e cabelo com protocolos personalizados e tecnologia de ponta.
              </p>
              <p className="text-[#6b5c52] leading-relaxed">
                Sua abordagem holística parte da farmacologia clínica para entregar resultados
                seguros e duradouros. Cada atendimento é pensado individualmente, respeitando
                a bioquímica única de cada paciente.
              </p>
              <p className="text-[#6b5c52] leading-relaxed">
                Baseada em Imperatriz-MA, realiza atendimentos domiciliares com a discrição,
                exclusividade e conforto que você merece — principalmente aos fins de semana.
              </p>
              <div className="flex items-center gap-2 text-[#C9A84C] pt-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-sm font-medium">Imperatriz-MA · Atendimento domiciliar</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn from="right" delay={160}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-[#C9A84C]/8 -rotate-2" />
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-lg border border-[#C9A84C]/15">
                <Image
                  src="/sobre.png"
                  alt="Dra. Irsnayra Mildred"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Credentials — abaixo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80} from={i % 2 === 0 ? "left" : "right"}>
              <div className="p-5 rounded-2xl bg-white border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-300 card-shadow h-full">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-[#2c2420] font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-[#9c8b82] text-xs leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
