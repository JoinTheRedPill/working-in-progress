import { Sparkles } from "lucide-react"

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 text-white">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-6 rounded-full bg-white/10 p-5 backdrop-blur-sm">
          <Sparkles className="h-12 w-12 text-white" />
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">Something great is coming!</h1>

        <p className="max-w-md text-lg text-white/80 sm:text-xl">
          We're working on something exciting. Stay tuned for our big reveal.
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute left-1/3 top-1/4 h-20 w-20 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 h-32 w-32 rounded-full bg-white/10 blur-xl"></div>
      </div>

      <footer className="absolute bottom-4 text-sm text-white/60">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  )
}

