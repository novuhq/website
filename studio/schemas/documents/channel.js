export default {
  name: 'channel',
  type: 'document',
  title: 'Channels',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.error('You have to fill in this field.').required(),
    },
    {
      name: 'value',
      type: 'slug',
      title: 'Value',
      options: {
        // Change to schema name to automatically populate
        source: 'name',
        slugify: (input) =>
          input
            .toLowerCase()
            // Remove spaces
            .replace(/\s+/g, '-')
            // Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule) => Rule.required(),
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
