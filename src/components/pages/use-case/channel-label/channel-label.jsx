import PropTypes from 'prop-types';
import React from 'react';

import chatIcon from '../workflow/images/chat.svg';
import emailIcon from '../workflow/images/email.svg';
import inAppIcon from '../workflow/images/in-app.svg';
import pushIcon from '../workflow/images/push.svg';
import smsIcon from '../workflow/images/sms.svg';

const icons = {
  in_app: inAppIcon,
  sms: smsIcon,
  email: emailIcon,
  push: pushIcon,
  chat: chatIcon,
};

const themes = {
  'gradient-shadow': {
    icon: 'w-4 h-4',
    text: '-mt-0.5 text-xs text-gray-8',
  },
  default: {
    icon: 'w-[18px] h-[18px]',
    text: '-mt-0.5 text-sm font-light text-gray-9',
  },
};

const ChannelLabel = ({ theme, icon, children }) => {
  const styles = themes[theme];

  return (
    <>
      <img src={icons[icon]} alt="" loading="eager" className={styles.icon} />
      <span className={styles.text}>{children}</span>
    </>
  );
};

ChannelLabel.propTypes = {
  theme: PropTypes.oneOf(['gradient-shadow', 'default']),
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  children: PropTypes.node.isRequired,
};

ChannelLabel.defaultProps = {
  theme: 'default',
};

export default ChannelLabel;
