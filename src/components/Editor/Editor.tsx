import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Content, Wrapper } from './Editor.styles';
import MenuBar from './MenuBar';

type Props = {
  // content is an object not a string so we know when it's changed
  content: {
    html: string;
  };
  onUpdate?(content: string): void;
  [x: string]: any;
};

/**
 * Wysiwyg editor
 */
const Editor = ({ content, onUpdate, ...rest }: Props) => {
  const editor = useEditor({
    content: content.html,
    extensions: [StarterKit],
    onUpdate: ({ editor }) => {
      if (onUpdate) {
        onUpdate(editor.getHTML());
      }
    },
  });

  useEffect(() => {
    editor?.commands.setContent(content.html);
  }, [content]);

  if (editor === null) {
    return null;
  }

  return (
    <Wrapper {...rest}>
      <MenuBar editor={editor} />
      <Content>
        <EditorContent editor={editor} />
      </Content>
    </Wrapper>
  );
};

export default Editor;
