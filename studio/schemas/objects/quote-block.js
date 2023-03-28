import { BlockquoteIcon } from '@sanity/icons';

export default {
  name: 'quoteBlock',
  type: 'object',
  icon: BlockquoteIcon,
  title: 'Quote Block',
  fields: [
    {
      name: 'quote',
      type: 'text',
      title: 'Quote',
    },
  ],
};
