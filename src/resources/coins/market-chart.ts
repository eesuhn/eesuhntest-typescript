// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MarketChart extends APIResource {
  /**
   * This endpoint allows you to **get the historical chart data of a coin within
   * certain time range in UNIX along with price, market cap and 24hr volume based on
   * particular coin ID**
   *
   * @example
   * ```ts
   * const response = await client.coins.marketChart.getRange(
   *   'bitcoin',
   *   { from: 0, to: 0, vs_currency: 'usd' },
   * );
   * ```
   */
  getRange(
    id: string,
    query: MarketChartGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<MarketChartGetRangeResponse> {
    return this._client.get(path`/coins/${id}/market_chart/range`, { query, ...options });
  }
}

export interface MarketChartGetRangeResponse {
  market_caps?: Array<Array<number>>;

  prices?: Array<Array<number>>;

  total_volumes?: Array<Array<number>>;
}

export interface MarketChartGetRangeParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * ending date in UNIX timestamp
   */
  to: number;

  /**
   * target currency of market data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * data interval, leave empty for auto granularity
   */
  interval?: '5m' | 'hourly' | 'daily';

  /**
   * decimal place for currency price value
   */
  precision?:
    | 'full'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18';
}

export declare namespace MarketChart {
  export {
    type MarketChartGetRangeResponse as MarketChartGetRangeResponse,
    type MarketChartGetRangeParams as MarketChartGetRangeParams,
  };
}
