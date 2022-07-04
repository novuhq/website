import React from 'react';

const RewindButton = ({ player, amount = 10 }) => (
  <button type="button" className="group focus:outline-none" onClick={() => player.seekBy(-amount)}>
    <div className="absolute -inset-4 -right-2 hidden md:block" />
    <span className="sr-only">Rewind {amount} seconds</span>

    <svg
      className="text-gray-7 transition-colors duration-200 group-hover:text-white"
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
    >
      <path
        d="M1 4.5H7C12.314 4.5 15 7.186 15 12.5C15 12.5 15 13.2663 15 16"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M0.264 10.74V11.596H1V16.5H2V10.74H0.264ZM3.44556 13.62C3.44556 15.3 4.32556 16.604 5.70956 16.604C7.10156 16.604 7.97356 15.3 7.97356 13.62C7.97356 11.94 7.10156 10.636 5.70956 10.636C4.32556 10.636 3.44556 11.94 3.44556 13.62ZM4.46156 13.62C4.46156 12.396 4.93356 11.564 5.70956 11.564C6.49356 11.564 6.96556 12.396 6.96556 13.62C6.96556 14.844 6.49356 15.676 5.70956 15.676C4.93356 15.676 4.46156 14.844 4.46156 13.62Z"
        fill="currentColor"
      />
      <path
        d="M4.5 8.5L0.5 4.5L4.5 0.5"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default RewindButton;
