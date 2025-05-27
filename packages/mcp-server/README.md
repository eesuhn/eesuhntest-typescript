# Eesuhntest TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/eesuhntest-typescript.git
cd eesuhntest-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export COINGECKO_PRO_API_KEY="My Pro API Key"
export COINGECKO_DEMO_API_KEY="My Demo API Key"
export EESUHNTEST_ENVIRONMENT="pro"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y @eesuhn/eesuhntest-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "eesuhn_eesuhntest_typescript_api": {
      "command": "node",
      "args": [
        "/path/to/local/eesuhntest-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "COINGECKO_PRO_API_KEY": "My Pro API Key",
        "COINGECKO_DEMO_API_KEY": "My Demo API Key",
        "EESUHNTEST_ENVIRONMENT": "pro"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@eesuhn/eesuhntest-mcp/server";

// import a specific tool
import getIDCoins from "@eesuhn/eesuhntest-mcp/tools/coins/get-id-coins";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [getIDCoins, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `coins`:

- `get_id_coins` (`read`): This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on a particular coin ID**

### Resource `coins.categories`:

- `get_coins_categories` (`read`): This endpoint allows you to **query all the coins categories with market data (market cap, volume, ...) on CoinGecko**

### Resource `coins.list`:

- `get_coins_list` (`read`): This endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**

### Resource `coins.market_chart`:

- `get_range_coins_market_chart` (`read`): This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID**

### Resource `coins.ohlc`:

- `get_range_coins_ohlc` (`read`): This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID**

### Resource `key`:

- `get_key` (`read`): This endpoint allows you to **monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more**

### Resource `onchain.networks`:

- `get_onchain_networks` (`read`): This endpoint allows you to **query all the supported networks on GeckoTerminal**

### Resource `onchain.networks.trending_pools`:

- `get_network_networks_onchain_trending_pools` (`read`): This endpoint allows you to **query the trending pools based on the provided network**

### Resource `onchain.networks.pools`:

- `get_networks_onchain_pools` (`read`): This endpoint allows you to **query all the top pools based on the provided network**

### Resource `onchain.networks.pools.multi`:

- `get_addresses_pools_networks_onchain_multi` (`read`): This endpoint allows you to **query multiple pools based on the provided network and pool address**

### Resource `onchain.networks.tokens.multi`:

- `get_addresses_tokens_networks_onchain_multi` (`read`): This endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**

### Resource `onchain.pools.megafilter`:

- `get_pools_onchain_megafilter` (`read`): This endpoint allows you to **query pools based on various filters across all networks on GeckoTerminal**

### Resource `onchain.simple.networks.token_price`:

- `get_addresses_networks_simple_onchain_token_price` (`read`): This endpoint allows you to **get token price based on the provided token contract address on a network**

### Resource `simple.price`:

- `get_simple_price` (`read`): This endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs**

### Resource `simple.token_price`:

- `get_id_simple_token_price` (`read`): This endpoint allows you to **query one or more token prices using their token contract addresses**
