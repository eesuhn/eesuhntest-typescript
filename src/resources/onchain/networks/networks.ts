// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PoolsAPI from './pools';
import {
  PoolGetMultiplePoolsParams,
  PoolGetMultiplePoolsResponse,
  PoolListTopPoolsParams,
  Pools,
} from './pools';
import * as TokensAPI from './tokens';
import { TokenGetMultipleTokensParams, TokenGetMultipleTokensResponse, Tokens } from './tokens';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Networks extends APIResource {
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * This endpoint allows you to **query the trending pools based on the provided
   * network**
   *
   * @example
   * ```ts
   * const pool = await client.onchain.networks.getTrendingPools(
   *   'eth',
   * );
   * ```
   */
  getTrendingPools(
    network: string,
    query: NetworkGetTrendingPoolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Pool> {
    return this._client.get(path`/onchain/networks/${network}/trending_pools`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the supported networks on
   * GeckoTerminal**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.listSupported();
   * ```
   */
  listSupported(
    query: NetworkListSupportedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkListSupportedResponse> {
    return this._client.get('/onchain/networks', { query, ...options });
  }
}

export interface Pool {
  data?: Array<Pool.Data>;

  included?: Array<Pool.Included>;
}

export namespace Pool {
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

        m5?: string;
      }
    }

    export interface Relationships {
      base_token?: Relationships.BaseToken;

      dex?: Relationships.Dex;

      network?: Relationships.Network;

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

      export interface Network {
        data?: Network.Data;
      }

      export namespace Network {
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

export interface NetworkListSupportedResponse {
  data?: Array<NetworkListSupportedResponse.Data>;
}

export namespace NetworkListSupportedResponse {
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

export interface NetworkGetTrendingPoolsParams {
  /**
   * duration to sort trending list by Default value: 24h
   */
  duration?: '5m' | '1h' | '6h' | '24h';

  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;
}

export interface NetworkListSupportedParams {
  /**
   * page through results Default value: 1
   */
  page?: number;
}

Networks.Pools = Pools;
Networks.Tokens = Tokens;

export declare namespace Networks {
  export {
    type Pool as Pool,
    type NetworkListSupportedResponse as NetworkListSupportedResponse,
    type NetworkGetTrendingPoolsParams as NetworkGetTrendingPoolsParams,
    type NetworkListSupportedParams as NetworkListSupportedParams,
  };

  export {
    Pools as Pools,
    type PoolGetMultiplePoolsResponse as PoolGetMultiplePoolsResponse,
    type PoolGetMultiplePoolsParams as PoolGetMultiplePoolsParams,
    type PoolListTopPoolsParams as PoolListTopPoolsParams,
  };

  export {
    Tokens as Tokens,
    type TokenGetMultipleTokensResponse as TokenGetMultipleTokensResponse,
    type TokenGetMultipleTokensParams as TokenGetMultipleTokensParams,
  };
}
