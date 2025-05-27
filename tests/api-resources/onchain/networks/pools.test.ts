// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Eesuhntest from 'eesuhntest';

const client = new Eesuhntest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource pools', () => {
  // skipped: tests are disabled for the time being
  test.skip('getMultiplePools: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.getMultiplePools('addresses', { network: 'eth' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getMultiplePools: required and optional params', async () => {
    const response = await client.onchain.networks.pools.getMultiplePools('addresses', {
      network: 'eth',
      include: 'include',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listTopPools', async () => {
    const responsePromise = client.onchain.networks.pools.listTopPools('eth');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTopPools: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onchain.networks.pools.listTopPools(
        'eth',
        { include: 'include', page: 0, sort: 'h24_tx_count_desc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Eesuhntest.NotFoundError);
  });
});
