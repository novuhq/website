import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

const ComplianceSection = ({ items, title, columns, theme }) => (
  <section className="security-compliance safe-paddings relative z-30 mt-40 lg:mt-[120px] md:mt-[100px] sm:mt-20">
    <div className="container-md relative flex flex-col items-center pt-1 text-center md:px-8 sm:w-full sm:px-5">
      <Heading
        className="z-10 font-medium leading-denser tracking-snug lg:text-[32px] md:text-3xl"
        size="lg"
        tag="h2"
        theme="white"
      >
        {title}
      </Heading>
      <ul
        className={clsx(
          'relative z-10 mt-9 grid w-full sm:grid-cols-1',
          'before:absolute before:inset-x-0 before:top-[50px] before:h-px before:bg-[radial-gradient(62.37%_62.37%_at_50%_50%,_#534B5D_0%,_rgba(83,75,93,0)_100%)] sm:before:hidden',
          'after:absolute after:inset-x-0 after:bottom-[50px] after:h-px after:bg-[radial-gradient(62.37%_62.37%_at_50%_50%,_#534B5D_0%,_rgba(83,75,93,0)_100%)] sm:after:hidden',
          {
            'max-w-[768px] grid-cols-4': columns === 4,
            'max-w-[570px] grid-cols-3': columns === 3,
          }
        )}
      >
        {items.map(({ title, image }, index) => (
          <li
            className="relative flex flex-col items-center gap-y-3 py-[74px] after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-[radial-gradient(61.9%_61.9%_at_50%_50%,_#534B5D_0%,_rgba(83,75,93,0)_100%)] last:after:hidden sm:py-8 sm:after:inset-x-0 sm:after:inset-y-[initial] sm:after:bottom-0 sm:after:h-px sm:after:w-full"
            key={index}
          >
            <img
              className="h-auto md:w-14"
              src={image}
              alt=""
              width={80}
              height={80}
              loading="lazy"
            />
            <p className="font-medium leading-tight tracking-tight">{title}</p>
          </li>
        ))}
      </ul>
      <span
        className={clsx(
          'pointer-events-none absolute -left-1/2 -top-1/2 h-[607px] w-[963px] translate-x-[calc(50%-210px)] translate-y-[calc(50%-210px)] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,_#7599F5_0%,_rgba(117,153,245,0)_100%)] opacity-[0.1] blur-3xl sm:-top-[100px] sm:translate-x-1/2 sm:translate-y-[initial]',
          {
            hidden: theme === 'white',
          }
        )}
      />
      <span
        className={clsx(
          'pointer-events-none absolute -right-1/2 -top-1/2 h-[607px] w-[963px] -translate-x-[calc(50%-250px)] translate-y-[calc(50%-210px)] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,_#F575E0_0%,_rgba(245,117,224,0)_100%)] opacity-[0.1] blur-[37px] sm:-bottom-[100px] sm:top-[initial] sm:translate-y-[initial]',
          {
            hidden: theme === 'white',
          }
        )}
      />
    </div>
  </section>
);

ComplianceSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  columns: PropTypes.oneOf([3, 4]),
  theme: PropTypes.oneOf(['white', 'colored']).isRequired,
};

ComplianceSection.defaultProps = {
  columns: 4,
};

export default ComplianceSection;
