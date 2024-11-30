const formatDate = (date: Date): string => {
  const formatter = Intl.DateTimeFormat('en', { month: 'numeric', day: 'numeric' });
  return formatter.format(date);
};

export default formatDate;
