// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NetworksAPI from './networks/networks';
import { NetworkGetParams, NetworkGetResponse, Networks } from './networks/networks';
import * as PoolsAPI from './pools/pools';
import { Pools } from './pools/pools';
import * as SimpleAPI from './simple/simple';
import { Simple } from './simple/simple';

export class Onchain extends APIResource {
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  simple: SimpleAPI.Simple = new SimpleAPI.Simple(this._client);
}

Onchain.Networks = Networks;
Onchain.Pools = Pools;
Onchain.Simple = Simple;

export declare namespace Onchain {
  export {
    Networks as Networks,
    type NetworkGetResponse as NetworkGetResponse,
    type NetworkGetParams as NetworkGetParams,
  };

  export { Pools as Pools };

  export { Simple as Simple };
}
