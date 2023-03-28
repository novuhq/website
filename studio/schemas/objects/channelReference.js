export default {
  name: 'channelReference',
  type: 'object',
  title: 'Channel reference',
  fields: [
    {
      name: 'channel',
      type: 'reference',
      to: [
        {
          type: 'channel',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'channel.name',
    },
  },
};
