import Link from 'next/link'
import Image from 'next/image'
import { FOOTER, SITE } from '@/content/landing'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-on-primary)] px-6 md:px-10 pt-24 pb-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 mb-20">
          <div>
            <Image
              src="/brand/logo.png"
              alt="NOA"
              width={140}
              height={48}
              className="h-12 w-auto brightness-0 invert mb-8"
            />
            <p className="display text-3xl md:text-4xl leading-tight max-w-md">
              <em>{FOOTER.tagline}</em>
            </p>
            <p className="mt-6 text-sm text-[rgba(255,255,255,0.7)]">{FOOTER.legal}</p>
            <p className="mt-2 text-sm text-[rgba(255,255,255,0.7)]">{FOOTER.corfo}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {FOOTER.groups.map((group) => (
              <div key={group.title}>
                <Eyebrow className="!text-[rgba(255,255,255,0.6)] mb-5 block">
                  {group.title}
                </Eyebrow>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[rgba(255,255,255,0.9)] hover:text-[var(--color-secondary)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <p className="text-xs text-[rgba(255,255,255,0.6)]">{FOOTER.copyright}</p>
          <p className="eyebrow !text-[rgba(255,255,255,0.5)]">{SITE.url.replace('https://', '')}</p>
        </div>
      </div>
    </footer>
  )
}
