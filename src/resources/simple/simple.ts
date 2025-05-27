// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PriceAPI from './price';
import { Price, PriceGetParams, PriceGetResponse } from './price';
import * as TokenPriceAPI from './token-price';
import { TokenPrice, TokenPriceGetIDParams, TokenPriceGetIDResponse } from './token-price';

export class Simple extends APIResource {
  price: PriceAPI.Price = new PriceAPI.Price(this._client);
  tokenPrice: TokenPriceAPI.TokenPrice = new TokenPriceAPI.TokenPrice(this._client);
}

Simple.Price = Price;
Simple.TokenPrice = TokenPrice;

export declare namespace Simple {
  export { Price as Price, type PriceGetResponse as PriceGetResponse, type PriceGetParams as PriceGetParams };

  export {
    TokenPrice as TokenPrice,
    type TokenPriceGetIDResponse as TokenPriceGetIDResponse,
    type TokenPriceGetIDParams as TokenPriceGetIDParams,
  };
}
