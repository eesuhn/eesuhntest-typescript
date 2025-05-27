// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NetworksAPI from './networks/networks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Pools extends APIResource {
  /**
   * This endpoint allows you to **query pools based on various filters across all
   * networks on GeckoTerminal**
   *
   * @example
   * ```ts
   * const pool = await client.onchain.pools.getMegafilter();
   * ```
   */
  getMegafilter(
    query: PoolGetMegafilterParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworksAPI.Pool> {
    return this._client.get('/onchain/pools/megafilter', { query, ...options });
  }
}

export interface PoolGetMegafilterParams {
  /**
   * maximum buy tax percentage
   */
  buy_tax_percentage_max?: number;

  /**
   * minimum buy tax percentage
   */
  buy_tax_percentage_min?: number;

  /**
   * duration for buy transactions metric Default value: 24h
   */
  buys_duration?: '5m' | '1h' | '6h' | '24h';

  /**
   * maximum number of buy transactions
   */
  buys_max?: number;

  /**
   * minimum number of buy transactions
   */
  buys_min?: number;

  /**
   * filter options for various checks, comma-separated if more than one Available
   * values: `no_honeypot`, `good_gt_score`, `on_coingecko`, `has_social`
   */
  checks?: string;

  /**
   * filter pools by DEXes, comma-separated if more than one DEX ID refers to
   * [/networks/{network}/dexes](/reference/dexes-list)
   */
  dexes?: string;

  /**
   * maximum fully diluted value in USD
   */
  fdv_usd_max?: number;

  /**
   * minimum fully diluted value in USD
   */
  fdv_usd_min?: number;

  /**
   * maximum 24hr volume in USD
   */
  h24_volume_usd_max?: number;

  /**
   * minimum 24hr volume in USD
   */
  h24_volume_usd_min?: number;

  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`, `network`
   */
  include?: string;

  /**
   * filter pools by networks, comma-separated if more than one Network ID refers to
   * [/networks](/reference/networks-list)
   */
  networks?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;

  /**
   * maximum pool age in hours
   */
  pool_created_hour_max?: number;

  /**
   * minimum pool age in hours
   */
  pool_created_hour_min?: number;

  /**
   * maximum reserve in USD
   */
  reserve_in_usd_max?: number;

  /**
   * minimum reserve in USD
   */
  reserve_in_usd_min?: number;

  /**
   * maximum sell tax percentage
   */
  sell_tax_percentage_max?: number;

  /**
   * minimum sell tax percentage
   */
  sell_tax_percentage_min?: number;

  /**
   * duration for sell transactions metric Default value: 24h
   */
  sells_duration?: '5m' | '1h' | '6h' | '24h';

  /**
   * maximum number of sell transactions
   */
  sells_max?: number;

  /**
   * minimum number of sell transactions
   */
  sells_min?: number;

  /**
   * sort the pools by field Default value: h6_trending
   */
  sort?:
    | 'm5_trending'
    | 'h1_trending'
    | 'h6_trending'
    | 'h24_trending'
    | 'h24_tx_count_desc'
    | 'h24_volume_usd_desc'
    | 'h24_price_change_percentage_desc'
    | 'pool_created_at_desc';

  /**
   * duration for transaction count metric Default value: 24h
   */
  tx_count_duration?: '5m' | '1h' | '6h' | '24h';

  /**
   * maximum transaction count
   */
  tx_count_max?: number;

  /**
   * minimum transaction count
   */
  tx_count_min?: number;
}

export declare namespace Pools {
  export { type PoolGetMegafilterParams as PoolGetMegafilterParams };
}
