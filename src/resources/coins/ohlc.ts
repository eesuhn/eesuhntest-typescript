// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Ohlc extends APIResource {
  /**
   * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a
   * coin within a range of timestamp based on particular coin ID**
   *
   * @example
   * ```ts
   * const response = await client.coins.ohlc.getRange(
   *   'bitcoin',
   *   { from: 0, interval: 'daily', to: 0, vs_currency: 'usd' },
   * );
   * ```
   */
  getRange(
    id: string,
    query: OhlcGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<OhlcGetRangeResponse> {
    return this._client.get(path`/coins/${id}/ohlc/range`, { query, ...options });
  }
}

export type OhlcGetRangeResponse = Array<Array<number>>;

export interface OhlcGetRangeParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * data interval
   */
  interval: 'daily' | 'hourly';

  /**
   * ending date in UNIX timestamp
   */
  to: number;

  /**
   * target currency of price data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;
}

export declare namespace Ohlc {
  export { type OhlcGetRangeResponse as OhlcGetRangeResponse, type OhlcGetRangeParams as OhlcGetRangeParams };
}
