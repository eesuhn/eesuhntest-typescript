// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MegafilterAPI from './megafilter';
import { Megafilter, MegafilterGetParams, MegafilterGetResponse } from './megafilter';

export class Pools extends APIResource {
  megafilter: MegafilterAPI.Megafilter = new MegafilterAPI.Megafilter(this._client);
}

Pools.Megafilter = Megafilter;

export declare namespace Pools {
  export {
    Megafilter as Megafilter,
    type MegafilterGetResponse as MegafilterGetResponse,
    type MegafilterGetParams as MegafilterGetParams,
  };
}
