// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NetworksAPI from './networks';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Pools extends APIResource {
  /**
   * This endpoint allows you to **query multiple pools based on the provided network
   * and pool address**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.pools.getMultiplePools(
   *     'addresses',
   *     { network: 'eth' },
   *   );
   * ```
   */
  getMultiplePools(
    addresses: string,
    params: PoolGetMultiplePoolsParams,
    options?: RequestOptions,
  ): APIPromise<PoolGetMultiplePoolsResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/multi/${addresses}`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint allows you to **query all the top pools based on the provided
   * network**
   *
   * @example
   * ```ts
   * const pool =
   *   await client.onchain.networks.pools.listTopPools('eth');
   * ```
   */
  listTopPools(
    network: string,
    query: PoolListTopPoolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworksAPI.Pool> {
    return this._client.get(path`/onchain/networks/${network}/pools`, { query, ...options });
  }
}

export interface PoolGetMultiplePoolsResponse {
  data?: Array<PoolGetMultiplePoolsResponse.Data>;

  included?: Array<PoolGetMultiplePoolsResponse.Included>;
}

export namespace PoolGetMultiplePoolsResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      address?: string;

      base_token_price_native_currency?: string;

      base_token_price_quote_token?: string;

      base_token_price_usd?: string;

      fdv_usd?: string;

      locked_liquidity_percentage?: string;

      market_cap_usd?: string;

      name?: string;

      pool_created_at?: string;

      price_change_percentage?: Attributes.PriceChangePercentage;

      quote_token_price_base_token?: string;

      quote_token_price_native_currency?: string;

      quote_token_price_usd?: string;

      reserve_in_usd?: string;

      transactions?: Attributes.Transactions;

      volume_usd?: Attributes.VolumeUsd;
    }

    export namespace Attributes {
      export interface PriceChangePercentage {
        h1?: string;

        h24?: string;

        h6?: string;

        m5?: string;
      }

      export interface Transactions {
        h1?: Transactions.H1;

        h24?: Transactions.H24;

        h6?: Transactions.H6;

        m15?: Transactions.M15;

        m30?: Transactions.M30;

        m5?: Transactions.M5;
      }

      export namespace Transactions {
        export interface H1 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface H24 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface H6 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface M15 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface M30 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface M5 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }
      }

      export interface VolumeUsd {
        h1?: string;

        h24?: string;

        h6?: string;

        m15?: string;

        m30?: string;

        m5?: string;
      }
    }

    export interface Relationships {
      base_token?: Relationships.BaseToken;

      dex?: Relationships.Dex;

      quote_token?: Relationships.QuoteToken;
    }

    export namespace Relationships {
      export interface BaseToken {
        data?: BaseToken.Data;
      }

      export namespace BaseToken {
        export interface Data {
          id?: string;

          type?: string;
        }
      }

      export interface Dex {
        data?: Dex.Data;
      }

      export namespace Dex {
        export interface Data {
          id?: string;

          type?: string;
        }
      }

      export interface QuoteToken {
        data?: QuoteToken.Data;
      }

      export namespace QuoteToken {
        export interface Data {
          id?: string;

          type?: string;
        }
      }
    }
  }

  export interface Included {
    id?: string;

    attributes?: Included.Attributes;

    type?: string;
  }

  export namespace Included {
    export interface Attributes {
      address?: string;

      coingecko_coin_id?: string;

      decimals?: number;

      image_url?: string;

      name?: string;

      symbol?: string;
    }
  }
}

export interface PoolGetMultiplePoolsParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include, comma-separated if more than one to include
   * Available values: `base_token`, `quote_token`, `dex`
   */
  include?: string;
}

export interface PoolListTopPoolsParams {
  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;

  /**
   * sort the pools by field Default value: h24_tx_count_desc
   */
  sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc';
}

export declare namespace Pools {
  export {
    type PoolGetMultiplePoolsResponse as PoolGetMultiplePoolsResponse,
    type PoolGetMultiplePoolsParams as PoolGetMultiplePoolsParams,
    type PoolListTopPoolsParams as PoolListTopPoolsParams,
  };
}
