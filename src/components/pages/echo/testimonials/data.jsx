import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TESTIMONIALS = [
  {
    content:
      "Deploy within your organization's VPC, Kubernetes, serverless setups, or locally for secure data access. Integrate content across notification channels and use Novu to choose when and where to notify users. Rapidly identify and solve previously complicated content hydratin and notification routing issues.",
    avatar: (
      <StaticImage src="./images/jesselynn-mah.jpg" width={32} height={32} alt="Jesselynn Mah" />
    ),
    name: 'Jesselynn Mah',
    company: 'KnowledgeTouch',
  },
  {
    content:
      "Deploy within your organization's VPC, Kubernetes, serverless setups, or locally for secure data access. Integrate content across notification channels and use Novu to choose when and where to notify users. Rapidly identify and solve previously complicated content hydratin and notification routing issues.",

    avatar: (
      <StaticImage src="./images/jesselynn-mah.jpg" width={32} height={32} alt="Jesselynn Mah" />
    ),
    name: 'Jesselynn Mah',
    company: 'KnowledgeTouch',
  },
];

export default TESTIMONIALS;
