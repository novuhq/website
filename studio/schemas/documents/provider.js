export default {
  name: 'provider',
  type: 'document',
  title: 'Providers',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.error('You have to fill in this field.').required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
