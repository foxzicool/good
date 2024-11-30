import { afterAll, describe, expect, it, vi } from 'vitest';
import { useHead } from '@unhead/vue';
import useGoogleAnalytics from './useGoogleAnalytics';

vi.mock('@unhead/vue', { spy: true });

describe('useGoogleAnalytics()', () => {
  afterAll(() => {
    vi.restoreAllMocks();
  });

  const gaMeasurementId = 'G-TESTMEASUREMENTID';

  it('injects scripts via useHead()', () => {
    useGoogleAnalytics(gaMeasurementId);

    expect(useHead).toHaveBeenNthCalledWith(1, {
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`,
          async: true,
        },
        {
          innerHTML: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', {
page_path: window.location.pathname,
});
`,
        },
      ],
    });
  });
});
