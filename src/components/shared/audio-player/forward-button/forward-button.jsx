import React from 'react';

const ForwardButton = ({ player, amount = 10 }) => (
  <button
    type="button"
    className="group relative focus:outline-none"
    onClick={() => player.seekBy(amount)}
  >
    <div className="absolute -inset-4 -left-2 hidden md:block" />
    <span className="sr-only">Fast-forward {amount} seconds</span>

    <svg
      className="text-gray-7 transition-colors duration-200 group-hover:text-white"
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
    >
      <path
        d="M15 4.5H9C3.686 4.5 1 7.186 1 12.5C1 12.5 1 13.2663 1 16"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M7.264 10.74V11.596H8V16.5H9V10.74H7.264ZM10.4456 13.62C10.4456 15.3 11.3256 16.604 12.7096 16.604C14.1016 16.604 14.9736 15.3 14.9736 13.62C14.9736 11.94 14.1016 10.636 12.7096 10.636C11.3256 10.636 10.4456 11.94 10.4456 13.62ZM11.4616 13.62C11.4616 12.396 11.9336 11.564 12.7096 11.564C13.4936 11.564 13.9656 12.396 13.9656 13.62C13.9656 14.844 13.4936 15.676 12.7096 15.676C11.9336 15.676 11.4616 14.844 11.4616 13.62Z"
        fill="currentColor"
      />
      <path
        d="M11.5 8.5L15.5 4.5L11.5 0.5"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default ForwardButton;
