import Image from "next/image";
import Link from "next/link";
import { ContactNavLink } from "@/components/contact/ContactNavLink";
import {
  CELESTRA_LOGO,
  GHD_LOGO,
  NAV_ITEMS,
  NIVAARA_LOGO,
  SAMRAYA_LOGO,
  SOCIAL_LINKS,
} from "@/lib/constants";

type IconProps = {
  className?: string;
};

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 8.5H16V5.5H13.5C11.01 5.5 9 7.51 9 10v2.5H7v3h2V21h3v-5.5h2.6L15 13h-3v-2.5c0-.83.67-1.5 1.5-1.5z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M6.94 5a2 2 0 1 1 .02 4 2 2 0 0 1-.02-4ZM5 8.75h3.88V20H5V8.75Zm6.13 0H15v1.53h.05c.55-.98 1.9-2.02 3.91-2.02 4.18 0 4.95 2.75 4.95 6.33V20H20v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94V20h-3.89V8.75Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.28 6 12 6 12 6s-6.28 0-7.86.061A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2.14 12a28.6 28.6 0 0 0 .06 3.999 2.75 2.75 0 0 0 1.94 1.94C5.72 18 12 18 12 18s6.28 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94A28.6 28.6 0 0 0 21.86 12a28.6 28.6 0 0 0-.06-3.999ZM10 15.001V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
} as const;

export function Footer() {
  return (
    <footer id="contact" className="site-footer relative overflow-hidden py-12 sm:py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <Image
          src="/images/corporate/footer-mandala.webp"
          alt=""
          width={1082}
          height={1082}
          className="h-[min(90vw,28rem)] w-[min(90vw,28rem)] object-contain opacity-10 sm:h-[min(70vw,36rem)] sm:w-[min(70vw,36rem)] md:h-[42rem] md:w-[42rem] lg:h-[48rem] lg:w-[48rem]"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 768px"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <nav className="w-full" aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-7 md:gap-x-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                {item.label === "CONTACT" ? (
                  <ContactNavLink className="font-body text-[9px] font-semibold uppercase tracking-[0.13em] text-charcoal transition-[color,opacity] duration-300 hover:text-[#543119] sm:text-[10px] sm:tracking-[0.14em]">
                    {item.label}
                  </ContactNavLink>
                ) : (
                  <Link
                    href={item.href}
                    className="font-body text-[9px] font-semibold uppercase tracking-[0.13em] text-charcoal transition-[color,opacity] duration-300 hover:text-[#543119] sm:text-[10px] sm:tracking-[0.14em]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <nav className="mt-5 w-full" aria-label="Legal">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5">
            <li>
              <Link
                href="/privacy"
                className="font-body text-[8px] font-semibold uppercase tracking-[0.12em] text-charcoal/85 transition-colors hover:text-charcoal sm:text-[9px]"
              >
                Privacy Policy
              </Link>
            </li>
            <li aria-hidden className="text-charcoal/40">
              |
            </li>
            <li>
              <Link
                href="/terms"
                className="font-body text-[8px] font-semibold uppercase tracking-[0.12em] text-charcoal/85 transition-colors hover:text-charcoal sm:text-[9px]"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </nav>

        {/* Soft spotlight behind logos so gold marks read as the footer focus */}
        <div className="relative mt-6 w-full max-w-full sm:mt-8 md:mt-10">
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 h-[170%] w-[min(100%,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,247,240,0.95)_0%,rgba(250,247,240,0.72)_45%,transparent_72%)]"
            aria-hidden
          />

          {/* Stack on small screens; row from sm up — never overflow */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8 md:gap-12 lg:gap-14">
            <a
              href="https://www.ghdhotels.in"
              className="block w-[min(72%,11rem)] shrink-0 sm:w-[min(40vw,11.5rem)] md:w-[13.5rem]"
              aria-label="GHD Hotels home"
              rel="noopener noreferrer"
            >
              <Image
                src={GHD_LOGO}
                alt="GHD Hotels"
                width={1160}
                height={420}
                className="h-auto w-full object-contain object-center drop-shadow-[0_6px_18px_rgba(84,49,25,0.22)]"
                sizes="(max-width: 640px) 72vw, 216px"
                priority
              />
            </a>

            <span
              className="hidden h-10 w-px shrink-0 bg-[#C6A86B]/35 sm:block sm:h-12 md:h-14"
              aria-hidden
            />
            <span
              className="h-px w-16 shrink-0 bg-[#C6A86B]/35 sm:hidden"
              aria-hidden
            />

            <div
              className="flex w-full max-w-[22rem] flex-wrap items-center justify-center gap-x-4 gap-y-3 px-1 sm:w-auto sm:max-w-none sm:flex-nowrap sm:gap-x-4 sm:gap-y-0 sm:px-0 md:gap-x-5"
              aria-label="GHD Hotels brands"
            >
              <a
                href="https://samraya.ghdhotels.in"
                className="flex h-7 max-w-[7.5rem] shrink-0 items-center opacity-65 transition-opacity duration-300 touch-manipulation hover:opacity-90 sm:h-9 sm:max-w-[9rem] md:h-10 md:max-w-[10rem]"
                aria-label="Samrāya by GHD Hotels"
                rel="noopener noreferrer"
              >
                <Image
                  src={SAMRAYA_LOGO}
                  alt="Samrāya Lifestyle & Wellness Resort"
                  width={3085}
                  height={565}
                  className="h-full w-auto max-w-full object-contain object-center"
                  sizes="(max-width: 640px) 120px, 160px"
                />
              </a>

              <a
                href="https://celestra.ghdhotels.in"
                className="flex h-6 max-w-[6.5rem] shrink-0 items-center opacity-65 transition-opacity duration-300 touch-manipulation hover:opacity-90 sm:h-8 sm:max-w-[8rem] md:h-9 md:max-w-[9rem]"
                aria-label="Celéstra by GHD Hotels"
                rel="noopener noreferrer"
              >
                <Image
                  src={CELESTRA_LOGO}
                  alt="Celéstra by GHD Hotels"
                  width={932}
                  height={255}
                  className="h-full w-auto max-w-full object-contain object-center"
                  sizes="(max-width: 640px) 100px, 140px"
                />
              </a>

              <Link
                href="/"
                className="flex h-8 max-w-[3.25rem] shrink-0 items-center opacity-65 transition-opacity duration-300 touch-manipulation hover:opacity-90 sm:h-11 sm:max-w-[4rem] md:h-12 md:max-w-[4.5rem]"
                aria-label="Nivaãra by GHD Hotels"
              >
                <Image
                  src={NIVAARA_LOGO}
                  alt="Nivaãra by GHD Hotels"
                  width={736}
                  height={510}
                  className="h-full w-auto max-w-full object-contain object-center"
                  sizes="(max-width: 640px) 56px, 72px"
                />
              </Link>
            </div>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:mt-8 sm:gap-x-6">
          {SOCIAL_LINKS.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];

            return (
              <li key={social.icon}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-10 items-center justify-center text-charcoal transition-[color,opacity] duration-300 hover:text-[#543119] sm:size-auto"
                >
                  <Icon className="size-4 sm:size-[18px]" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 w-full border-t border-charcoal/15 pt-5 sm:mt-10 sm:pt-7">
          <p className="font-body text-[8px] font-semibold tracking-[0.03em] text-charcoal/75 sm:text-[9px]">
            © 2026 GHD Hotels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
