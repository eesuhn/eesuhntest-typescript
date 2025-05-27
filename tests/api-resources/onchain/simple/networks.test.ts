// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Eesuhntest from 'eesuhntest';

const client = new Eesuhntest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource networks', () => {
  // skipped: tests are disabled for the time being
  test.skip('getTokenPrice: only required params', async () => {
    const responsePromise = client.onchain.simple.networks.getTokenPrice('addresses', { network: 'eth' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTokenPrice: required and optional params', async () => {
    const response = await client.onchain.simple.networks.getTokenPrice('addresses', {
      network: 'eth',
      include_24hr_price_change: true,
      include_24hr_vol: true,
      include_market_cap: true,
      include_total_reserve_in_usd: true,
      mcap_fdv_fallback: true,
    });
  });
});
