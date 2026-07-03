export default function GridPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    />
  );
}