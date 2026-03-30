import FadeIn from "./FadeIn";

export default function CTAFinal() {
  return (
    <section id="contato" className="py-24 bg-[#faf9f7] relative overflow-hidden">
      {/* Soft glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[350px] bg-[#C9A84C]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-[#C9A84C] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Pronta para transformar?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#2c2420] mb-4 leading-tight">
            Comece sua Transformação{" "}
            <span className="text-gold-gradient italic">Completa</span>
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-[#6b5c52] text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Agende sua consulta de avaliação e descubra o protocolo personalizado
            ideal para você. Atendimento domiciliar em Imperatriz-MA.
          </p>
        </FadeIn>

        <FadeIn delay={150} from="left">
          <a
            href="https://wa.me/5599982504810?text=Olá, Dra. Irsnayra! Gostaria de agendar uma avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#C9A84C] text-white font-bold text-lg hover:bg-[#D4AF37] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <WhatsAppIcon />
            Agendar pelo WhatsApp
          </a>

          <div className="mt-4">
            <a
              href="https://wa.me/5599982504810"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9c8b82] hover:text-[#C9A84C] transition-colors text-sm"
            >
              (99) 98250-4810
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { label: "Atendimento domiciliar", icon: "🏠" },
              { label: "Fins de semana", icon: "📅" },
              { label: "Imperatriz-MA", icon: "📍" },
              { label: "Alta performance", icon: "⭐" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-[#9c8b82]">
                <span>{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
