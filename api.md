# Key

Types:

- <code><a href="./src/resources/key.ts">KeyRetrieveResponse</a></code>

Methods:

- <code title="get /key">client.key.<a href="./src/resources/key.ts">retrieve</a>() -> KeyRetrieveResponse</code>

# Simple

Types:

- <code><a href="./src/resources/simple.ts">SimpleGetPriceResponse</a></code>
- <code><a href="./src/resources/simple.ts">SimpleGetTokenPriceResponse</a></code>

Methods:

- <code title="get /simple/price">client.simple.<a href="./src/resources/simple.ts">getPrice</a>({ ...params }) -> SimpleGetPriceResponse</code>
- <code title="get /simple/token_price/{id}">client.simple.<a href="./src/resources/simple.ts">getTokenPrice</a>(id, { ...params }) -> SimpleGetTokenPriceResponse</code>

# Coins

Types:

- <code><a href="./src/resources/coins/coins.ts">CoinRetrieveResponse</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinListResponse</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinListCategoriesResponse</a></code>

Methods:

- <code title="get /coins/{id}">client.coins.<a href="./src/resources/coins/coins.ts">retrieve</a>(id, { ...params }) -> CoinRetrieveResponse</code>
- <code title="get /coins/list">client.coins.<a href="./src/resources/coins/coins.ts">list</a>({ ...params }) -> CoinListResponse</code>
- <code title="get /coins/categories">client.coins.<a href="./src/resources/coins/coins.ts">listCategories</a>({ ...params }) -> CoinListCategoriesResponse</code>

## MarketChart

Types:

- <code><a href="./src/resources/coins/market-chart.ts">MarketChartRetrieveRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/market_chart/range">client.coins.marketChart.<a href="./src/resources/coins/market-chart.ts">retrieveRange</a>(id, { ...params }) -> MarketChartRetrieveRangeResponse</code>

## Ohlc

Types:

- <code><a href="./src/resources/coins/ohlc.ts">OhlcRetrieveRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/ohlc/range">client.coins.ohlc.<a href="./src/resources/coins/ohlc.ts">retrieveRange</a>(id, { ...params }) -> OhlcRetrieveRangeResponse</code>

# Onchain

## Simple

### Networks

Types:

- <code><a href="./src/resources/onchain/simple/networks.ts">NetworkGetTokenPriceResponse</a></code>

Methods:

- <code title="get /onchain/simple/networks/{network}/token_price/{addresses}">client.onchain.simple.networks.<a href="./src/resources/onchain/simple/networks.ts">getTokenPrice</a>(addresses, { ...params }) -> NetworkGetTokenPriceResponse</code>

## Networks

Types:

- <code><a href="./src/resources/onchain/networks/networks.ts">Pool</a></code>
- <code><a href="./src/resources/onchain/networks/networks.ts">NetworkListSupportedResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/trending_pools">client.onchain.networks.<a href="./src/resources/onchain/networks/networks.ts">getTrendingPools</a>(network, { ...params }) -> Pool</code>
- <code title="get /onchain/networks">client.onchain.networks.<a href="./src/resources/onchain/networks/networks.ts">listSupported</a>({ ...params }) -> NetworkListSupportedResponse</code>

### Pools

Types:

- <code><a href="./src/resources/onchain/networks/pools.ts">PoolGetMultiplePoolsResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools/multi/{addresses}">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">getMultiplePools</a>(addresses, { ...params }) -> PoolGetMultiplePoolsResponse</code>
- <code title="get /onchain/networks/{network}/pools">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">listTopPools</a>(network, { ...params }) -> Pool</code>

### Tokens

Types:

- <code><a href="./src/resources/onchain/networks/tokens.ts">TokenGetMultipleTokensResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/multi/{addresses}">client.onchain.networks.tokens.<a href="./src/resources/onchain/networks/tokens.ts">getMultipleTokens</a>(addresses, { ...params }) -> TokenGetMultipleTokensResponse</code>

## Pools

Methods:

- <code title="get /onchain/pools/megafilter">client.onchain.pools.<a href="./src/resources/onchain/pools.ts">getMegafilter</a>({ ...params }) -> Pool</code>
