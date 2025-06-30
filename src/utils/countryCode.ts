export const getCountryCode = (url: string) => {
  return url.split('/').pop();
};
