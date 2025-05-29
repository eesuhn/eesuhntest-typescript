// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Eesuhntest from '@eesuhn/eesuhntest-typescript';

export const metadata: Metadata = {
  resource: 'coins.ohlc',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/ohlc/range',
  operationId: 'coins-id-ohlc-range',
};

export const tool: Tool = {
  name: 'get_range_coins_ohlc',
  description:
    'This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      from: {
        type: 'number',
        description: 'starting date in UNIX timestamp',
      },
      interval: {
        type: 'string',
        description: 'data interval',
        enum: ['daily', 'hourly'],
      },
      to: {
        type: 'number',
        description: 'ending date in UNIX timestamp',
      },
      vs_currency: {
        type: 'string',
        description:
          'target currency of price data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
    },
  },
};

export const handler = (client: Eesuhntest, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.coins.ohlc.getRange(id, body);
};

export default { metadata, tool, handler };
