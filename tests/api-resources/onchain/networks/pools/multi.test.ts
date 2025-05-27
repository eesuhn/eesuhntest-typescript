// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Eesuhntest from '@eesuhn/eesuhntest-typescript';

const client = new Eesuhntest({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource multi', () => {
  // skipped: tests are disabled for the time being
  test.skip('getAddresses: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.multi.getAddresses('addresses', { network: 'eth' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getAddresses: required and optional params', async () => {
    const response = await client.onchain.networks.pools.multi.getAddresses('addresses', {
      network: 'eth',
      include: 'include',
    });
  });
});
