import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchangebobaswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchangebobaswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Boba Factories',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Tea Bags',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0x5068339C71Dbf01ECEbA53f143C1Fd763E178dF0',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x469cd8507B4598cfE15f36C3929E31c0C19c7432',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/bobateaswap/',
      },
      {
        label: 'Docs',
        href: 'https://bobateaswap.gitbook.io/boba-tea-swap/',
      },
      {
        label: 'Blog',
        href: 'http://bobateaswap.medium.com',
      },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScVGS6HpKniXNupk40mSH4Crdi-WJJScDjBKwzZUksUZekYyQ/viewform?vc=0&c=0&w=1&flr=0&gxids=7628',
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
