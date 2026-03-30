interface LogoProps {
  size?: "sm" | "md" | "lg";
  /** mostrar apenas o monograma sem o texto lateral */
  monogramOnly?: boolean;
}

export default function Logo({ size = "md", monogramOnly = false }: LogoProps) {
  const scale = size === "sm" ? 0.75 : size === "lg" ? 1.35 : 1;

  const monogramSize = Math.round(56 * scale);
  const nameSize    = Math.round(11 * scale);
  const tagSize     = Math.round(9.5 * scale);
  const divH        = Math.round(40 * scale);

  return (
    <div className="flex items-center gap-3 select-none">
      {/* ── Monograma IM ── */}
      <div
        className="relative flex items-end leading-none"
        style={{ height: monogramSize, minWidth: monogramSize * 1.1 }}
      >
        {/* I */}
        <span
          className="absolute left-0 bottom-0 text-[#C9A84C] italic font-light"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: monogramSize,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            zIndex: 2,
          }}
        >
          I
        </span>
        {/* M — levemente sobreposto e deslocado */}
        <span
          className="absolute bottom-0 text-[#C9A84C] italic font-light"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: monogramSize,
            lineHeight: 1,
            left: Math.round(monogramSize * 0.28),
            letterSpacing: "-0.03em",
            zIndex: 1,
            opacity: 0.92,
          }}
        >
          M
        </span>
      </div>

      {!monogramOnly && (
        <>
          {/* Linha divisória */}
          <div
            className="bg-[#C9A84C]/45 flex-shrink-0"
            style={{ width: 1, height: divH }}
          />

          {/* Texto */}
          <div className="flex flex-col justify-center gap-0.5">
            <span
              className="text-[#2c2420] font-medium tracking-[0.18em] uppercase"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: nameSize + 1,
              }}
            >
              Dra. Irsnayra Mildred
            </span>
            <span
              className="text-[#C9A84C] tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: tagSize,
              }}
            >
              · Estética Avançada ·
            </span>
          </div>
        </>
      )}
    </div>
  );
}
