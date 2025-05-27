// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MultiAPI from './multi';
import { Multi, MultiGetAddressesParams, MultiGetAddressesResponse } from './multi';

export class Tokens extends APIResource {
  multi: MultiAPI.Multi = new MultiAPI.Multi(this._client);
}

Tokens.Multi = Multi;

export declare namespace Tokens {
  export {
    Multi as Multi,
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };
}
