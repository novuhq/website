import React from 'react';

const MODAL_CONTENT = (
  <>
    <h2>Hello there! 👋</h2>
    <p>
      We are thrilled that you’ve chosen Novu as part of your Hacktoberfest journey. At Novu,
      contributions are at the very core of how we move forward. As such, new contributions are not
      only welcome but actively encouraged.
    </p>
    <p>
      This guide will help you get started with contributing to Novu and become a valued member of
      our vibrant community.
    </p>
    <p>Let’s begin! 🚀</p>
    <h3>Setting Up Your Development Environment</h3>
    <p>
      To start contributing seamlessly, ensure that your development environment is properly
      configured. Follow our{' '}
      <a
        href="https://handbook.novu.co/getting-started/start-coding-guide"
        className="text-[#00D5FF] underline"
      >
        Start Coding Guide
      </a>{' '}
      to get started.
    </p>
    <h3>Requirements</h3>
    <ul>
      <li>Node.js version v14.19.3</li>
      <li>MongoDB</li>
      <li>
        Redis. To install Redis on your O.S, please follow the below guides
        <ul>
          <li>
            <a href="https://redis.io/docs/getting-started/installation/install-redis-on-windows/">
              To install Redis on Windows
            </a>
          </li>
          <li>
            <a href="https://redis.io/docs/getting-started/installation/install-redis-on-linux/">
              To install Redis on Linux
            </a>
          </li>
          <li>
            <a href="https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/">
              To install Redis on macOS
            </a>
          </li>
        </ul>
      </li>
      <li>(Optional) pnpm - Needed if you want to install new packages</li>
      <li>(Optional) localstack (required only in S3 related modules)</li>
    </ul>
    <h3>Forking the Repository</h3>
    <p>
      Click the &quot;Fork&quot; button on our{' '}
      <a href="https://github.com/novuhq/novu/tree/next">GitHub repository</a> to create a copy of
      the project in your GitHub account. You will be making changes to your fork and then creating
      pull requests from there.{' '}
    </p>
    <p>
      By default, you’ll be cloning the <code>next</code> branch. <code>next</code> is our
      development branch and it is recommended that you contribute to this branch only and not to{' '}
      <code>main</code> which is our production branch.
    </p>
    <h3>Cloning the Fork</h3>
    <p>Clone your forked repository to your local machine using the following command:</p>
    <pre>
      <code>
        git <span>clone</span> <span>https</span>://github.com/novuhq/novu.git
      </code>
    </pre>
    <h2>Making Contributions</h2>
    <h3>Creating a New Branch</h3>
    <p>
      Before making changes, create a new branch for your contribution. Name your branch
      descriptively, such as &quot;fix-issue-123&quot; or &quot;feat-add-awesome-feature.&quot;
      Popular terminology to follow:
    </p>
    <ul>
      <li>build</li>
      <li>chore</li>
      <li>ci</li>
      <li>docs</li>
      <li>feat</li>
      <li>fix</li>
      <li>perf</li>
      <li>refactor</li>
      <li>revert</li>
      <li>style</li>
      <li>test</li>
    </ul>
    <pre>
      <code>
        git checkout -<span>b</span> your-branch-name
      </code>
    </pre>
    <h3>Making Changes</h3>
    <p>
      Make your desired changes to the codebase. To ensure consistency throughout the source code,
      please keep these rules in mind as you are working:
    </p>
    <ul>
      <li>All features or bug fixes must be tested by one or more specs (unit tests).</li>
      <li>
        We use <a href="https://eslint.org/docs/rules/">Eslint default rule guide</a>, with minor
        changes. An automated formatter is available using prettier.
      </li>
    </ul>
    <h3>Committing Changes</h3>
    <p>
      Add the files you’ve made changes in to git tracking and commit your changes with a clear and
      concise message. Use the present tense and provide context about what your commit does.
    </p>
    <pre>
      <code>
        git <span>add</span>
        <span> fileName</span>
        <span># To add all the files you've made changes in, you can also use: "git add ."</span>
        git commit -m <span>"feat: Description of your changes"</span>
      </code>
    </pre>
    <h3>Pushing Changes</h3>
    <p>Push your branch to your fork on GitHub:</p>
    <pre>
      <code>
        git <span>push</span> <span>origin</span> your-branch-name
      </code>
    </pre>
    <h2>Opening Pull Requests</h2>
    <h3>Creating a Pull Request</h3>
    <p>
      Navigate to your forked repository on GitHub and click the &quot;New Pull Request&quot;
      button. Select the base repository and branch (select our development branch <code>next</code>{' '}
      here) you want to merge your changes into.
    </p>
    <h3>Writing a Good Pull Request Description</h3>
    <p>
      A good PR description is one that explains what your changes accomplish and provides context.
      For your ease, whenever you create a new Pull Request, you’ll automatically see a template
      with some questions about your pull request. Ensure that you answer those as best as you can
      and include screenshots and screencasts wherever you can.
    </p>
    <h3>Review Process</h3>
    <p>
      Your pull request will undergo review by the core Novu team members. They may suggest changes,
      refer to a different issue or request clarifications. Be responsive and open to feedback. Once
      approved, your contribution will be merged into the project. 🎉
    </p>
    <h3>Ways to Contribute</h3>
    <ul>
      <li>
        Browse the already existing issues using labels like <code>Hacktoberfest</code>,{' '}
        <code>good-first-issue</code>, and <code>help-wanted</code>
      </li>
      <li>Try the Novu API and platform and give feedback</li>
      <li>Add new providers</li>
      <li>
        Help with open <a href="https://github.com/novuhq/novu/issues">issues</a> or{' '}
        <a href="https://github.com/novuhq/novu/issues/new/choose">create your own</a>
      </li>
      <li>Share your thoughts and suggestions with us</li>
      <li>Help create tutorials and blog posts</li>
      <li>Request a feature by submitting a proposal</li>
      <li>Report a bug</li>
      <li>
        Improve documentation - fix incomplete or missing <a href="https://docs.novu.co/">docs</a>,
        bad wording, examples or explanations.
      </li>
      <li>
        Adding a new provider - If you are in need of a provider we do not yet have, you can request
        a new one by{' '}
        <a href="https://github.com/novuhq/novu/blob/next/CONTRIBUTING.md#submitting-an-issue">
          submitting an issue
        </a>{' '}
        or you can build a new one by following our{' '}
        <a
          href="https://docs.novu.co/community/create-provider"
          className="text-[#00D5FF] underline"
        >
          create a provider guide
        </a>
        .
      </li>
    </ul>
    <h2>Community and Communication</h2>
    <h3>Joining the Community</h3>
    <p>
      Novu revolves around community. From day 0, the community has helped play a pivotal part in
      the development of the product and has an active say in determining the direction we move
      forward. We strongly encourage you to become an active member of our vibrant and thriving
      community.{' '}
    </p>
    <p>By being a part of our community, you can </p>
    <ul>
      <li>get support if you’re stuck,</li>
      <li>engage in discussions,</li>
      <li>help fellow contributors and receive help from them,</li>
      <li>Share your knowledge,</li>
      <li>
        learn from veterans contributors (we’ve got a dedicated channel just for contributors!),
      </li>
      <li>talk to the core team and maintainers and</li>
      <li>
        receive announcements of the latest events by Novu (we always have something cooking
        there!).
      </li>
    </ul>
    <p>
      Regardless of you’re knowledge level or proficiency, you’re always welcome to{' '}
      <a href="https://discord.gg/novu">join our community!</a> 🫂
    </p>
    <p>
      You can also follow us on <a href="https://twitter.com/novuhq">Twitter</a> to stay in the know
      of the latest announcements and read our <a href="https://dev.to/novu">DevTo</a> blogs to
      learn more.
    </p>
  </>
);

export default MODAL_CONTENT;
