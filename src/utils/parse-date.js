const parseDateToMinutes = (date) => {
  if (date.endsWith('min')) {
    return parseInt(date.replace('min', '').trim(), 10);
  }
  if (date.endsWith('h')) {
    return parseInt(date.replace('h', '').trim(), 10) * 60;
  }
  return Infinity;
};

export default parseDateToMinutes;
