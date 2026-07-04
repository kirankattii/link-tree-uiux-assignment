export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-red"></div>
        <h2 className="font-orbitron text-2xl uppercase tracking-[0.2em] text-red">
          Loading
        </h2>
      </div>
    </div>
  );
}
