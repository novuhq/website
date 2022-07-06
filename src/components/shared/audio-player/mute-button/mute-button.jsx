import React from 'react';

const MuteButton = ({ player }) => (
  <button
    type="button"
    className="group relative order-none rounded-md"
    onClick={() => player.toggleMute()}
  >
    <div className="absolute -inset-4 hidden md:block" />
    <span className="sr-only">{player.muted ? 'Unmute' : 'Mute'}</span>

    {player.muted ? (
      <svg
        className="text-gray-7 transition-colors duration-200 group-hover:text-white"
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
      >
        <path
          d="M10.8377 0.0782173C10.5842 -0.0470616 10.2796 -0.0208055 10.0523 0.149484L4.25123 4.50049H0.750173C0.335327 4.50049 0 4.83581 0 5.25066V11.252C0 11.6669 0.335327 12.0022 0.750173 12.0022H4.25123L10.0523 16.3532C10.1843 16.453 10.3434 16.5033 10.5024 16.5033C10.6164 16.5033 10.732 16.477 10.8377 16.4245C11.0921 16.297 11.2526 16.0374 11.2526 15.7531V0.749622C11.2526 0.465306 11.0921 0.205747 10.8377 0.0782173Z"
          fill="currentColor"
        />
        <path
          d="M12.8791 10.6213L15.0005 8.5M17.1218 6.37868L15.0005 8.5M15.0005 8.5L12.8791 6.37868M15.0005 8.5L17.1218 10.6213"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ) : (
      <svg
        className="text-gray-7 transition-colors duration-200 group-hover:text-white"
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
      >
        <path
          d="M10.8377 0.0782173C10.5842 -0.0470616 10.2796 -0.0208055 10.0523 0.149484L4.25123 4.50049H0.750173C0.335327 4.50049 0 4.83581 0 5.25066V11.252C0 11.6669 0.335327 12.0022 0.750173 12.0022H4.25123L10.0523 16.3532C10.1843 16.453 10.3434 16.5033 10.5024 16.5033C10.6164 16.5033 10.732 16.477 10.8377 16.4245C11.0921 16.297 11.2526 16.0374 11.2526 15.7531V0.749622C11.2526 0.465306 11.0921 0.205747 10.8377 0.0782173Z"
          fill="currentColor"
        />
        <path
          d="M13.6849 5.06846L13.1545 4.53809L12.0938 5.59883L12.6241 6.1292C13.7944 7.29947 13.7944 9.20266 12.6241 10.3722L12.0938 10.9026L13.1545 11.9633L13.6849 11.4329C15.4395 9.67827 15.4395 6.82311 13.6849 5.06846Z"
          fill="currentColor"
        />
        <path
          d="M15.2756 2.41699L14.2148 3.47774L14.7452 4.00811C17.085 6.3479 17.085 10.1558 14.7452 12.4956L14.2148 13.0259L15.2756 14.0867L15.806 13.5563C18.7309 10.6314 18.7309 5.87229 15.806 2.94661L15.2756 2.41699Z"
          fill="currentColor"
        />
      </svg>
    )}
  </button>
);

export default MuteButton;
