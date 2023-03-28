export default {
  name: 'providerReference',
  type: 'object',
  title: 'Provider Reference',
  fields: [
    {
      name: 'provider',
      type: 'reference',
      to: [
        {
          type: 'provider',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'provider.name',
    },
  },
};
