export default function BackgroundGlow() {
  return (
    <>
      {/* Top Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-3xl" />
    </>
  );
}