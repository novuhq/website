const getChannelName = (str) => {
  switch (str) {
    case 'in_app':
      return 'In-App';
    case 'sms':
      return 'SMS';
    case 'email':
      return 'Email';
    case 'push':
      return 'Push';
    case 'chat':
      return 'Chat';
    case 'digest':
      return 'Digest';
    case 'delay':
      return 'Delay';
    default:
      return str;
  }
};

module.exports = getChannelName;
