import { FetchBadgeDetailResponse } from '@components/queries/useFetchBadgeDetail/useFetchBadgeDetail.types'
import mockAvatar1 from './assets/mock-avatar-1.png'
import mockAvatar2 from './assets/mock-avatar-2.png'
import mockAvatar3 from './assets/mock-avatar-3.png'

import sampleDaoAvatar1 from './assets/sample-dao-avatar-1.png'

import { Category, QuestType, Status } from '@components/queries/common'
import { FetchCommunityDetailResponse } from '@components/queries/useFetchCommunityDetail/useFetchCommunityDetail.types'
import { FetchQuestDetailResponse } from '@components/queries/useFetchQuestDetail/useFetchBadgeDetail.types'
import { FetchUserDetailResponse } from '@components/queries/useFetchUserDetail/useFetchUserDetail.types'

export const ONE_USER_DETAIL: FetchUserDetailResponse = {
  id: 0,
  name: 'Rick Zhang',
  description:
    "Hey there! I'm Rick. I'm a pretty chill dude who likes to stay busy with a few different things. I'm a big reader, always down for a good book, but I also love getting out and playing some basketball. When I'm not doing either of those things, you can probably find me coding away on some new web project. I like to stay active and keep my mind sharp, that's why I like to do a bit of everything.",
  image: 'https://picsum.photos/300',
  discord: '',
  badges: [
    {
      id: 0,
      logo: 'https://picsum.photos/300',
      name: 'NewBie',
      description: 'todo',
      isClaimed: false,
      groupId: 0,
      groupName: 'todo',
    },
    {
      id: 0,
      logo: 'https://picsum.photos/300',
      name: 'Novice',
      description: 'todo',
      isClaimed: false,
      groupId: 0,
      groupName: 'todo',
    },
    {
      id: 1,
      logo: 'https://picsum.photos/300',
      name: 'todo',
      description: 'todo',
      isClaimed: false,
      groupId: 0,
      groupName: 'todo',
    },
    {
      id: 2,
      logo: 'https://picsum.photos/300',
      name: 'todo',
      description: 'todo',
      isClaimed: false,
      groupId: 0,
      groupName: 'todo',
    },
  ],
  communitiesWithBadge: [
    {
      community: {
        id: 0,
        name: 'LepakDAO',
        address: '0x73437205253',
        image: 'https://picsum.photos/300',
      },
      badges: [
        {
          id: 0,
          logo: 'https://picsum.photos/300',
          name: 'NewBie',
          description: 'todo',
          isClaimed: false,
          groupId: 0,
          groupName: 'todo',
        },
        {
          id: 1,
          logo: 'https://picsum.photos/300',
          name: 'Novice',
          description: 'todo',
          isClaimed: false,
          groupId: 0,
          groupName: 'todo',
        },
      ],
    },
  ],
  engageScoresAndCommunity: [
    {
      engageScore: {
        number: 425,
        unit: 'LPD',
      },
      community: {
        id: 0,
        name: 'Lepak DAO',
        address: '0x73437205253',
        image: 'https://picsum.photos/300',
      },
    },
    {
      engageScore: {
        number: 425,
        unit: 'GED',
      },
      community: {
        id: 1,
        name: 'Gedomazou DAO',
        address: '0x73437205253',
        image: 'https://picsum.photos/300',
      },
    },
  ],
  userQuests: [
    {
      status: Status.noStatus,
      quests: [
        {
          id: 1,
          name: 'Join Discord',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
        {
          id: 2,
          name: 'Verify on Discord',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
      ],
    },
    {
      status: Status.pending,
      quests: [
        {
          id: 3,
          name: 'Join Hackathon',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
        {
          id: 4,
          name: 'Join our live gathering',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
      ],
    },
    {
      status: Status.accepted,
      quests: [
        {
          id: 3,
          name: 'Join 5 Hackathons',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
        {
          id: 3,
          name: 'Join 10 Hackathons',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
        {
          id: 4,
          name: 'Refer a member to our DAO',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
      ],
    },
    {
      status: Status.rejected,
      quests: [
        {
          id: 3,
          name: 'Register on our web',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
        {
          id: 4,
          name: 'Join our online event',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
      ],
    },
    {
      status: Status.claimed,
      quests: [
        {
          id: 3,
          name: 'Activate your account',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
        {
          id: 4,
          name: 'Verify your discord',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
      ],
    },
  ],
}

export const ONE_QUEST_DETAIL: FetchQuestDetailResponse = {
  id: 0,
  schemaHash: '0x34723d5f238357',
  title: 'Join a Hackathon',
  engageScore: {
    number: 400,
    unit: 'LPD',
  },
  condition: {
    type: QuestType.discord,
    conditionDetail: { guildId: 0, roleId: 0 },
  },
  description: 'lorem ipsum dolor sit amet this is a placeholder descrption',
  status: Status.noStatus,
}

export const ONE_QUEST_DETAIL_TWO: FetchQuestDetailResponse = {
  id: 0,
  schemaHash: '0x34723d5f238357',
  title: 'Join a Hackathon',
  engageScore: {
    number: 400,
    unit: 'LPD',
  },
  condition: {
    type: QuestType.discord,
    conditionDetail: { guildId: 0, roleId: 0 },
  },
  description: 'lorem ipsum dolor sit amet this is a placeholder descrption',
  message: 'You did great',
  answer: 'Please do better',
  status: Status.rejected,
}

export const ONE_COMMUNITY: FetchCommunityDetailResponse = {
  logo: 'https://picsum.photos/300',
  name: 'Lepak DAO',
  category: Category.Other,
  discord: {
    link: 'https://via.discord.com/300', // if true
    guildId: 223523,
  },
  description: 'Lepak DAO Lepak DAOLepak DAO',
  owner: {
    id: 1,
    address: '0xaegewgwewgeew',
    image: 'https://picsum.photos/300',
    name: 'Via',
  },
  id: 0,
  totalEngage: {
    number: 42352525,
    unit: 'LPD',
  },
  members: [
    {
      id: 2,
      address: '0xaegewgwewgeew',
      image: 'https://picsum.photos/300',
      name: 'John',
    },
    {
      id: 3,
      address: '0xaegewgwewgeew',
      image: 'https://picsum.photos/300',
      name: 'Clark',
    },
    {
      id: 4,
      address: '0xaegewgwewgeew',
      image: 'https://picsum.photos/300',
      name: 'May',
    },
  ],
  // offchain
  totalMember: 120,
  blockchain: 'Polygon',
  link: 'yoursite.io',
  badges: [
    {
      id: 1,
      logo: 'https://picsum.photos/300',
      name: 'Newbie',
      description: 'Newbie is Newbie',
      isClaimed: false,
      groupId: 0,
      groupName: 'todo',
    },
    {
      id: 2,
      logo: 'https://picsum.photos/300',
      name: 'Newbie',
      description: 'Newbie is Newbie',
      isClaimed: false,
      groupId: 0,
      groupName: 'todo',
    },
    {
      id: 3,
      logo: 'https://picsum.photos/300',
      name: 'Newbie',
      description: 'Newbie is Newbie',
      isClaimed: false,
      groupId: 0,
      groupName: 'todo',
    },
  ],
  quests: [
    {
      questType: 0, // DISCORD
      questList: [
        {
          id: 1,
          name: 'Join Discord',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
        {
          id: 2,
          name: 'Join Discord',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
      ],
    },
    {
      questType: 1, // FORM
      questList: [
        {
          id: 3,
          name: 'Join Hackathon',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
        {
          id: 4,
          name: 'Win a prize',
          engageScore: { number: 72673, unit: 'LPD' },
          status: Status.noStatus,
        },
      ],
    },
  ],
}

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

export const MOCK_CLAIMED_BADGE = {
  contractAddress: '0xawgaweewagewagwe',
  tokenId: 2,
  tokenStandard: 'ERC-20',
  chain: 'polygon',
}

export const MOCK_BADGE: FetchBadgeDetailResponse = {
  id: 1,
  name: 'NewBie',
  logo: 'https://picsum.photos/300',
  symbol: 'NB',
  address: '0xagwgwgwagewgwewegwea',
  community: {
    id: 1,
    //address is for community! not admin
    address: '0xaewwegwgweagawewge',
    image: 'https://picsum.photos/300',
    name: 'Lepak DAO',
  },
  description: 'NewBie badge is for default badge in Lepak DAO',

  requiredPrice: {
    number: 4,
    unit: 'ETH',
  },
  requiredEngageScore: {
    number: 200,
    unit: 'LPD',
  },
  isDefault: true,
  // should we have to get onchain data through contact? or backend
  // badgeDetail?: {
  //   contractAddress: '0xawgaweewagewagwe',
  //   tokenId: 2,
  //   tokenStandard: 'ERC-20',
  //   chain: 'polygon',

  // },
  holderList: [
    {
      id: 1,
      address: '0xagaewgwegwe',
      image: 'https://picsum.photos/300',
      name: 'pia',
    },
    {
      id: 2,
      address: '0xagaewgwegwe',
      image: 'https://picsum.photos/300',
      name: 'pia',
    },
    {
      id: 2,
      address: '0xagaewgwegwe',
      image: 'https://picsum.photos/300',
      name: 'pia',
    },
  ],
  requiredQuests: [
    {
      id: 0,
      name: 'join discord',
      engageScore: {
        number: 100,
        unit: 'LPD',
      },
      status: Status.noStatus,
    },
    {
      id: 1,
      name: 'join discord',
      engageScore: {
        number: 100,
        unit: 'LPD',
      },
      status: Status.noStatus,
    },
    {
      id: 2,
      name: 'join discord',
      engageScore: {
        number: 100,
        unit: 'LPD',
      },
      status: Status.noStatus,
    },
  ],
}

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
          isClaimed: true,
        },
        {
          id: 2,
          badgeImg: 'https://picsum.photos/300',
          name: 'Newbie2',
          isClaimed: true,
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
          isClaimed: true,
        },
        {
          id: 2,
          badgeImg: 'https://picsum.photos/300',
          name: 'Newbie3',
          isClaimed: false,
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
