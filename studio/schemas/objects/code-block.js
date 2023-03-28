import { CodeBlockIcon } from '@sanity/icons';

export default {
  name: 'codeBlock',
  type: 'object',
  icon: CodeBlockIcon,
  title: 'Code Block',
  fields: [
    {
      name: 'language',
      type: 'string',
      title: 'Language',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'JSX', value: 'jsx' },
          { title: 'Ruby', value: 'ruby' },
          { title: 'Python', value: 'python' },
          { title: 'Go', value: 'go' },
          { title: 'PHP', value: 'php' },
          { title: 'Bash', value: 'bash' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'JSON', value: 'json' },
        ],
      },
    },
    {
      name: 'code',
      type: 'text',
      title: 'Code',
    },
  ],
};
