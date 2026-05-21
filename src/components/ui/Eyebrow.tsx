import { cn } from '@/lib/cn'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  as?: 'span' | 'p' | 'div'
}

export function Eyebrow({ children, className, as: Tag = 'span' }: EyebrowProps) {
  return <Tag className={cn('eyebrow', className)}>{children}</Tag>
}
