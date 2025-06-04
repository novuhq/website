const getFormattedAuthorsName = (name) => {
  const parts = name.split(' ');

  if (parts.length > 1) {
    parts[1] = `${parts[1][0]}.`;
  }

  return parts.join(' ');
};

export default getFormattedAuthorsName;
