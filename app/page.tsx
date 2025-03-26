import { Sparkles } from "lucide-react"

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary-900 to-white p-4 text-white">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-6">
        <img src="/images/logo.svg" alt="Reental" className="w-52	h-10	mb-4" />
        </div>

        <h1 className="text-gray-300 text-5xl font-FustatSemibold tracking-tight">Actualización en marcha...</h1>

        <p className="text-4xl FustatSemibold text-gray-300 mb-3">
        lo bueno se hace esperar
        </p>
        <img src="/images/loading.gif" alt="Reental" className="w-20 opacity-30	" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0	 h-[277px] w-[685px] rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="685" height="277" viewBox="0 0 685 277" fill="none">
<g opacity="0.2">
<path fill-rule="evenodd" clip-rule="evenodd" d="M184.161 7.25995C193.495 -2.08183 208.619 -2.13832 218.023 7.13348L680.117 462.741C695.39 477.799 684.774 503.804 663.326 503.873L536.129 504.279C529.83 504.299 523.775 501.845 519.268 497.444L221.105 206.317C211.697 197.131 196.653 197.214 187.348 206.504L-106.008 499.363C-110.493 503.841 -116.566 506.365 -122.904 506.386L-256.948 506.814C-278.385 506.882 -289.172 480.972 -274.02 465.808L184.161 7.25995Z" fill="url(#paint0_linear_3016_7419)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3016_7419" x1="201.582" y1="-9.62374" x2="203.227" y2="505.343" gradientUnits="userSpaceOnUse">
<stop stop-color="#FCA311"/>
<stop offset="1" stop-color="#96610A" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
        </div>

      </div>

      <footer className="absolute bottom-4 text-sm text-white/60">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  )
}

