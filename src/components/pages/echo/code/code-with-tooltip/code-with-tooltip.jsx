import React from 'react';

import StepTooltip from './step-tooltip';

const TOOLTIP_CONTENT = {
  stepTooltip: <StepTooltip />,
  echoTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="whitespace-normal px-3.5">
        (alias) <span className="text-yellow">new Echo</span>(&#123; apiKey, ... opts &#125;?:
        ClientOptions): Echo
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">Echo, the Notifications as Code client.</span>
    </span>
  ),
  // prettier-ignore
  eventTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">(parameter) <span className="text-yellow">event</span>: &#123;</span>
        <span className="whitespace-pre">  <span className="text-yellow">environment</span>: &#123; ... &#125;;</span>
        <span className="whitespace-pre">  <span className="text-yellow">inputs</span>: &#123; ... &#125;;</span>
        <span className="whitespace-pre">  <span className="text-yellow">payload</span>: &#123;</span>
        <span className="whitespace-pre">    <span className="text-yellow">postId</span>: string</span>
        <span className="whitespace-pre">  &#125;;</span>
        <span className="whitespace-pre">  <span className="text-yellow">step</span>: Step;</span>
        <span className="whitespace-pre">  <span className="text-yellow">subscriber</span>: &#123;</span>
        <span className="whitespace-pre">    <span className="text-yellow">firstName</span>: string;</span>
        <span className="whitespace-pre">    ...</span>
        <span className="whitespace-pre">  &#125;;</span>
        <span>&#125;</span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">The event that triggered the workflow.</span>
    </span>
  ),
  payloadTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="whitespace-normal px-3.5 text-white/40">
        (property) payload: &#123; postId: string &#125;
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">The payload for the event, provided during trigger</span>
    </span>
  ),
  seenTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="whitespace-normal px-3.5 text-white/40">(property) seen: boolean</span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">Flag indicating if the notification has been seen.</span>
    </span>
  ),
  triggerTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="whitespace-normal px-3.5 text-white/40">(method) trigger: Trigger</span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">Trigger a notification workflow.</span>
    </span>
  ),
};

const CodeWithTooltip = ({ tooltipId, children }) => (
  <span className="group relative bg-white/10 border border-white/35 rounded-sm" id={tooltipId}>
    {children}

    <span className="tooltip-animation absolute top-full left-full bg-[linear-gradient(159.72deg,rgba(16,26,37,1)_9.88%,rgba(16,20,37,1)_87.56%)] rounded-lg border border-[rgba(58,64,81,1)] z-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 [transition:visibility_0s_0.6s,opacity_0.3s_0.3s_linear] group-hover:[transition:visibility_0s_0s,opacity_0.3s_0s_linear]">
      {TOOLTIP_CONTENT[tooltipId]}
    </span>
  </span>
);

export default CodeWithTooltip;
