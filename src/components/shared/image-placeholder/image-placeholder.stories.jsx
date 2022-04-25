import React from 'react';

import ImagePlaceholder from './image-placeholder';

export default {
  component: ImagePlaceholder,
  title: 'ImagePlaceholder',
};

const Template = (args) => <ImagePlaceholder {...args} />;

export const Default = Template.bind({});

Default.args = {};
