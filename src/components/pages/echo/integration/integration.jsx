import React from 'react';

import CARDS from './data';

const Integration = () => (
  <section className="integration mt-[120px]">
    <div className="container-md">
      <h2 className="text-5xl leading-tight tracking-snug font-medium text-center max-w-4xl mx-auto">
        Seamlessly integrate with existing services and&nbsp;legacy systems to facilitate adoption
      </h2>
      <ul className="grid grid-cols-3 grid-rows-2 mt-12 ml-9 max-w-[928px] gap-y-12 gap-x-8">
        {CARDS.map(({ title, description, image }, index) => (
          <li key={index}>
            <div className="flex items-center">
              <img className="mr-3" src={image} alt={title} width={22} height={22} loading="lazy" />
              <h3 className="font-medium leading-snug tracking-snug">{title}</h3>
            </div>
            <p
              className="text-[15px] font-light leading-snug text-gray-9 mt-2.5"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Integration;
