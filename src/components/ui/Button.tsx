import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'ghost'
export type ButtonSize = 'md' | 'lg'

interface CommonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Show animated trailing arrow (true on primary by default). */
  arrow?: boolean
  /** Show a leading icon glyph (rendered before children, e.g. ▷). */
  icon?: React.ReactNode
  /** On dark surface adjustments — ghost border on light bg is darker. */
  tone?: 'on-dark' | 'on-light'
  className?: string
  children: React.ReactNode
}

type ButtonAsLink = CommonProps & {
  href: string
  type?: never
  disabled?: never
  onClick?: never
}

type ButtonAsButton = CommonProps & {
  href?: undefined
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const SIZE_STYLES: Record<ButtonSize, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    arrow,
    icon,
    tone = 'on-dark',
    className,
    children,
  } = props

  const showArrow = arrow ?? variant === 'primary'

  const baseClasses = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium',
    'transition-[background-color,color,border-color,box-shadow] duration-300',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    SIZE_STYLES[size],
    className
  )

  const variantStyle: React.CSSProperties =
    variant === 'primary'
      ? {
          background: 'var(--color-noa-green)',
          color: 'var(--color-noa-dark)',
          outlineColor: 'var(--color-noa-green)',
        }
      : {
          background: 'transparent',
          color: tone === 'on-dark' ? 'var(--color-on-dark)' : 'var(--color-on-light)',
          border:
            tone === 'on-dark'
              ? '1px solid rgba(255,255,255,0.3)'
              : '1px solid rgba(26,36,32,0.3)',
          outlineColor: 'var(--color-noa-green)',
        }

  const hoverHandlers =
    variant === 'primary'
      ? {
          onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
            ;(e.currentTarget as HTMLElement).style.background = 'var(--color-noa-green-hover)'
          },
          onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
            ;(e.currentTarget as HTMLElement).style.background = 'var(--color-noa-green)'
          },
        }
      : {
          onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
            ;(e.currentTarget as HTMLElement).style.background =
              tone === 'on-dark' ? 'rgba(255,255,255,0.06)' : 'rgba(26,36,32,0.06)'
          },
          onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
            ;(e.currentTarget as HTMLElement).style.background = 'transparent'
          },
        }

  const content = (
    <>
      {icon && <span className="shrink-0 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.5}
          aria-hidden
        />
      )}
    </>
  )

  if (props.href) {
    return (
      <Link
        href={props.href}
        className={baseClasses}
        style={variantStyle}
        {...hoverHandlers}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
      className={cn(baseClasses, props.disabled && 'opacity-50 cursor-not-allowed')}
      style={variantStyle}
      {...(!props.disabled ? hoverHandlers : {})}
    >
      {content}
    </button>
  )
}
