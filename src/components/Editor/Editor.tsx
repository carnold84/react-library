import React, { ChangeEvent } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Content, MenuBar, Wrapper } from './Editor.styles';
import IconButton from '../IconButton';
import {
  Bold,
  Code,
  HeadingH1,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH5,
  HeadingH6,
  Italic,
  ListOl,
  ListUl,
  Paragraph,
  Strikethrough,
  WindowCodeBlock,
} from '../../icons';

type Props = {
  content: string;
  onUpdate?(event: ChangeEvent<HTMLInputElement>): void;
  [x: string]: any;
};

const ICON_SIZE = 18;

/**
 * Primary UI component for user interaction
 */
const Editor = ({ content, onUpdate, ...rest }: Props) => {
  const editor = useEditor({
    content,
    extensions: [StarterKit],
  });

  const menuItems = [
    {
      Icon: Bold,
      id: 'bold',
      onClick: () => {
        editor?.chain().focus().toggleBold().run();
      },
    },
    {
      Icon: Italic,
      id: 'italic',
      onClick: () => {
        editor?.chain().focus().toggleItalic().run();
      },
    },
    {
      Icon: Strikethrough,
      id: 'strike',
      onClick: () => {
        editor?.chain().focus().toggleStrike().run();
      },
    },
    {
      Icon: Code,
      id: 'code',
      onClick: () => {
        editor?.chain().focus().toggleCode().run();
      },
    },
    {
      Icon: Paragraph,
      id: 'paragraph',
      onClick: () => {
        editor?.chain().focus().setParagraph().run();
      },
    },
    {
      Icon: HeadingH1,
      id: 'heading',
      level: 1,
      onClick: () => {
        editor?.chain().focus().toggleHeading({ level: 1 }).run();
      },
    },
    {
      Icon: HeadingH2,
      id: 'heading',
      level: 2,
      onClick: () => {
        editor?.chain().focus().toggleHeading({ level: 2 }).run();
      },
    },
    {
      Icon: HeadingH3,
      id: 'heading',
      level: 3,
      onClick: () => {
        editor?.chain().focus().toggleHeading({ level: 3 }).run();
      },
    },
    {
      Icon: HeadingH4,
      id: 'heading',
      level: 4,
      onClick: () => {
        editor?.chain().focus().toggleHeading({ level: 4 }).run();
      },
    },
    {
      Icon: HeadingH5,
      id: 'heading',
      level: 5,
      onClick: () => {
        editor?.chain().focus().toggleHeading({ level: 5 }).run();
      },
    },
    {
      Icon: HeadingH6,
      id: 'heading',
      level: 6,
      onClick: () => {
        editor?.chain().focus().toggleHeading({ level: 6 }).run();
      },
    },
    {
      Icon: ListUl,
      id: 'bulletList',
      onClick: () => {
        editor?.chain().focus().toggleBulletList().run();
      },
    },
    {
      Icon: ListOl,
      id: 'orderedList',
      onClick: () => {
        editor?.chain().focus().toggleOrderedList().run();
      },
    },
    {
      Icon: WindowCodeBlock,
      id: 'codeBlock',
      onClick: () => {
        editor?.chain().focus().toggleCodeBlock().run();
      },
    },
  ];

  return (
    <Wrapper {...rest}>
      <MenuBar>
        {menuItems.map(({ Icon, id, level, onClick }) => {
          return (
            <IconButton
              isActive={editor?.isActive(id, level ? { level } : {})}
              key={`${id}${level ? level : ''}`}
              onClick={onClick}>
              <Icon height={ICON_SIZE} width={ICON_SIZE} />
            </IconButton>
          );
        })}
      </MenuBar>
      <Content>
        <EditorContent editor={editor} />
      </Content>
    </Wrapper>
  );
};

export default Editor;
