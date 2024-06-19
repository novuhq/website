import PropTypes from 'prop-types';
import React from 'react';

import getChannelName from 'utils/get-channel-name';

import addIcon from './images/add.svg';
import bg from './images/bg.svg';
import chatIcon from './images/chat.svg';
import delayIcon from './images/delay.svg';
import digestIcon from './images/digest.svg';
import emailIcon from './images/email.svg';
import inAppIcon from './images/in-app.svg';
import pushIcon from './images/push.svg';
import smsIcon from './images/sms.svg';
import triggerIcon from './images/trigger.svg';

const CHANNELS_AND_ACTIONS = [
  {
    title: 'Steps to add',
    items: [
      {
        label: 'In-App',
        icon: inAppIcon,
      },
      {
        label: 'Email',
        icon: emailIcon,
      },
      {
        label: 'SMS',
        icon: smsIcon,
      },

      {
        label: 'Chat',
        icon: chatIcon,
      },
      {
        label: 'Push',
        icon: pushIcon,
      },
    ],
  },
  {
    title: 'Actions',
    items: [
      {
        label: 'Digest',
        icon: digestIcon,
      },
      {
        label: 'Delay',
        icon: delayIcon,
      },
    ],
  },
];

const icons = {
  in_app: inAppIcon,
  sms: smsIcon,
  email: emailIcon,
  push: pushIcon,
  chat: chatIcon,
  digest: digestIcon,
  delay: delayIcon,
  trigger: triggerIcon,
};

const Workflow = ({ steps }) => (
  <div className="mt-12">
    <div
      className="relative flex overflow-hidden rounded-lg bg-[#1E1E26] p-10"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <ul className="relative z-10 mx-auto flex w-full max-w-[220px] flex-shrink-0 flex-col items-center justify-center gap-y-8">
        <li className="flex w-full flex-shrink-0 items-center justify-between rounded-[7px] bg-[#23232B] px-3.5 py-4 shadow-[0px_5px_20px_rgba(0,0,0,0.2)]">
          <div className="flex items-center">
            <img src={icons.trigger} height={18} width={18} loading="eager" alt="" />
            <span className="ml-3 text-xs font-medium">Trigger</span>
          </div>

          <div className="flex w-4 justify-between">
            <span className="h-0.5 w-0.5 rounded-full bg-[#525266]" />
            <span className="h-0.5 w-0.5 rounded-full bg-[#525266]" />
            <span className="h-0.5 w-0.5 rounded-full bg-[#525266]" />
          </div>
        </li>
        {steps?.map(({ template }, index) => {
          const icon = icons[template.type];

          return (
            <li
              className="befor:-translate-x-1/2 relative flex w-full flex-shrink-0 items-center justify-between rounded-[7px] bg-[#23232B] px-3.5 py-4 shadow-[0px_5px_20px_rgba(0,0,0,0.2)] before:absolute before:-top-full before:left-1/2 before:-z-10 before:h-full before:w-px before:border-l before:border-dashed before:border-[#525266]"
              key={index}
            >
              <div className="flex items-center">
                <img src={icon} height={18} width={18} loading="eager" alt="" />
                <span className="ml-3 text-xs font-medium">{getChannelName(template.type)}</span>
              </div>
              <div className="flex w-4 justify-between">
                <span className="h-0.5 w-0.5 rounded-full bg-[#525266]" />
                <span className="h-0.5 w-0.5 rounded-full bg-[#525266]" />
                <span className="h-0.5 w-0.5 rounded-full bg-[#525266]" />
              </div>
            </li>
          );
        })}

        <img src={addIcon} height={30} width={30} loading="eager" alt="" />
      </ul>

      <div className="h-max w-full max-w-[250px] rounded-[7px] bg-[#23232B] p-5 sm:hidden">
        <div className="flex flex-col gap-y-4">
          {CHANNELS_AND_ACTIONS.map(({ title, items }, index) => (
            <div key={index}>
              <h4 className="text-xs font-medium">{title}</h4>
              <ul className="mt-2 flex flex-col gap-y-4">
                {items?.map(({ label, icon }, index) => (
                  <li
                    className="flex items-center rounded-[7px] border border-dashed border-[#525266] px-3 py-2"
                    key={index}
                  >
                    <img src={icon} height={18} width={18} loading="eager" alt="" />
                    <span className="ml-3 text-xs">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

Workflow.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      template: PropTypes.shape({
        type: PropTypes.string,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default Workflow;
