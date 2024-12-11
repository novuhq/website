export const parseDateToMinutes = (date) => {
  if (date.endsWith('min')) {
    return parseInt(date.replace('min', '').trim(), 10);
  }
  if (date.endsWith('h')) {
    return parseInt(date.replace('h', '').trim(), 10) * 60;
  }
  return Infinity;
};

const prepareMessages = (messages) =>
  messages.map((message) => ({
    ...message,
    dateInMin: parseDateToMinutes(message.date),
  }));

const filterMessages = (messages, showRead) => {
  if (!showRead) {
    return messages.filter((message) => !message.isRead);
  }

  return messages;
};

const sortMessages = (messages, isShowUnreadFirst, isNewest) =>
  messages.slice().sort((a, b) => {
    if (isShowUnreadFirst) {
      if (!a.isRead && b.isRead) return -1;
      if (a.isRead && !b.isRead) return 1;
    }

    return isNewest ? a.dateInMin - b.dateInMin : b.dateInMin - a.dateInMin;
  });

export const prepareAndFilterMessages = (messages, showRead, isShowUnreadFirst, isNewest) => {
  const preparedMessages = prepareMessages(messages);
  const filteredMessages = filterMessages(preparedMessages, showRead);
  return sortMessages(filteredMessages, isShowUnreadFirst, isNewest);
};
