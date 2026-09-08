export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.25em] uppercase ${
        light ? "text-white/80" : "text-muted-foreground"
      }`}
    >
      {children}
    </p>
  );
}
