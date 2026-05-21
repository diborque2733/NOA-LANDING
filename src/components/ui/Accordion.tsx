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
    <RadixAccordion.Root type="single" collapsible className={cn('w-full', className)}>
      {items.map((item, i) => (
        <RadixAccordion.Item
          key={i}
          value={`item-${i}`}
          className="py-2 border-b border-[rgba(191,200,198,0.4)] last:border-b-0"
        >
          <RadixAccordion.Header className="flex">
            <RadixAccordion.Trigger
              className={cn(
                'group flex flex-1 items-center justify-between gap-6 py-5 text-left',
                'font-[var(--font-display)] text-xl md:text-2xl text-[var(--color-on-surface)]',
                'transition-colors hover:text-[var(--color-primary)]'
              )}
            >
              <span className="leading-snug">{item.question}</span>
              <Plus
                className="size-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
                strokeWidth={1.5}
                aria-hidden
              />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content
            className={cn(
              'overflow-hidden text-[var(--color-on-surface-variant)]',
              'data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up'
            )}
          >
            <div className="pb-6 pr-12 text-base leading-relaxed">{item.answer}</div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}
