import mockAvatar1 from './assets/mock-avatar-1.png'
import mockAvatar2 from './assets/mock-avatar-2.png'
import mockAvatar3 from './assets/mock-avatar-3.png'

import sampleDaoAvatar1 from './assets/sample-dao-avatar-1.png'

import badge2 from './assets/badge2.png'
import badge1 from './assets/holder.png'
import badge3 from './assets/the_professors.png'

import yoots from './assets/y00ts.jpg'

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
    quest: {
      id: 1,
      name: 'Join Discord',
      engageScore: { number: 200, unit: 'LPD' },
      description: 'Join Discord Discord Discord',
    },
    requestUser: {
      username: 'rkdud007',
      address: '0xaeggawegwegwegwgw',
      image: mockAvatar1,
      name: 'Pia',
    },
    requestAnswer: 'hey please let me in',
  },
  {
    quest: {
      id: 2,
      name: 'Join Discord',
      engageScore: { number: 200, unit: 'LPD' },
      description: 'Join Discord Discord Discord',
    },
    requestUser: {
      username: 'rkdud007',
      address: '0xaeggawegwegwegwgw',
      image: mockAvatar1,
      name: 'Pia',
    },
    requestAnswer: 'hey please let me in',
  },
  {
    quest: {
      id: 2,
      name: 'Join Discord',
      engageScore: { number: 200, unit: 'LPD' },
      description: 'Join Discord Discord Discord',
    },
    requestUser: {
      username: 'rkdud007',
      address: '0xaeggawegwegwegwgw',
      image: mockAvatar1,
      name: 'Pia',
    },
    requestAnswer: 'hey please let me in',
  },
]

export const MOCK_DAO_LIST = [
  {
    daoId: 1,
    name: 'Lepak DAO',
    img: sampleDaoAvatar1,
    minter: 'TheLepakGuys',
    memberCount: 58,
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
        name: 'Anak-anak',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'Master',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'Expert',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'Makcik',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'Mamak King',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'Lemak Expert',
        recentActivity: 'mint by @carlos',
        minter: '@carlos',
        isLocked: false,
      },
      {
        daoName: 'Lepak DAO',
        name: 'Novice',
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
        name: 'Reach level 5 in discord',
        type: 'Discord',
        reward: 500,
      },
      {
        name: 'Join our GitHub',
        type: 'Submit Form',
        reward: 200,
      },
      {
        name: 'Join a hackathon',
        type: 'Submit Form',
        reward: 500,
      },
      {
        name: 'Make a contribution to our GitHub',
        type: 'Submit Form',
        reward: 500,
      },
    ],
  },
  {
    name: 'y00ts',
    memberCount: 20384,
    repScore: 5562636,
    repUnit: 'YT',
    img: yoots,
    description:
      'y00ts is a generative art project of 15,000 NFTs. it is our love letter to the Web3 community. designed to be aesthetic. engineered to be functional. curated to contain the best community of builders and creators on the internet. welcome to y00topia.',
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
    daoName: 'y00ts',
    name: 'y00ts Holder',
    minter: '@frankdegods',
    isLocked: false,
    img: badge1,
  },
  {
    daoName: 'y00ts',
    name: 'Migration Contest Participated Holder',
    minter: '@frankdegods',
    isLocked: false,
    img: badge2,
  },
  {
    daoName: 'y00ts',
    name: 'Funding for club : The professors',
    minter: '@frankdegods',
    isLocked: false,
    img: badge3,
  },
  {
    daoName: 'Lepak DAO',
    name: 'Member',
    minter: '@piapark.eth',
    isLocked: false,
    img: sampleDaoAvatar1,
  },
  {
    daoName: 'Bali DAO',
    name: 'NewBie',
    recentActivity: 'mint by @gede',
    minter: '@gede',
    isLocked: false,
  },
]

export const MOCK_USER = {
  name: 'pia',
  description: '21 | Builder in Crypto \n Love reading writing coding stuff. Engineer but Thinker.',
  img: 'https://picsum.photos/300',
  badges: [
    {
      id: 1,
      badgeImg: 'https://picsum.photos/300',
      name: 'Newbie',
    },
    {
      id: 2,
      badgeImg: 'https://picsum.photos/300',
      name: 'Newbie',
    },
    {
      id: 3,
      badgeImg: 'https://picsum.photos/300',
      name: 'Newbie',
    },
  ],
  communities: [
    {
      daoId: 1,
      badges: [
        {
          id: 1,
          badgeImg: 'https://picsum.photos/300',
          name: 'Newbie',
        },
        {
          id: 2,
          badgeImg: 'https://picsum.photos/300',
          name: 'Newbie2',
        },
      ],
    },
    {
      daoId: 2,
      badges: [
        {
          id: 1,
          badgeImg: 'https://picsum.photos/300',
          name: 'Newbie4',
        },
        {
          id: 2,
          badgeImg: 'https://picsum.photos/300',
          name: 'Newbie3',
        },
      ],
    },
  ],
  engagements: [
    {
      dao: {
        daoId: 1,
        img: 'https://picsum.photos/300',
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
        img: 'https://picsum.photos/300',
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
