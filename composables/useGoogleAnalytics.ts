const useGoogleAnalytics = (gaMeasurementId: string) => {
  // ref: https://developers.google.com/tag-platform/tag-manager/datalayer#installation
  const scriptString = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', {
page_path: window.location.pathname,
});
`;

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`,
        async: true,
      },
      { innerHTML: scriptString },
    ],
  });
};

export default useGoogleAnalytics;
