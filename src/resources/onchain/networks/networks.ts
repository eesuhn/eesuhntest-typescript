// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TrendingPoolsAPI from './trending-pools';
import {
  TrendingPoolGetNetworkParams,
  TrendingPoolGetNetworkResponse,
  TrendingPools,
} from './trending-pools';
import * as PoolsAPI from './pools/pools';
import { PoolGetParams, PoolGetResponse, Pools } from './pools/pools';
import * as TokensAPI from './tokens/tokens';
import { Tokens } from './tokens/tokens';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Networks extends APIResource {
  trendingPools: TrendingPoolsAPI.TrendingPools = new TrendingPoolsAPI.TrendingPools(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * This endpoint allows you to **query all the supported networks on
   * GeckoTerminal**
   *
   * @example
   * ```ts
   * const network = await client.onchain.networks.get();
   * ```
   */
  get(
    query: NetworkGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkGetResponse> {
    return this._client.get('/onchain/networks', { query, ...options });
  }
}

export interface NetworkGetResponse {
  data?: Array<NetworkGetResponse.Data>;
}

export namespace NetworkGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      coingecko_asset_platform_id?: string;

      name?: string;
    }
  }
}

export interface NetworkGetParams {
  /**
   * page through results Default value: 1
   */
  page?: number;
}

Networks.TrendingPools = TrendingPools;
Networks.Pools = Pools;
Networks.Tokens = Tokens;

export declare namespace Networks {
  export { type NetworkGetResponse as NetworkGetResponse, type NetworkGetParams as NetworkGetParams };

  export {
    TrendingPools as TrendingPools,
    type TrendingPoolGetNetworkResponse as TrendingPoolGetNetworkResponse,
    type TrendingPoolGetNetworkParams as TrendingPoolGetNetworkParams,
  };

  export { Pools as Pools, type PoolGetResponse as PoolGetResponse, type PoolGetParams as PoolGetParams };

  export { Tokens as Tokens };
}
