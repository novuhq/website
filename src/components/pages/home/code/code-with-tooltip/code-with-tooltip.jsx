import React from 'react';

import StepTooltip from './step-tooltip';

const TOOLTIP_CONTENT = {
  workflowTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          (alias) <span className="text-yellow">workflow</span>(
        </span>
        <span className="whitespace-pre">{'  '}id: string,</span>
        <span className="whitespace-pre">
          {'  '}execute: <span className="text-yellow">Execute</span>&lt;...&gt;,
        </span>
        <span className="whitespace-pre">
          {'  '}options?: <span className="text-yellow">WorkflowOptions</span>&lt;...&gt;,
        </span>
        <span className="whitespace-pre">
          ): <span className="text-yellow">Workflow</span>&lt;...&gt;
        </span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">Define a notification workflow.</span>
    </span>
  ),
  controlsTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          (parameter) <span className="text-yellow">controls</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">subject</span>: string;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">openAiModel</span>: &quot;gpt-3.5-turbo&quot; |
          &quot;gpt-4o&quot;;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">aiPrompt</span>: string;
        </span>
        <span className="whitespace-pre">&#125;</span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">The controls for the workflow step.</span>
    </span>
  ),
  stepTooltip: <StepTooltip />,
  weeklyCommentsEventTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          (parameter) <span className="text-yellow">event</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">payload</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'    '}
          <span className="text-yellow">userName</span>: string;
        </span>
        <span className="whitespace-pre">{'    '}...</span>
        <span className="whitespace-pre">{'  '}&#125;;</span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">step</span>: Step;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">subscriber</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'    '}
          <span className="text-yellow">firstName</span>: string;
        </span>
        <span className="whitespace-pre">{'    '}...</span>
        <span className="whitespace-pre">{'  '}&#125;;</span>
        <span>&#125;</span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">The event that triggered the workflow.</span>
    </span>
  ),
  commentPayloadTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          <span className="text-yellow">payload</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">userName</span>: string;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">userAvatar</span>: string;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">project</span>: string;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">replyUrl</span>: string;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">comment</span>: string;
        </span>
        <span className="whitespace-pre">&#125;;</span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">The data passed during the trigger, types</span>
      <span className="px-3.5">are generated from `payloadSchema`</span>
    </span>
  ),
  otpEventTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          (parameter) <span className="text-yellow">event</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">payload</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'    '}
          <span className="text-yellow">code</span>: string;
        </span>
        <span className="whitespace-pre">{'  '}&#125;;</span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">step</span>: Step;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">subscriber</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'    '}
          <span className="text-yellow">firstName</span>: string;
        </span>
        <span className="whitespace-pre">{'    '}...</span>
        <span className="whitespace-pre">{'  '}&#125;;</span>
        <span>&#125;</span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">The event that triggered the workflow.</span>
    </span>
  ),
  otpPayloadTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          (property) <span className="text-yellow">payload</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">code</span>: string;
        </span>
        <span className="whitespace-pre">&#125;</span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">The payload for the event, provided during trigger.</span>
    </span>
  ),
  controlSchemaTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          (property) <span className="text-yellow">controlSchema</span>?: ZodSchema | JsonSchema
        </span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">The step control schema. Validates input from Novu Dashboard.</span>
    </span>
  ),
  renderTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          (alias) <span className="text-yellow">const</span> render: (
        </span>
        <span className="whitespace-pre">
          {'  '}component: <span className="text-yellow">React.ReactElement</span>,
        </span>
        <span className="whitespace-pre">
          {'  '}options?: <span className="text-yellow">Options</span>
        </span>
        <span className="whitespace-pre">
          ) {`=>`} <span className="text-yellow">string</span>
        </span>
        <span className="whitespace-pre">
          <span className="text-yellow">import</span> render
        </span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">Transform React components into HTML email templates.</span>
    </span>
  ),
  skipTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          (property) <span className="text-yellow">skip</span>: (controls:{' '}
          <span className="text-yellow">Controls</span>){` => boolean`}
        </span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">Skip the step. If true is returned, the step will be skipped.</span>
    </span>
  ),
  triggerTooltip: (
    <span className="flex flex-col py-3.5">
      <span className="px-3.5 flex flex-col">
        <span className="whitespace-pre">
          (property) <span className="text-yellow">trigger</span>: (event: &#123;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">payload</span>: &#123;
        </span>
        <span className="whitespace-pre">
          {'    '}
          <span className="text-yellow">name</span>: string;
        </span>
        <span className="whitespace-pre">
          {'    '}
          <span className="text-yellow">comment</span>: string;
        </span>
        <span className="whitespace-pre">{'  '}&#125;;</span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">to</span>: Recipients;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">actor?</span>: Actor | undefined;
        </span>
        <span className="whitespace-pre">
          {'  '}
          <span className="text-yellow">tenant?</span>: Tenant | undefined;
        </span>
        <span className="whitespace-pre">
          &#125;){` => `}
          <span className="text-yellow">Promise</span>&lt;...&gt;
        </span>
      </span>
      <span className="my-3 mx-3.5 h-px bg-white/50" aria-hidden />
      <span className="px-3.5">Trigger a notification workflow.</span>
    </span>
  ),
};

const CodeWithTooltip = ({ tooltipId, children, tooltipPosition }) => (
  <span className="group relative bg-white/10 border border-white/35 rounded-sm" id={tooltipId}>
    {children}

    <span
      className={`tooltip-animation absolute top-[105%] ${
        tooltipPosition === 'right' ? 'left-0' : 'right-0'
      } ${
        tooltipPosition === 'right' ? '' : ''
      } bg-[linear-gradient(159.72deg,rgba(16,26,37,1)_9.88%,rgba(16,20,37,1)_87.56%)] rounded-lg border border-[rgba(58,64,81,1)] z-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 [transition:visibility_0s_0.6s,opacity_0.3s_0.3s_linear] group-hover:[transition:visibility_0s_0s,opacity_0.3s_0s_linear] md:hidden`}
    >
      {TOOLTIP_CONTENT[tooltipId]}
    </span>
  </span>
);

export default CodeWithTooltip;
