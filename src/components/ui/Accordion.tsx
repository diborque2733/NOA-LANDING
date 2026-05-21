'use client'

import * as RadixAccordion from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: readonly AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <RadixAccordion.Root type="single" collapsible className={cn('w-full flex flex-col gap-3', className)}>
      {items.map((item, i) => (
        <RadixAccordion.Item
          key={i}
          value={`item-${i}`}
          className="rounded-2xl overflow-hidden transition-colors"
          style={{
            background: 'var(--color-surface-container-low)',
            boxShadow: '0 2px 6px rgba(18, 24, 27, 0.03)',
          }}
        >
          <RadixAccordion.Header className="flex">
            <RadixAccordion.Trigger
              className={cn(
                'group flex flex-1 items-center justify-between gap-6 px-6 md:px-8 py-6 text-left',
                'transition-colors hover:text-[var(--color-tertiary)]',
                'data-[state=open]:text-[var(--color-primary)]'
              )}
              style={{
                color: 'var(--color-on-surface)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontWeight: 400,
              }}
            >
              <span className="leading-snug">{item.question}</span>
              <span
                aria-hidden
                className="size-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-[var(--color-tertiary)] group-data-[state=open]:text-[var(--color-on-primary)]"
                style={{
                  background: 'var(--color-surface)',
                  color: 'var(--color-tertiary)',
                  border: '1px solid rgba(228,226,220,0.6)',
                }}
              >
                <Plus className="size-4" strokeWidth={1.5} />
              </span>
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content
            className={cn(
              'overflow-hidden',
              'data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up'
            )}
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            <div
              className="px-6 md:px-8 pb-6 pr-12 leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '0.95rem',
                lineHeight: 1.7,
              }}
            >
              {item.answer}
            </div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}
