import React, { useEffect } from 'react';

import Button from 'components/shared/button';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('fixed', 'overflow-hidden');
    } else {
      document.body.classList.remove('fixed', 'overflow-hidden');
    }

    // Clean up the classes when the component unmounts
    return () => {
      document.body.classList.remove('fixed', 'overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-scroll bg-opacity-50 backdrop-blur-md backdrop-filter">
      <div className="shadow-lg fixed left-1/2 top-1/2 h-[700px] w-[80%] -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto overflow-x-hidden rounded-lg bg-black p-8 text-white">
        <p>
          <p>
            <span className="mb-1 block text-4xl">Hello there! 👋</span>
            We are thrilled that you’ve chosen Novu as part of your Hacktoberfest journey. At Novu,
            contributions are at the very core of how we move forward. As such, new contributions
            are not only welcome but actively encouraged.{' '}
          </p>
          <p>
            This guide will help you get started with contributing to Novu and become a valued
            member of our vibrant community.{' '}
          </p>
          <p>Let’s begin! 🚀</p>
          <h3 className="mb-1 mt-1 text-3xl">Setting Up Your Development Environment</h3>
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
          <h3 className="mb-1 text-2xl">Requirements</h3>
          <ul>
            <li className="list-disc">Node.js version v14.19.3</li>
            <li className="list-disc">MongoDB</li>
            <li className="list-disc">
              Redis. To install Redis on your O.S, please follow the below guides
              <ul>
                <li>
                  <a
                    href="https://redis.io/docs/getting-started/installation/install-redis-on-windows/"
                    className="text-[#00D5FF] underline"
                  >
                    To install Redis on Windows
                  </a>
                </li>
                <li>
                  <a
                    href="https://redis.io/docs/getting-started/installation/install-redis-on-linux/"
                    className="text-[#00D5FF] underline"
                  >
                    To install Redis on Linux
                  </a>
                </li>
                <li>
                  <a
                    href="https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/"
                    className="text-[#00D5FF] underline"
                  >
                    To install Redis on macOS
                  </a>
                </li>
              </ul>
            </li>
            <li className="list-disc">
              (Optional) pnpm - Needed if you want to install new packages
            </li>
            <li className="list-disc">
              (Optional) localstack (required only in S3 related modules)
            </li>
          </ul>
          <h3 className="mb-1 text-2xl">Forking the Repository</h3>
          <p>
            Click the &quot;Fork&quot; button on our{' '}
            <a href="https://github.com/novuhq/novu/tree/next" className="text-[#00D5FF] underline">
              GitHub repository
            </a>{' '}
            to create a copy of the project in your GitHub account. You will be making changes to
            your fork and then creating pull requests from there.{' '}
          </p>
          <p>
            By default, you’ll be cloning the <code>next</code> branch. <code>next</code> is our
            development branch and it is recommended that you contribute to this branch only and not
            to <code>main</code> which is our production branch.
          </p>
          <h3 className="mb-1 text-2xl">Cloning the Fork</h3>
          <p>Clone your forked repository to your local machine using the following command:</p>
          <pre>
            <code>
              git <span>clone</span> <span>https</span>://github.com/novuhq/novu.git
            </code>
          </pre>
          <h2>Making Contributions</h2>
          <h3 className="mb-1 text-2xl">Creating a New Branch</h3>
          <p>
            Before making changes, create a new branch for your contribution. Name your branch
            descriptively, such as &quot;fix-issue-123&quot; or
            &quot;feat-add-awesome-feature.&quot; Popular terminology to follow:
          </p>
          <ul>
            <li className="list-disc">build</li>
            <li className="list-disc">chore</li>
            <li className="list-disc">ci</li>
            <li className="list-disc">docs</li>
            <li className="list-disc">feat</li>
            <li className="list-disc">fix</li>
            <li className="list-disc">perf</li>
            <li className="list-disc">refactor</li>
            <li className="list-disc">revert</li>
            <li className="list-disc">style</li>
            <li className="list-disc">test</li>
          </ul>
          <pre>
            <code>
              git checkout -<span>b</span> your-branch-name
            </code>
          </pre>
          <h3 className="mb-1 text-2xl">Making Changes</h3>
          <p>
            Make your desired changes to the codebase. To ensure consistency throughout the source
            code, please keep these rules in mind as you are working:
          </p>
          <ul>
            <li>All features or bug fixes must be tested by one or more specs (unit tests).</li>
            <li>
              We use{' '}
              <a href="https://eslint.org/docs/rules/" className="text-[#00D5FF] underline">
                Eslint default rule guide
              </a>
              , with minor changes. An automated formatter is available using prettier.
            </li>
          </ul>
          <h3 className="mb-1 text-2xl">Committing Changes</h3>
          <p>
            Add the files you’ve made changes in to git tracking and commit your changes with a
            clear and concise message. Use the present tense and provide context about what your
            commit does.
          </p>
          <pre>
            <code>
              git <span>add</span>
              <span> fileName</span>
              <span>
                # To add all the files you've made changes in, you can also use: "git add ."
              </span>
              git commit -m <span>"feat: Description of your changes"</span>
            </code>
          </pre>
          <h3 className="mb-1 text-2xl">Pushing Changes</h3>
          <p>Push your branch to your fork on GitHub:</p>
          <pre>
            <code>
              git <span>push</span> <span>origin</span> your-branch-name
            </code>
          </pre>
          <h2>Opening Pull Requests</h2>
          <h3 className="mb-1 text-2xl">Creating a Pull Request</h3>
          <p>
            Navigate to your forked repository on GitHub and click the &quot;New Pull Request&quot;
            button. Select the base repository and branch (select our development branch{' '}
            <code>next</code> here) you want to merge your changes into.
          </p>
          <h3 className="mb-1 text-2xl">Writing a Good Pull Request Description</h3>
          <p>
            A good PR description is one that explains what your changes accomplish and provides
            context. For your ease, whenever you create a new Pull Request, you’ll automatically see
            a template with some questions about your pull request. Ensure that you answer those as
            best as you can and include screenshots and screencasts wherever you can.
          </p>
          <h3 className="mb-1 text-2xl">Review Process</h3>
          <p>
            Your pull request will undergo review by the core Novu team members. They may suggest
            changes, refer to a different issue or request clarifications. Be responsive and open to
            feedback. Once approved, your contribution will be merged into the project. 🎉
          </p>
          <h3 className="mb-1 text-2xl">Ways to Contribute</h3>
          <ul>
            <li>
              Browse the already existing issues using labels like <code>Hacktoberfest</code>,{' '}
              <code>good-first-issue</code>, and <code>help-wanted</code>
            </li>
            <li>Try the Novu API and platform and give feedback</li>
            <li>Add new providers</li>
            <li>
              Help with open{' '}
              <a href="https://github.com/novuhq/novu/issues" className="text-[#00D5FF] underline">
                issues
              </a>{' '}
              or{' '}
              <a
                href="https://github.com/novuhq/novu/issues/new/choose"
                className="text-[#00D5FF] underline"
              >
                create your own
              </a>
            </li>
            <li>Share your thoughts and suggestions with us</li>
            <li>Help create tutorials and blog posts</li>
            <li>Request a feature by submitting a proposal</li>
            <li>Report a bug</li>
            <li>
              Improve documentation - fix incomplete or missing{' '}
              <a href="https://docs.novu.co/" className="text-[#00D5FF] underline">
                docs
              </a>
              , bad wording, examples or explanations.
            </li>
            <li>
              Adding a new provider - If you are in need of a provider we do not yet have, you can
              request a new one by{' '}
              <a
                href="https://github.com/novuhq/novu/blob/next/CONTRIBUTING.md#submitting-an-issue"
                className="text-[#00D5FF] underline"
              >
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
          <h3 className="mb-1 text-2xl">Joining the Community</h3>
          <p>
            Novu revolves around community. From day 0, the community has helped play a pivotal part
            in the development of the product and has an active say in determining the direction we
            move forward. We strongly encourage you to become an active member of our vibrant and
            thriving community.{' '}
          </p>
          <p>By being a part of our community, you can </p>
          <ul>
            <li>get support if you’re stuck,</li>
            <li>engage in discussions,</li>
            <li>help fellow contributors and receive help from them,</li>
            <li>Share your knowledge,</li>
            <li>
              learn from veterans contributors (we’ve got a dedicated channel just for
              contributors!),
            </li>
            <li>talk to the core team and maintainers and</li>
            <li>
              receive announcements of the latest events by Novu (we always have something cooking
              there!).
            </li>
          </ul>
          <p>
            Regardless of you’re knowledge level or proficiency, you’re always welcome to{' '}
            <a href="https://discord.gg/novu" className="text-[#00D5FF] underline">
              join our community!
            </a>{' '}
            🫂
          </p>
          <p>
            You can also follow us on{' '}
            <a href="https://twitter.com/novuhq" className="text-[#00D5FF] underline">
              Twitter
            </a>{' '}
            to stay in the know of the latest announcements and read our{' '}
            <a href="https://dev.to/novu" className="text-[#00D5FF] underline">
              DevTo
            </a>{' '}
            blogs to learn more.
          </p>
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            size="sm"
            theme="blue-gradient"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            I've read it! 🎉
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
