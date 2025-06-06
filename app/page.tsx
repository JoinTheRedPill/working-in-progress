import DiscordIcon from "@/components/icons/discord"

export default function ComingSoon() {
  const texts = JSON.parse(
    process.env.NEXT_PUBLIC_COMING_SOON_TEXTS ||
      '{"title":"Actualización en marcha...", "subtitle":"lo bueno se hace esperar", "moreInfo":"Más información en"}'
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary-900 to-white p-4 text-white">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <img src="/images/logo.svg" alt="Reental" className="w-52	h-10	mb-4" />
        </div>

        <h1 className="text-gray-300 text-5xl font-FustatSemibold tracking-tight">
          {texts.title}
        </h1>

        <p className="text-4xl FustatSemibold text-gray-300 mb-3">
          {texts.subtitle}
        </p>
        <img src="/images/loading.gif" alt="Reental" className="w-20 opacity-30	" />
        <p className="text-lg FustatSemibold text-gray-300 mb-2 mt-3">
          {texts.moreInfo}
        </p>
        <a
          href="https://discord.gg/sTs5dNeZmb"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg ease-in duration-300 flex items-center justify-center gap-2 border border-solid font-FustatBold leading-normal w-max bg-blue-10 hover:bg-blue-20 text-white text-base py-2.5 px-7 flex-row !border-none !h-[46px] cursor-pointer hover:opacity-75	"
        >
        <DiscordIcon />
          Discord
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0	 h-[277px] w-[685px] rounded-full">
          <img
            src="/images/marca-agua.svg"
            alt="Reental"
            width="685"
            height="277"
          />
        </div>
      </div>

      <footer className="absolute bottom-4 text-sm text-white/60">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}
