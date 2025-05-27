# Coins

Types:

- <code><a href="./src/resources/coins/coins.ts">CoinGetIDResponse</a></code>

Methods:

- <code title="get /coins/{id}">client.coins.<a href="./src/resources/coins/coins.ts">getID</a>(id, { ...params }) -> CoinGetIDResponse</code>

## Categories

Types:

- <code><a href="./src/resources/coins/categories.ts">CategoryGetResponse</a></code>

Methods:

- <code title="get /coins/categories">client.coins.categories.<a href="./src/resources/coins/categories.ts">get</a>({ ...params }) -> CategoryGetResponse</code>

## List

Types:

- <code><a href="./src/resources/coins/list.ts">ListGetResponse</a></code>

Methods:

- <code title="get /coins/list">client.coins.list.<a href="./src/resources/coins/list.ts">get</a>({ ...params }) -> ListGetResponse</code>

## MarketChart

Types:

- <code><a href="./src/resources/coins/market-chart.ts">MarketChartGetRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/market_chart/range">client.coins.marketChart.<a href="./src/resources/coins/market-chart.ts">getRange</a>(id, { ...params }) -> MarketChartGetRangeResponse</code>

## Ohlc

Types:

- <code><a href="./src/resources/coins/ohlc.ts">OhlcGetRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/ohlc/range">client.coins.ohlc.<a href="./src/resources/coins/ohlc.ts">getRange</a>(id, { ...params }) -> OhlcGetRangeResponse</code>

# Key

Types:

- <code><a href="./src/resources/key.ts">KeyGetResponse</a></code>

Methods:

- <code title="get /key">client.key.<a href="./src/resources/key.ts">get</a>() -> KeyGetResponse</code>

# Onchain

## Networks

Types:

- <code><a href="./src/resources/onchain/networks/networks.ts">NetworkGetResponse</a></code>

Methods:

- <code title="get /onchain/networks">client.onchain.networks.<a href="./src/resources/onchain/networks/networks.ts">get</a>({ ...params }) -> NetworkGetResponse</code>

### TrendingPools

Types:

- <code><a href="./src/resources/onchain/networks/trending-pools.ts">TrendingPoolGetNetworkResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/trending_pools">client.onchain.networks.trendingPools.<a href="./src/resources/onchain/networks/trending-pools.ts">getNetwork</a>(network, { ...params }) -> TrendingPoolGetNetworkResponse</code>

### Pools

Types:

- <code><a href="./src/resources/onchain/networks/pools/pools.ts">PoolGetResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools/pools.ts">get</a>(network, { ...params }) -> PoolGetResponse</code>

#### Multi

Types:

- <code><a href="./src/resources/onchain/networks/pools/multi.ts">MultiGetAddressesResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools/multi/{addresses}">client.onchain.networks.pools.multi.<a href="./src/resources/onchain/networks/pools/multi.ts">getAddresses</a>(addresses, { ...params }) -> MultiGetAddressesResponse</code>

### Tokens

#### Multi

Types:

- <code><a href="./src/resources/onchain/networks/tokens/multi.ts">MultiGetAddressesResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/multi/{addresses}">client.onchain.networks.tokens.multi.<a href="./src/resources/onchain/networks/tokens/multi.ts">getAddresses</a>(addresses, { ...params }) -> MultiGetAddressesResponse</code>

## Pools

### Megafilter

Types:

- <code><a href="./src/resources/onchain/pools/megafilter.ts">MegafilterGetResponse</a></code>

Methods:

- <code title="get /onchain/pools/megafilter">client.onchain.pools.megafilter.<a href="./src/resources/onchain/pools/megafilter.ts">get</a>({ ...params }) -> MegafilterGetResponse</code>

## Simple

### Networks

#### TokenPrice

Types:

- <code><a href="./src/resources/onchain/simple/networks/token-price.ts">TokenPriceGetAddressesResponse</a></code>

Methods:

- <code title="get /onchain/simple/networks/{network}/token_price/{addresses}">client.onchain.simple.networks.tokenPrice.<a href="./src/resources/onchain/simple/networks/token-price.ts">getAddresses</a>(addresses, { ...params }) -> TokenPriceGetAddressesResponse</code>

# Simple

## Price

Types:

- <code><a href="./src/resources/simple/price.ts">PriceGetResponse</a></code>

Methods:

- <code title="get /simple/price">client.simple.price.<a href="./src/resources/simple/price.ts">get</a>({ ...params }) -> PriceGetResponse</code>

## TokenPrice

Types:

- <code><a href="./src/resources/simple/token-price.ts">TokenPriceGetIDResponse</a></code>

Methods:

- <code title="get /simple/token_price/{id}">client.simple.tokenPrice.<a href="./src/resources/simple/token-price.ts">getID</a>(id, { ...params }) -> TokenPriceGetIDResponse</code>
