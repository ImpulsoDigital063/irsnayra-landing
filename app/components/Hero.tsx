"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf9f7]"
    >
      {/* Soft background shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-[#2c2420] mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Método Dra.{" "}
            <span className="italic text-gold-gradient">Irsnayra Mildred</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-[#6b5c52] font-light not-italic">
              – Transformação Completa
            </span>
          </h1>

          <div className="gold-line mx-auto lg:mx-0 mb-6" />

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#6b5c52] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Corpo, rosto e cabelo tratados com tecnologia e injetáveis de alta performance
          </p>

          {/* Specialty tags */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
            {["Injetáveis", "Soroterapia", "Harmonização Glútea"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-sm bg-[#C9A84C]/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://wa.me/5599982504810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-white font-semibold text-base hover:bg-[#D4AF37] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <WhatsAppIcon />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#2c2420]/20 text-[#2c2420] font-medium text-base hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 rounded-[2rem] bg-[#C9A84C]/8 rotate-3" />

            {/* Photo container */}
            <div className="relative w-72 md:w-80 rounded-[1.75rem] overflow-hidden shadow-xl border border-[#C9A84C]/20">
              <Image
                src="/profile.png"
                alt="Dra. Irsnayra Mildred"
                width={320}
                height={400}
                className="w-full h-auto object-cover object-top"
                priority
              />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full bg-white border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold shadow-lg">
              Farmacêutica Clínica
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8">
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-[#C9A84C]">3+</p>
              <p className="text-xs text-[#9c8b82] mt-0.5">Especialidades</p>
            </div>
            <div className="w-px bg-[#C9A84C]/25" />
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-[#C9A84C]">Home</p>
              <p className="text-xs text-[#9c8b82] mt-0.5">Atendimento</p>
            </div>
            <div className="w-px bg-[#C9A84C]/25" />
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-[#C9A84C]">100%</p>
              <p className="text-xs text-[#9c8b82] mt-0.5">Dedicação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#9c8b82] hover:text-[#C9A84C] transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Saiba mais</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </a>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
