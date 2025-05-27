// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class List extends APIResource {
  /**
   * This endpoint allows you to **query all the supported coins on CoinGecko with
   * coins ID, name and symbol**
   *
   * @example
   * ```ts
   * const lists = await client.coins.list.get();
   * ```
   */
  get(query: ListGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListGetResponse> {
    return this._client.get('/coins/list', { query, ...options });
  }
}

export type ListGetResponse = Array<ListGetResponse.ListGetResponseItem>;

export namespace ListGetResponse {
  export interface ListGetResponseItem {
    /**
     * coin ID
     */
    id?: string;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin asset platform and contract address
     */
    platforms?: Record<string, string>;

    /**
     * coin symbol
     */
    symbol?: string;
  }
}

export interface ListGetParams {
  /**
   * include platform and token's contract addresses, default: false
   */
  include_platform?: boolean;

  /**
   * filter by status of coins, default: active
   */
  status?: 'active' | 'inactive';
}

export declare namespace List {
  export { type ListGetResponse as ListGetResponse, type ListGetParams as ListGetParams };
}
