'use client';

import { Editor } from '@tiptap/react';
import { FunctionComponent, createContext } from 'react';
import { FormatBold } from '../buttons/FormatBold';
import { FormatItalic } from '../buttons/FormatItalic';
import { FormatUnderline } from '../buttons/FormatUnderline';

type ToolbarProps = {
  editor: Editor | null;
};

export const ToolbarContext = createContext<ToolbarProps>({ editor: null });

export const Toolbar: FunctionComponent<ToolbarProps> = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="space-x-1">
      <ToolbarContext.Provider value={{ editor }}>
        <FormatBold />
        <FormatItalic />
        <FormatUnderline />
      </ToolbarContext.Provider>
    </div>
  );
};
