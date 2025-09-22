export default function Loading() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4"
      style={{
        background: "linear-gradient(135deg, #0a0a0a, #121212 40%, #1a1a1a)",
        backgroundSize: "200% 200%",
        animation: "shine 5s ease-in-out infinite",
      }}
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] tracking-wide sm:tracking-wider md:tracking-[0.8em] lg:tracking-[1.2em] text-neutral-500 font-extralight cursor-wait select-none text-center"
        style={{
          fontWeight: 100,
          fontFamily: "Arial, sans-serif",
        }}
      >
        LOADING
      </h1>
    </div>
  );
}
