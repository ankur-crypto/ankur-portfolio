export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white shadow-lg">
            A
          </div>

          <h1 className="text-2xl font-bold text-white">
            Ankur<span className="text-violet-500">.</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-700">
            Resume
          </button>

          <button className="text-xl text-yellow-400 transition hover:scale-110">
            🌙
          </button>
        </div>
      </nav>
    </header>
  );
}