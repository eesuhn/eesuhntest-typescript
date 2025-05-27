// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Eesuhntest from 'eesuhntest';

const client = new Eesuhntest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource networks', () => {
  // skipped: tests are disabled for the time being
  test.skip('getTrendingPools', async () => {
    const responsePromise = client.onchain.networks.getTrendingPools('eth');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTrendingPools: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onchain.networks.getTrendingPools(
        'eth',
        { duration: '5m', include: 'include', page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Eesuhntest.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listSupported', async () => {
    const responsePromise = client.onchain.networks.listSupported();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listSupported: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onchain.networks.listSupported({ page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Eesuhntest.NotFoundError);
  });
});
