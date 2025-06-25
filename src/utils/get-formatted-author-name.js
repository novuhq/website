const getFormattedAuthorsName = (name) => {
  if (!name || typeof name !== 'string') {
    return '';
  }

  const parts = name
    .trim()
    .split(' ')
    .filter((part) => part.length > 0);

  if (parts.length > 1 && parts[1].length > 0) {
    parts[1] = `${parts[1][0]}.`;
  }

  return parts.join(' ');
};

export default getFormattedAuthorsName;
