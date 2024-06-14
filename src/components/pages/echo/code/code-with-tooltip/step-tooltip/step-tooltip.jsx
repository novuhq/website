import React, { useState } from 'react';

import codeIcon from '../../images/code-icon.svg';

const METHODS_DESCRIPTIONS = {
  chat: {
    code: '(method) chat: ChannelStep<{ body: string }, { seen: boolean; ... }>',
    description: 'Send a chat message.',
  },
  delay: {
    code: '(method) delay: ActionStep<`${number} minute` | `${number} hour` | `${number} day` | `${number} week`, { duration: number }>',
    description: 'Delay the workflow for a period of time.',
  },
  digest: {
    code: '(method) digest: ActionStep<`${number} minute` | `${number} hour` | `${number} day` | `${number} week`, { events: { id: string; timestamp: string; payload: { ... } }[]; }>',
    description: 'Aggregate events for a period of time.',
  },
  email: {
    code: '(method) email: ChannelStep<{ body: string }, { seen: boolean; ... }>',
    description: 'Send an email.',
  },
  inApp: {
    code: '(method) inApp: ChannelStep<{ body: string }, { seen: boolean; ... }>',
    description: 'Send an in-app notification.',
  },
  push: {
    code: '(method) push: ChannelStep<{ body: string }, { seen: boolean; ... }>',
    description: 'Send a push notification.',
  },
  sms: {
    code: '(method) sms: ChannelStep<{ body: string }, { seen: boolean; ... }>',
    description: 'Send an SMS.',
  },
};

const StepTooltip = () => {
  const [method, setMethod] = useState('email');

  return (
    <span className="w-[411px] flex flex-col py-3.5 [mask-image:linear-gradient(180deg,#101425_0%,rgba(16,20,37,0.6)_100%)]">
      <span className="flex flex-col pb-3">
        {Object.keys(METHODS_DESCRIPTIONS).map((key) => (
          <button
            className="flex items-center gap-x-2 px-3.5 py-1 text-left leading-denser hover:bg-[#E1F4FF]/5"
            key={key}
            type="button"
            aria-hidden
            onClick={() => setMethod(key)}
          >
            <img src={codeIcon} alt="" width={16} height={16} />
            {key}
          </button>
        ))}
      </span>
      <span className="px-3.5 py-3 whitespace-normal border-t border-[#3A4051] text-[13px] leading-denser tracking-[-0.01em] text-white/40">
        {METHODS_DESCRIPTIONS[method].code}
      </span>
      <span className="mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="mt-3 px-3.5 text-[13px] leading-denser tracking-[-0.01em] text-white">
        {METHODS_DESCRIPTIONS[method].description}
      </span>
    </span>
  );
};

export default StepTooltip;
