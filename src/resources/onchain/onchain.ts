// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PoolsAPI from './pools';
import { PoolGetMegafilterParams, Pools } from './pools';
import * as NetworksAPI from './networks/networks';
import {
  NetworkGetTrendingPoolsParams,
  NetworkListSupportedParams,
  NetworkListSupportedResponse,
  Networks,
  Pool,
} from './networks/networks';
import * as SimpleAPI from './simple/simple';
import { Simple } from './simple/simple';

export class Onchain extends APIResource {
  simple: SimpleAPI.Simple = new SimpleAPI.Simple(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
}

Onchain.Simple = Simple;
Onchain.Networks = Networks;
Onchain.Pools = Pools;

export declare namespace Onchain {
  export { Simple as Simple };

  export {
    Networks as Networks,
    type Pool as Pool,
    type NetworkListSupportedResponse as NetworkListSupportedResponse,
    type NetworkGetTrendingPoolsParams as NetworkGetTrendingPoolsParams,
    type NetworkListSupportedParams as NetworkListSupportedParams,
  };

  export { Pools as Pools, type PoolGetMegafilterParams as PoolGetMegafilterParams };
}
