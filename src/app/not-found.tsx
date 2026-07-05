import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#050816] text-white">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-gray-400">
        Page not found.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4"
      >
        Go Home
      </Link>
    </div>
  );
}