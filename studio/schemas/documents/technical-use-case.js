import { format } from 'date-fns';

import AsyncSelect from '../inputs/async-select';

const handlerTemplateIndetifiers = (json) =>
  json.data.map(({ breed }) => ({
    title: breed,
    value: breed.toLowerCase().split(' ').join('-'),
  }));

export default {
  name: 'technical-use-case',
  type: 'document',
  title: 'Technical Use Cases',
  groups: [
    {
      title: 'Content',
      name: 'content',
      default: true,
    },
    {
      title: 'SEO',
      name: 'seo',
      icon: () => '🔍',
    },
  ],
  fields: [
    // SEO fields
    { name: 'metaTitle', title: 'Title', type: 'string', group: 'seo' },
    {
      name: 'metaDescription',
      title: 'Description',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'socialImage',
      title: 'Social Image',
      type: 'image',
      group: 'seo',
    },
    // Content fields
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      group: 'content',
      validation: (Rule) => Rule.error('You have to fill in this field.').required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      group: 'content',
      options: {
        // Change to schema title to automatically populate
        source: 'title',
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
    {
      title: 'Channels',
      name: 'channels',
      type: 'array',
      of: [
        {
          type: 'channelReference',
          preview: {
            select: {
              title: 'name',
              value: 'value',
            },
          },
        },
      ],
      group: 'content',
      validation: (Rule) => Rule.error('You have to fill in this field.').required(),
    },
    {
      title: 'Providers',
      name: 'providers',
      type: 'array',
      of: [
        {
          type: 'providerReference',
          preview: {
            select: {
              title: 'name',
            },
          },
        },
      ],
      group: 'content',
      validation: (Rule) => Rule.error('You have to fill in this field.').required(),
    },
    {
      title: 'Template indetifiers',
      name: 'templateIndetifiers',
      type: 'string',
      group: 'content',
      options: {
        url: 'https://api.novu.co/v1/notification-templates/',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `ApiKey bea17b6af292a26b2f2faf03db6174ce`,
        },
        handler: handlerTemplateIndetifiers,
      },
      components: {
        input: AsyncSelect,
      },
    },
    {
      title: 'Notifications from notifications generators',
      name: 'notificationsFromNotificationsGenerators',
      type: 'string',
      group: 'content',
      options: {
        url: 'https://api.novu.co/v1/notification-templates/',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `ApiKey bea17b6af292a26b2f2faf03db6174ce`,
        },
        handler: handlerTemplateIndetifiers,
      },
      components: {
        input: AsyncSelect,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
      group: 'content',
      validation: (Rule) => Rule.error('You have to fill in this field.').required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      group: 'content',
      validation: (Rule) => Rule.error('You have to fill in this field.').required(),
    },
    {
      name: 'body',
      type: 'content',
      title: 'Body',
      group: 'content',
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'cover',
    },
    prepare({ title = 'No title', publishedAt, media }) {
      const dateSegment = format(new Date(publishedAt), 'yyyy/MMMM');

      return {
        title,
        media,
        subtitle: `Published: ${dateSegment}`,
      };
    },
  },
};
