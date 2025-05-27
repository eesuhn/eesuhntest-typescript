// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Eesuhntest from 'eesuhntest';

const client = new Eesuhntest({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource coins', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.coins.retrieve('bitcoin');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.retrieve(
        'bitcoin',
        {
          community_data: true,
          developer_data: true,
          localization: true,
          market_data: true,
          sparkline: true,
          tickers: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Eesuhntest.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.coins.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.list({ include_platform: true, status: 'active' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Eesuhntest.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listCategories', async () => {
    const responsePromise = client.coins.listCategories();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listCategories: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.listCategories({ order: 'market_cap_desc' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Eesuhntest.NotFoundError);
  });
});
