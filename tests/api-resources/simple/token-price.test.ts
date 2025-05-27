// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Eesuhntest from '@eesuhn/eesuhntest-typescript';

const client = new Eesuhntest({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokenPrice', () => {
  // skipped: tests are disabled for the time being
  test.skip('getID: only required params', async () => {
    const responsePromise = client.simple.tokenPrice.getID('ethereum', {
      contract_addresses: 'contract_addresses',
      vs_currencies: 'vs_currencies',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getID: required and optional params', async () => {
    const response = await client.simple.tokenPrice.getID('ethereum', {
      contract_addresses: 'contract_addresses',
      vs_currencies: 'vs_currencies',
      include_24hr_change: true,
      include_24hr_vol: true,
      include_last_updated_at: true,
      include_market_cap: true,
      precision: 'full',
    });
  });
});
