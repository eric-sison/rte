'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React, { forwardRef } from 'react';

type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> & {
  content: string;
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined;
  sideOffset?: number | undefined;
  align?: 'center' | 'start' | 'end' | undefined;
  alignOffset?: number | undefined;
  skipDelayDuration?: number;
};

export const Tooltip = forwardRef<React.ElementRef<typeof TooltipPrimitive.Root>, TooltipProps>(
  (
    {
      children,
      content,
      open,
      defaultOpen,
      side = 'top',
      sideOffset = 0,
      align = 'center',
      alignOffset = 0,
      delayDuration,
      skipDelayDuration = 300,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    return (
      <TooltipPrimitive.Provider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
          <TooltipPrimitive.Content
            ref={ref}
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            {...props}
            className="bg-zinc-800/95 px-2 py-1 rounded z-20"
          >
            <p className="text-xs text-zinc-200 font-semibold">{content}</p>
            <TooltipPrimitive.Arrow className="fill-zinc-800/95" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    );
  }
);

Tooltip.displayName = 'Tooltip';
