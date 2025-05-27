// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Eesuhntest from '@eesuhn/eesuhntest-typescript';

const client = new Eesuhntest({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource coins', () => {
  // skipped: tests are disabled for the time being
  test.skip('getID', async () => {
    const responsePromise = client.coins.getID('bitcoin');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.getID(
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
});
