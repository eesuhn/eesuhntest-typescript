// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Eesuhntest from '@eesuhn/eesuhntest-typescript';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import get_id_coins from './coins/get-id-coins';
import get_coins_categories from './coins/categories/get-coins-categories';
import get_coins_list from './coins/list/get-coins-list';
import get_range_coins_market_chart from './coins/market-chart/get-range-coins-market-chart';
import get_range_coins_ohlc from './coins/ohlc/get-range-coins-ohlc';
import get_key from './key/get-key';
import get_onchain_networks from './onchain/networks/get-onchain-networks';
import get_network_networks_onchain_trending_pools from './onchain/networks/trending-pools/get-network-networks-onchain-trending-pools';
import get_networks_onchain_pools from './onchain/networks/pools/get-networks-onchain-pools';
import get_addresses_pools_networks_onchain_multi from './onchain/networks/pools/multi/get-addresses-pools-networks-onchain-multi';
import get_addresses_tokens_networks_onchain_multi from './onchain/networks/tokens/multi/get-addresses-tokens-networks-onchain-multi';
import get_pools_onchain_megafilter from './onchain/pools/megafilter/get-pools-onchain-megafilter';
import get_addresses_networks_simple_onchain_token_price from './onchain/simple/networks/token-price/get-addresses-networks-simple-onchain-token-price';
import get_simple_price from './simple/price/get-simple-price';
import get_id_simple_token_price from './simple/token-price/get-id-simple-token-price';

export type HandlerFunction = (client: Eesuhntest, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];

  httpMethod?: string;
  httpPath?: string;
  operationId?: string;
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(get_id_coins);
addEndpoint(get_coins_categories);
addEndpoint(get_coins_list);
addEndpoint(get_range_coins_market_chart);
addEndpoint(get_range_coins_ohlc);
addEndpoint(get_key);
addEndpoint(get_onchain_networks);
addEndpoint(get_network_networks_onchain_trending_pools);
addEndpoint(get_networks_onchain_pools);
addEndpoint(get_addresses_pools_networks_onchain_multi);
addEndpoint(get_addresses_tokens_networks_onchain_multi);
addEndpoint(get_pools_onchain_megafilter);
addEndpoint(get_addresses_networks_simple_onchain_token_price);
addEndpoint(get_simple_price);
addEndpoint(get_id_simple_token_price);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
