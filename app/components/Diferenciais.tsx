import FadeIn from "./FadeIn";

const diferenciais = [
  {
    numero: "01",
    titulo: "Base em Farmacologia Clínica",
    descricao:
      "Diferente de profissionais sem formação científica, a Dra. Irsnayra atua com sólido embasamento em farmacologia clínica hospitalar. Cada substância utilizada é selecionada com critério técnico.",
    destaque: "Ciência + Estética",
  },
  {
    numero: "02",
    titulo: "Prescrição Farmacêutica Personalizada",
    descricao:
      "A habilitação em prescrição farmacêutica permite criar protocolos 100% personalizados. Não existe fórmula genérica: cada tratamento é planejado de acordo com sua bioquímica e objetivos.",
    destaque: "Protocolo único para você",
  },
  {
    numero: "03",
    titulo: "Abordagem Holística Integral",
    descricao:
      "Corpo, rosto e cabelo são tratados de forma integrada. A saúde interna reflete na beleza externa — por isso os protocolos atuam de dentro para fora, com resultados mais duradouros.",
    destaque: "Transformação completa",
  },
  {
    numero: "04",
    titulo: "Atendimento Exclusivo e Confortável",
    descricao:
      "O atendimento domiciliar em Imperatriz-MA garante privacidade, conforto e exclusividade. Você recebe procedimentos de alto padrão no conforto do seu lar, sem filas ou exposição.",
    destaque: "Privacidade & exclusividade",
  },
  {
    numero: "05",
    titulo: "Alta Performance com Segurança",
    descricao:
      "Insumos de alta qualidade, técnicas validadas e rigoroso controle de biossegurança. Alta performance não significa risco — significa eficiência com responsabilidade clínica.",
    destaque: "Resultados reais e seguros",
  },
  {
    numero: "06",
    titulo: "Fins de Semana Disponíveis",
    descricao:
      "Agenda pensada para quem tem rotina corrida. Com atendimentos nos fins de semana, você não precisa sacrificar a vida profissional para investir em si mesma.",
    destaque: "Agenda flexível",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-[#f2ede6]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Por que escolher
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2c2420] mb-4">
              Diferenciais Competitivos
            </h2>
            <div className="gold-line mx-auto mb-5" />
            <p className="text-[#6b5c52] max-w-lg mx-auto text-base leading-relaxed">
              O que torna o Método Dra. Irsnayra Mildred único no mercado de estética avançada.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {diferenciais.map((item, i) => (
            <FadeIn key={item.numero} delay={i * 80} from={i % 2 === 0 ? "left" : "right"}>
              <div className="relative p-7 rounded-2xl bg-white border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 card-shadow card-shadow-hover transition-all duration-300 group h-full flex flex-col">
                {/* Number watermark */}
                <span className="absolute top-5 right-6 font-serif text-4xl font-bold text-[#C9A84C]/8 select-none group-hover:text-[#C9A84C]/15 transition-colors">
                  {item.numero}
                </span>

                <span className="inline-block px-3 py-0.5 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-medium mb-4 w-fit">
                  {item.destaque}
                </span>

                <h3 className="text-[#2c2420] font-semibold text-base mb-3 pr-8">
                  {item.titulo}
                </h3>

                <p className="text-[#9c8b82] text-sm leading-relaxed flex-1">
                  {item.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
