import cloudDataIcon from './images/cloud-data.svg';
import consoleIcon from './images/console.svg';
import debugIcon from './images/debug.svg';
import editIcon from './images/edit.svg';
import integrationIcon from './images/integration.svg';
import migrationIcon from './images/migration.svg';

const CARDS = [
  {
    title: 'Runs in your IT boundary',
    description:
      'Deploy within your organization`s VPC, Kubernetes, serverless setups, or locally for secure data access.',
    image: cloudDataIcon,
  },
  {
    title: 'Limitless integrations',
    description:
      'Use ReactEmail, MJML, LaunchDarkly (and more!), and fetch content and values from anywhere.',
    image: integrationIcon,
  },
  {
    title: 'Easy migration',
    description:
      'Seamlessly integrate with existing services and legacy systems to facilitate adoption.',
    image: migrationIcon,
  },
  {
    title: 'No-code editor',
    description:
      'Product teams can manage workflow configurations without the risk of breaking notification flows.',
    image: editIcon,
  },
  {
    title: 'Powerful debugging',
    description:
      'Rapidly identify and solve previously complicated content hydrating and notification routing issues.',
    image: debugIcon,
  },
  {
    title: 'Speaks your language',
    description: 'Native developer experience and autocomplete in your code and IDE of choice.',
    image: consoleIcon,
  },
];

export default CARDS;
