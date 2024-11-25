const formatTime = (date: Date): string => {
  const formatter = Intl.DateTimeFormat('en', { hour12: true, hour: 'numeric', minute: 'numeric' });
  return formatter.format(date).replace(/\s(?=AM|PM)/, '');
};

export default formatTime;
