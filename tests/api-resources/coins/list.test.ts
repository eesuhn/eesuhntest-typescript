// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Eesuhntest from '@eesuhn/eesuhntest-typescript';

const client = new Eesuhntest({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource list', () => {
  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = client.coins.list.get();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.list.get(
        { include_platform: true, status: 'active' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Eesuhntest.NotFoundError);
  });
});
