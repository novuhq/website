import React from 'react';

import getFormattedAuthorsName from 'utils/get-formatted-author-name';

const Blockquote = ({ quote, authors, role }) => {
  const authorsArray = authors.length > 0 ? authors : [authors];

  const avatars = authorsArray
    ?.filter((author) => !!author)
    .reduce((acc, author) => {
      if (author.photo) acc.push(author.photo);
      return acc;
    }, [])
    .filter(Boolean);

  const names = authorsArray?.filter((author) => !!author).map((author) => author.name || '');

  return (
    <figure className="mb-10 mt-8 border-l border-gray-3 pl-6">
      <blockquote className="mt-3.5">
        <p className="text-pretty text-[28px] font-medium leading-normal tracking-tight md:text-2xl md:leading-normal">
          {quote}
        </p>
      </blockquote>
      {avatars && avatars.length > 0 && (
        <div className="mt-[16px] flex items-center gap-2">
          {avatars.map((avatar) => (
            <img src={avatar} alt={avatar} className="size-7 rounded-full border border-gray-8" />
          ))}
          {names?.length > 0 && (
            <span className="text-[13px] font-medium leading-tight tracking-tight">
              {names.map((name) => getFormattedAuthorsName(name)).join(', ')}
            </span>
          )}
          {((authorsArray && authorsArray.length > 0) || role) && (
            <figcaption className="line-clamp-1 text-sm text-gray-7">
              {role && (
                <span className="inline leading-tight tracking-tight text-gray-7 md:line-clamp-1">
                  {names?.length > 0 && <span className="mr-2">—</span>}
                  {role}
                </span>
              )}
            </figcaption>
          )}
        </div>
      )}
    </figure>
  );
};

export default Blockquote;
