'use client';

import { ButtonHTMLAttributes, forwardRef, useContext } from 'react';
import { ToolbarContext } from '../toolbar/Toolbar';
import { Tooltip } from '../tooltip/Tooltip';

type ToolbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  action: 'bold' | 'italic' | 'underline';
  tooltip: string;
};

export const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  ({ action, tooltip, children, ...props }, ref) => {
    const { editor } = useContext(ToolbarContext);

    if (!editor) return null;

    return (
      <Tooltip content={tooltip} side="bottom" sideOffset={1}>
        <button
          ref={ref}
          {...props}
          className={`${
            editor.isActive(action) ? 'bg-zinc-100 text-zinc-700' : 'text-zinc-500 hover:text-zinc-500'
          } p-1 rounded-sm transition-colors duration-200`}
        >
          {children}
        </button>
      </Tooltip>
    );
  }
);

ToolbarButton.displayName = 'ToolbarButton';
