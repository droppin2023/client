import mockAvatar1 from './assets/mock-avatar-1.png'
import mockAvatar2 from './assets/mock-avatar-2.png'
import mockAvatar3 from './assets/mock-avatar-3.png'

import sampleDaoAvatar1 from './assets/sample-dao-avatar-1.png'

export const MOCK_USER_LIST = [
  {
    name: 'John',
    img: mockAvatar1,
  },
  {
    name: 'William',
    img: mockAvatar2,
  },
  {
    name: 'Sally',
    img: mockAvatar3,
  },
  {
    name: 'Mona',
    img: mockAvatar3,
  },
  {
    name: 'Albert',
    img: mockAvatar1,
  },
]

export const MOCK_PENDING_REQUESTS = [
  {
    user: {
      name: 'John',
      img: mockAvatar1,
    },
    quest: {
      name: 'Join the discord server',
      type: 'Discord',
      reward: 500,
    },
    status: 'Pending',
  },
  {
    user: {
      name: 'John',
      img: mockAvatar1,
    },
    quest: {
      name: 'Join the discord server',
      type: 'Discord',
      reward: 500,
    },
    status: 'Pending',
  },
  {
    user: {
      name: 'John',
      img: mockAvatar1,
    },
    quest: {
      name: 'Join the discord server',
      type: 'Discord',
      reward: 500,
    },
    status: 'Pending',
  },
]

export const MOCK_DAO_LIST = [
  {
    daoId: 1,
    name: 'Lepak DAO',
    img: sampleDaoAvatar1,
    minter: 'TheLepakGuys',
    memberCount: 125,
    repScore: 235235636,
    earnings: 3.4,
    chain: 'Polygon',
    repUnit: 'LEP',
    created: new Date('2021-03-25'),
    category: 'Social',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempore aliquam soluta sit minima libero asperiores voluptatibus praesentium consequatur consequuntur?',
    members: [
      {
        name: 'John',
        img: mockAvatar1,
        repScore: 241414,
        karma: 1.2,
        quests: 10,
      },
      {
        name: 'William',
        img: mockAvatar2,
        repScore: 347230,
        karma: 1.2,
        quests: 1,
      },
      {
        name: 'Sally',
        img: mockAvatar3,
        repScore: 241414,
        karma: 1.2,
        quests: 5,
      },
      {
        name: 'Mona',
        img: mockAvatar3,
        repScore: 241414,
        karma: 1.2,
        quests: 3,
      },
      {
        name: 'Albert',
        img: mockAvatar1,
        repScore: 241414,
        karma: 1.2,
        quests: 20,
      },
    ],
    badges: [
      {
        daoName: 'Lepak DAO',
        name: 'NewBie',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'NewBie',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'NewBie',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'NewBie',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'NewBie',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'NewBie',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'NewBie',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'NewBie',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
    ],
    quests: [
      {
        name: 'Join the discord server',
        type: 'Discord',
        reward: 500,
      },
      {
        name: 'Earn the beginner role in discord',
        type: 'Discord',
        reward: 200,
      },
      {
        name: 'Join the discord server',
        type: 'Discord',
        reward: 500,
      },
      {
        name: 'Earn the beginner role in discord',
        type: 'Discord',
        reward: 200,
      },
      {
        name: 'Join a hackathon',
        type: 'Submit Link',
        reward: 500,
      },
    ],
  },
  {
    name: 'Mamak DAO',
    memberCount: 190,
    repScore: 5562636,
    repUnit: 'MAM',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempore aliquam soluta sit minima libero asperiores voluptatibus praesentium consequatur consequuntur?',
    members: [
      {
        name: 'John',
        img: mockAvatar1,
      },
      {
        name: 'William',
        img: mockAvatar2,
      },
      {
        name: 'Sally',
        img: mockAvatar3,
      },
      {
        name: 'Mona',
        img: mockAvatar3,
      },
      {
        name: 'Albert',
        img: mockAvatar1,
      },
    ],
  },
  {
    name: 'Makan DAO',
    memberCount: 10,
    repScore: 35235636,
    repUnit: 'EATS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempore aliquam soluta sit minima libero asperiores voluptatibus praesentium consequatur consequuntur?',
    members: [
      {
        name: 'John',
        img: mockAvatar1,
      },
      {
        name: 'William',
        img: mockAvatar2,
      },
      {
        name: 'Sally',
        img: mockAvatar3,
      },
      {
        name: 'Mona',
        img: mockAvatar3,
      },
      {
        name: 'Albert',
        img: mockAvatar1,
      },
    ],
  },
  {
    name: 'Makan DAO',
    memberCount: 10,
    repScore: 35235636,
    repUnit: 'EATS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempore aliquam soluta sit minima libero asperiores voluptatibus praesentium consequatur consequuntur?',
    members: [
      {
        name: 'John',
        img: mockAvatar1,
      },
      {
        name: 'William',
        img: mockAvatar2,
      },
      {
        name: 'Sally',
        img: mockAvatar3,
      },
      {
        name: 'Mona',
        img: mockAvatar3,
      },
      {
        name: 'Albert',
        img: mockAvatar1,
      },
    ],
  },
  {
    name: 'Makan DAO',
    memberCount: 10,
    repScore: 35235636,
    repUnit: 'EATS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempore aliquam soluta sit minima libero asperiores voluptatibus praesentium consequatur consequuntur?',
    members: [
      {
        name: 'John',
        img: mockAvatar1,
      },
      {
        name: 'William',
        img: mockAvatar2,
      },
      {
        name: 'Sally',
        img: mockAvatar3,
      },
      {
        name: 'Mona',
        img: mockAvatar3,
      },
      {
        name: 'Albert',
        img: mockAvatar1,
      },
    ],
  },
  {
    name: 'Makan DAO',
    memberCount: 10,
    repScore: 35235636,
    repUnit: 'EATS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempore aliquam soluta sit minima libero asperiores voluptatibus praesentium consequatur consequuntur?',
    members: [
      {
        name: 'John',
        img: mockAvatar1,
      },
      {
        name: 'William',
        img: mockAvatar2,
      },
      {
        name: 'Sally',
        img: mockAvatar3,
      },
      {
        name: 'Mona',
        img: mockAvatar3,
      },
      {
        name: 'Albert',
        img: mockAvatar1,
      },
    ],
  },
  {
    name: 'Makan DAO',
    memberCount: 10,
    repScore: 35235636,
    repUnit: 'EATS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempore aliquam soluta sit minima libero asperiores voluptatibus praesentium consequatur consequuntur?',
    members: [
      {
        name: 'John',
        img: mockAvatar1,
      },
      {
        name: 'William',
        img: mockAvatar2,
      },
      {
        name: 'Sally',
        img: mockAvatar3,
      },
      {
        name: 'Mona',
        img: mockAvatar3,
      },
      {
        name: 'Albert',
        img: mockAvatar1,
      },
    ],
  },
  {
    name: 'Makan DAO',
    memberCount: 10,
    repScore: 35235636,
    repUnit: 'EATS',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempore aliquam soluta sit minima libero asperiores voluptatibus praesentium consequatur consequuntur?',
    members: [
      {
        name: 'John',
        img: mockAvatar1,
      },
      {
        name: 'William',
        img: mockAvatar2,
      },
      {
        name: 'Sally',
        img: mockAvatar3,
      },
      {
        name: 'Mona',
        img: mockAvatar3,
      },
      {
        name: 'Albert',
        img: mockAvatar1,
      },
    ],
  },
]

export const MOCK_BADGE_LIST = [
  {
    daoName: 'Lepak DAO',
    name: 'NewBie',
    recentActivity: 'mint by @carlos',
    minter: '@carlos',
    isLocked: false,
  },
  {
    daoName: 'Meta DAO',
    name: 'Expert',
    recentActivity: 'mint by @pia',
    minter: '@pia',
    isLocked: false,
  },
  {
    daoName: 'Alpha DAO',
    name: 'Extra Miler',
    recentActivity: 'unlocked by @yixuan',
    minter: '@yixuan',
    isLocked: false,
  },
  {
    daoName: 'Mamak DAO',
    name: 'NewBie',
    recentActivity: 'mint by @rick',
    minter: '@rick',
    isLocked: false,
  },
  {
    daoName: 'Bali DAO',
    name: 'NewBie',
    recentActivity: 'mint by @gede',
    minter: '@gede',
    isLocked: false,
  },
]

export const GET_CLAIMED_MOCK_BADGE = {
  badgeName: 'NewBie',
  badgeImg: 'https://via.placeholder.com/300',
  badgeSymbol: 'NB',
  daoId: 2,
  description: 'NewBie badge is for default badge in Lepak DAO',
  isDefault: true,
  // should we have to get onchain data through contact? or backend
  badgeDetail: {
    contractAddress: '0xawgaweewagewagwe',
    tokenId: 2,
    tokenStandard: 'ERC-20',
    chain: 'polygon',
    communityEarning: 12,
  },
  badgeHolder: {
    totalNummber: 5,
    holderList: [
      {
        userId: 1,
        userName: 'pia',
      },
      {
        userId: 2,
        userName: 'pia2',
      },
      {
        userId: 3,
        userName: 'pia3',
      },
      {
        userId: 6,
        userName: 'pia4',
      },
      {
        userId: 10,
        userName: 'pia5',
      },
    ],
  },
  claimConditions: [
    {
      type: 'quest',
      detail: [
        {
          questId: 1,
          questNmae: 'Join 1 Hackathon',
          questReward: 100,
        },
        {
          questId: 2,
          questNmae: 'Win a prize in Hackathon',
          questReward: 100,
        },
        {
          questId: 3,
          questNmae: 'Join a Github Organization',
          questReward: 200,
        },
      ],
    },
    {
      type: 'engageScore',
      detail: {
        threshold: 400,
        unit: 'LPD',
      },
    },
    {
      type: 'price',
      detail: {
        number: 4,
        unit: 'MATIC',
      },
    },
  ],
}

export const MOCK_USER = {
  name: 'pia',
  description: '21 | Builder in Crypto \n Love reading writing coding stuff. Engineer but Thinker.',
  img: 'https://via.placeholder.com/300',
  badges: [
    {
      badgeId: 1,
      badgeImg: 'https://via.placeholder.com/300',
      badgeName: 'Newbie',
    },
    {
      badgeId: 2,
      badgeImg: 'https://via.placeholder.com/300',
      badgeName: 'Newbie',
    },
    {
      badgeId: 3,
      badgeImg: 'https://via.placeholder.com/300',
      badgeName: 'Newbie',
    },
  ],
  communities: [
    {
      daoId: 1,
      badges: [
        {
          badgeId: 1,
          badgeImg: 'https://via.placeholder.com/300',
          badgeName: 'Newbie',
          isClaimed: true,
        },
        {
          badgeId: 2,
          badgeImg: 'https://via.placeholder.com/300',
          badgeName: 'Newbie2',
          isClaimed: true,
        },
      ],
    },
    {
      daoId: 2,
      badges: [
        {
          badgeId: 1,
          badgeImg: 'https://via.placeholder.com/300',
          badgeName: 'Newbie4',
          isClaimed: true,
        },
        {
          badgeId: 2,
          badgeImg: 'https://via.placeholder.com/300',
          badgeName: 'Newbie3',
          isClaimed: false,
        },
      ],
    },
  ],
  engagements: [
    {
      dao: {
        daoId: 1,
        img: 'https://via.placeholder.com/300',
        name: 'Lepak DAO',
        unit: 'LDP',
      },
      balance: {
        basic: 1988,
        compare: 190000,
      },
    },
    {
      dao: {
        daoId: 2,
        img: 'https://via.placeholder.com/300',
        name: 'Lepak DAO',
        unit: 'LDP',
      },
      balance: {
        basic: 1988,
        compare: 190000,
      },
    },
  ],
}
