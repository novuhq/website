import React from 'react';

const InfoBox = ({ title, children }) => (
  <div className="info-box my-[24px] rounded-lg border border-gray-2 p-5 pt-4 text-[16px] leading-normal text-gray-9">
    {title && (
      <>
        <h4 className="text-[16px] font-medium leading-denser tracking-snug">{title}</h4>
        <hr className="my-3.5 border-gray-2" />
      </>
    )}
    {children}
  </div>
);

export default InfoBox;
