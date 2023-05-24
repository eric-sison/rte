'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FunctionComponent } from 'react';
import { Toolbar } from '../toolbar/Toolbar';
import Underline from '@tiptap/extension-underline';

export const TextEditor: FunctionComponent = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none',
      },
    },
    content: `<p>the quick brown fox jumps over a lazy dog near the riverbanks.</p> 
              <p>the quick brown fox jumps over a lazy dog near the riverbanks.</p>`,
  });

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="bg-zinc-50 p-4" />
    </div>
  );
};
