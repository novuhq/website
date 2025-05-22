function getTimeAgo(date) {
  const now = new Date();
  const updatedAt = new Date(date);

  const diffTime = Math.abs(now - updatedAt);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  switch (diffDays) {
    case 0:
      return 'today';
    case 1:
      return 'yesterday';
    case diffDays > 365:
      return 'more than a year ago';
    default:
      return `${diffDays} days ago`;
  }
}

export default getTimeAgo;
