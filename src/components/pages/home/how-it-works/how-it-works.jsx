import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import Heading from 'components/shared/heading';

const TITLE = 'How it works?';
const DESCRIPTION = 'Read quick start guide';

const cardsData = [
  {
    title: 'Create template',
    description:
      'Select channels, add content with {{dynamic}} syntax, and custom rules to control the delivery of notifications.',
    imageSrc: './images/template.jpg',
  },
  {
    title: 'Connect providers',
    description: `Use a built in collection of popular providers - Sendgrid, Mailgun, Twilio and many more. Add API key and you're ready to go.`,
    imageSrc: './images/providers.jpg',
  },
  {
    title: 'Add trigger',
    description: `Send an event trigger using one of our community built SDK's, and we will handle it from there.`,
    imageSrc: './images/trigger.jpg',
  },
];

// eslint-disable-next-line react/prop-types
const Card = ({ description, title, image }) => (
  <div
    className="flex flex-col rounded-[20px] p-8"
    style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.7) 100%)' }}
  >
    <GatsbyImage
      className="w-full"
      image={getImage(image)}
      alt={title}
      loading="eager"
      width="400"
    />
    <p className="mt-5 text-3xl leading-snug text-white">{title}</p>
    <p className="mt-3 leading-snug text-gray-8 text-white">{description}</p>
  </div>
);

const HowItWorks = () => {
  const { templateIllustration, providersIllustration, triggerIllustration } =
    useStaticQuery(graphql`
      query {
        templateIllustration: file(relativePath: { eq: "pages/home/how-it-works/template.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        providersIllustration: file(relativePath: { eq: "pages/home/how-it-works/providers.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        triggerIllustration: file(relativePath: { eq: "pages/home/how-it-works/trigger.png" }) {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      }
    `);

  const cardImages = [templateIllustration, providersIllustration, triggerIllustration];

  return (
    <section className="safe-paddings bg-black pt-20 pb-20">
      <div className="container flex flex-col items-center">
        <Heading size="lg" tag="h2" className="max-w-[764px] text-center leading-tight">
          {TITLE}
        </Heading>
        <p className="mt-5 text-lg text-white">{DESCRIPTION}</p>
        <ul className="mt-10 flex w-full space-x-10">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} image={cardImages[index]} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
