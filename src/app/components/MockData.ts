export interface InvestorRequest {
  id: string;
  investorId: string;
  investorName: string;
  investorAvatar: string;
  investorVerified: boolean;
  investorOnline: boolean;
  investorAvgResponse: string;
  title: string;
  area: string;
  budget: string;
  budgetNum: number;
  purpose: 'Living' | 'Investment';
  method: 'Cash' | 'Mortgage';
  propertyType: 'Apartment' | 'Villa' | 'Commercial';
  bedrooms?: number;
  note?: string;
  offersCount: number;
  createdAt: string;
  isNew: boolean;
  status: 'active' | 'closed' | 'matched';
  unitStatus: 'Ready' | 'Off-plan';
  additionalNotes?: string;
  matchScore?: 'High' | 'Medium' | 'Low';
}

export interface Offer {
  id: string;
  requestId: string;
  agentId: string;
  agentName: string;
  agentAvatar: string;
  agentVerified: boolean;
  propertyTitle: string;
  price: string;
  priceNum: number;
  message: string;
  status: 'pending' | 'accepted' | 'declined' | 'active_chat';
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  time: string;
  isOwn: boolean;
}

export interface Chat {
  id: string;
  participantName: string;
  participantAvatar: string;
  participantVerified: boolean;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  requestTitle: string;
  messages: ChatMessage[];
}

export interface Comment {
  id: string;
  requestId: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  authorVerified: boolean;
  authorRole: 'agent' | 'investor';
  text: string;
  createdAt: string;
  likesCount: number;
  liked: boolean;
  replies?: Comment[];
}

export interface Agent {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  reviews: number;
  deals: number;
  experience: string;
  verified: boolean;
  reraVerified: boolean;
  bio: string;
  subtitle: string;
  expertise: string[];
  badges: string[];
  isOnline: boolean;
  rank?: string;
}

const MALE_AVATAR = 'https://images.unsplash.com/photo-1604346382498-34e8c19df705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';
const FEMALE_AVATAR = 'https://images.unsplash.com/photo-1704627363842-a169b9743309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';
const AGENT_AVATAR = 'https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';

export const CURRENT_INVESTOR = {
  id: 'inv-1',
  name: 'Mohamed Salah',
  avatar: MALE_AVATAR,
  userType: 'investor' as const,
};

export const CURRENT_AGENT = {
  id: 'agent-1',
  name: 'Mohamed Salah',
  avatar: AGENT_AVATAR,
  userType: 'agent' as const,
  title: 'Pro Agent',
  rating: 4.9,
  reviews: 125,
  deals: 150,
  experience: '8 yrs',
  verified: true,
  bio: 'Specializing in high-yield off-plan developments and luxury secondary market portfolios. I provide data-driven insights to institutional and private investors looking to maximize their rental yield and capital appreciation in the Dubai market.',
  expertise: ['Investment-focused', 'ROI-focused', 'Downtown Dubai', 'Dubai Hills', 'Portfolio Management'],
  badges: ['RANK 1# ON DUSEAT THIS MONTH', 'Hit 25 million sales on Duseat'],
};

export const MOCK_REQUESTS: InvestorRequest[] = [
  {
    id: 'req-1',
    investorId: 'inv-2',
    investorName: 'Anwar Hosny',
    investorAvatar: MALE_AVATAR,
    investorVerified: true,
    investorOnline: true,
    investorAvgResponse: '10m',
    title: "I'm looking for a ready-to-move 4 Bedroom Villa for living in Al Barsha.",
    area: 'Al Barsha',
    budget: '3.8M AED',
    budgetNum: 3800000,
    purpose: 'Living',
    method: 'Mortgage',
    propertyType: 'Villa',
    bedrooms: 4,
    note: 'Flexible on handover date',
    offersCount: 12,
    createdAt: '3 min ago',
    isNew: true,
    status: 'active',
    unitStatus: 'Ready',
    additionalNotes: '"Looking for a property specifically in the Whispering Pines or Flame Tree Ridge sub-communities. Must be a high floor with a full golf course view. Prefer vacant on transfer."',
    matchScore: 'High',
  },
  {
    id: 'req-2',
    investorId: 'inv-3',
    investorName: 'Sara Al Rashidi',
    investorAvatar: FEMALE_AVATAR,
    investorVerified: true,
    investorOnline: false,
    investorAvgResponse: '1h',
    title: "Looking for a 2BR apartment in Downtown Dubai for investment purposes.",
    area: 'Downtown Dubai',
    budget: '2.5M AED',
    budgetNum: 2500000,
    purpose: 'Investment',
    method: 'Cash',
    propertyType: 'Apartment',
    bedrooms: 2,
    note: 'High ROI preferred',
    offersCount: 7,
    createdAt: '1 hr ago',
    isNew: true,
    status: 'active',
    unitStatus: 'Ready',
    additionalNotes: 'Looking for properties with minimum 7% ROI. Prefer Burj Khalifa view.',
    matchScore: 'Medium',
  },
  {
    id: 'req-3',
    investorId: 'inv-4',
    investorName: 'Khalid Al Mansouri',
    investorAvatar: MALE_AVATAR,
    investorVerified: false,
    investorOnline: true,
    investorAvgResponse: '30m',
    title: "Seeking commercial space in Business Bay for corporate office.",
    area: 'Business Bay',
    budget: '5.2M AED',
    budgetNum: 5200000,
    purpose: 'Investment',
    method: 'Cash',
    propertyType: 'Commercial',
    note: 'Parking spaces required',
    offersCount: 3,
    createdAt: '2 hrs ago',
    isNew: false,
    status: 'active',
    unitStatus: 'Ready',
    additionalNotes: 'Need at least 2,000 sqft with dedicated parking. Prefer ground floor or first floor.',
    matchScore: 'Low',
  },
  {
    id: 'req-4',
    investorId: 'inv-5',
    investorName: 'Ahmed Bin Laden',
    investorAvatar: MALE_AVATAR,
    investorVerified: true,
    investorOnline: false,
    investorAvgResponse: '2h',
    title: "3 Bedroom Apartment in Palm Jumeirah, off-plan acceptable.",
    area: 'Palm Jumeirah',
    budget: '4.1M AED',
    budgetNum: 4100000,
    purpose: 'Living',
    method: 'Mortgage',
    propertyType: 'Apartment',
    bedrooms: 3,
    note: 'Sea view mandatory',
    offersCount: 18,
    createdAt: '5 hrs ago',
    isNew: false,
    status: 'active',
    unitStatus: 'Off-plan',
    matchScore: 'High',
  },
];

export const MY_REQUESTS: InvestorRequest[] = [
  {
    id: 'my-req-1',
    investorId: 'inv-1',
    investorName: 'Mohamed Salah',
    investorAvatar: MALE_AVATAR,
    investorVerified: true,
    investorOnline: true,
    investorAvgResponse: '10m',
    title: "Looking for 4BR Villa in Jumeirah Golf Estates for family living.",
    area: 'Jumeirah Golf Estates',
    budget: '4.5M AED',
    budgetNum: 4500000,
    purpose: 'Living',
    method: 'Cash',
    propertyType: 'Villa',
    bedrooms: 4,
    note: 'Golf course view preferred',
    offersCount: 5,
    createdAt: '1 day ago',
    isNew: false,
    status: 'active',
    unitStatus: 'Ready',
    additionalNotes: 'Looking for a property specifically in the Whispering Pines or Flame Tree Ridge sub-communities. Must be a high floor with a full golf course view. Prefer vacant on transfer.',
    matchScore: 'High',
  },
  {
    id: 'my-req-2',
    investorId: 'inv-1',
    investorName: 'Mohamed Salah',
    investorAvatar: MALE_AVATAR,
    investorVerified: true,
    investorOnline: true,
    investorAvgResponse: '10m',
    title: "2BR Apartment in Dubai Marina for rental investment.",
    area: 'Dubai Marina',
    budget: '2.1M AED',
    budgetNum: 2100000,
    purpose: 'Investment',
    method: 'Cash',
    propertyType: 'Apartment',
    bedrooms: 2,
    note: 'High ROI required',
    offersCount: 8,
    createdAt: '3 days ago',
    isNew: false,
    status: 'matched',
    unitStatus: 'Ready',
  },
];

export const MY_OFFERS: Offer[] = [
  {
    id: 'offer-1',
    requestId: 'req-1',
    agentId: 'agent-1',
    agentName: 'Mohamed Salah',
    agentAvatar: AGENT_AVATAR,
    agentVerified: true,
    propertyTitle: 'Palm Jumeirah Heights',
    price: '$1,200,000',
    priceNum: 1200000,
    message: 'This property offers stunning views and is ready to move in. Excellent ROI potential with current market trends in Al Barsha favoring similar properties.',
    status: 'active_chat',
    createdAt: '1 day ago',
  },
  {
    id: 'offer-2',
    requestId: 'req-2',
    agentId: 'agent-1',
    agentName: 'Mohamed Salah',
    agentAvatar: AGENT_AVATAR,
    agentVerified: true,
    propertyTitle: 'Downtown Premium Suite',
    price: '$2,400,000',
    priceNum: 2400000,
    message: 'Prime location in Downtown with guaranteed rental yield of 8.5%. Building facilities include pool, gym, and concierge service.',
    status: 'declined',
    createdAt: '3 days ago',
  },
  {
    id: 'offer-3',
    requestId: 'req-4',
    agentId: 'agent-1',
    agentName: 'Mohamed Salah',
    agentAvatar: AGENT_AVATAR,
    agentVerified: true,
    propertyTitle: 'Business Bay Tower',
    price: '$3,800,000',
    priceNum: 3800000,
    message: 'Excellent commercial space with sea views and direct metro access. This space comes with 10 dedicated parking spots.',
    status: 'pending',
    createdAt: '5 days ago',
  },
];

export const RECEIVED_OFFERS: Offer[] = [
  {
    id: 'recv-offer-1',
    requestId: 'my-req-1',
    agentId: 'ag-1',
    agentName: 'John Smith',
    agentAvatar: AGENT_AVATAR,
    agentVerified: true,
    propertyTitle: '4BR Jumeirah Villa - Golf View',
    price: '4.3M AED',
    priceNum: 4300000,
    message: "I have the perfect property for your requirements. This stunning villa in Whispering Pines comes with a panoramic golf course view and is vacant on transfer. Ideal for family living.",
    status: 'pending',
    createdAt: '2 hrs ago',
  },
  {
    id: 'recv-offer-2',
    requestId: 'my-req-1',
    agentId: 'ag-2',
    agentName: 'Ahmed Hassan',
    agentAvatar: MALE_AVATAR,
    agentVerified: false,
    propertyTitle: '4BR Flame Tree Ridge Villa',
    price: '4.1M AED',
    priceNum: 4100000,
    message: "Flame Tree Ridge luxury villa with private pool and golf course view. The property features 5,800 sqft of living space with high-end finishes throughout.",
    status: 'pending',
    createdAt: '4 hrs ago',
  },
  {
    id: 'recv-offer-3',
    requestId: 'my-req-1',
    agentId: 'ag-3',
    agentName: 'Sarah Johnson',
    agentAvatar: FEMALE_AVATAR,
    agentVerified: true,
    propertyTitle: '4BR Villa - Whispering Pines',
    price: '4.6M AED',
    priceNum: 4600000,
    message: "Premium villa in Whispering Pines with direct golf course view. Recently renovated with smart home systems. All utilities connected and ready for immediate transfer.",
    status: 'accepted',
    createdAt: '1 day ago',
  },
];

export const MOCK_CHATS: Chat[] = [
  {
    id: 'chat-1',
    participantName: 'Sarah Johnson',
    participantAvatar: FEMALE_AVATAR,
    participantVerified: true,
    lastMessage: "The property has a stunning golf view and the seller is motivated to close quickly.",
    lastMessageTime: '10 min ago',
    unread: 2,
    requestTitle: '4BR Villa - Jumeirah Golf Estates',
    messages: [
      {
        id: 'm1',
        senderId: 'ag-3',
        senderName: 'Sarah Johnson',
        text: 'Hello Mohamed! I saw your request for a 4BR villa in Jumeirah Golf Estates. I have the perfect match for you.',
        time: '10:30 AM',
        isOwn: false,
      },
      {
        id: 'm2',
        senderId: 'inv-1',
        senderName: 'Mohamed Salah',
        text: 'That sounds great! Can you share more details about the property?',
        time: '10:32 AM',
        isOwn: true,
      },
      {
        id: 'm3',
        senderId: 'ag-3',
        senderName: 'Sarah Johnson',
        text: 'The property has a stunning golf view and the seller is motivated to close quickly. It\'s 5,200 sqft with 4 bedrooms, private pool, and smart home system.',
        time: '10:35 AM',
        isOwn: false,
      },
      {
        id: 'm4',
        senderId: 'ag-3',
        senderName: 'Sarah Johnson',
        text: 'The property has a stunning golf view and the seller is motivated to close quickly.',
        time: '10:40 AM',
        isOwn: false,
      },
    ],
  },
];

export const MOCK_COMMENTS: Record<string, Comment[]> = {
  'req-1': [
    {
      id: 'c1',
      requestId: 'req-1',
      authorId: 'agent-99',
      authorName: 'Rami Al Hussein',
      authorAvatar: 'https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
      authorVerified: true,
      authorRole: 'agent',
      text: 'Al Barsha has some great ready villas right now, several listings around 3.6–3.9M. Great timing to post this request!',
      createdAt: '2 min ago',
      likesCount: 7,
      liked: false,
      replies: [
        {
          id: 'c1-r1',
          requestId: 'req-1',
          authorId: 'inv-2',
          authorName: 'Anwar Hosny',
          authorAvatar: 'https://images.unsplash.com/photo-1604346382498-34e8c19df705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
          authorVerified: true,
          authorRole: 'investor',
          text: "Yes! I'm flexible on the area slightly \u2014 Al Quoz or Umm Suqeim could work too if the specs match.",
          createdAt: '1 min ago',
          likesCount: 2,
          liked: false,
        },
      ],
    },
    {
      id: 'c2',
      requestId: 'req-1',
      authorId: 'agent-98',
      authorName: 'Sarah Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1769636929132-e4e7b50cfac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
      authorVerified: true,
      authorRole: 'agent',
      text: 'I have a off-market 4BR villa in Al Barsha South that fits perfectly. Just sent you an offer!',
      createdAt: '5 min ago',
      likesCount: 4,
      liked: true,
      replies: [],
    },
    {
      id: 'c3',
      requestId: 'req-1',
      authorId: 'agent-97',
      authorName: 'Khalid Al Hamdan',
      authorAvatar: 'https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
      authorVerified: false,
      authorRole: 'agent',
      text: 'Mortgage timeline might be tight with the current valuations in that area. A cash offer would be more competitive.',
      createdAt: '12 min ago',
      likesCount: 1,
      liked: false,
      replies: [],
    },
    {
      id: 'c4',
      requestId: 'req-1',
      authorId: 'agent-96',
      authorName: 'Anwar El-Tayeb',
      authorAvatar: 'https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
      authorVerified: true,
      authorRole: 'agent',
      text: 'Budget looks solid for that area. Al Barsha 1 has some prime options right now. Happy to arrange a viewing this week.',
      createdAt: '18 min ago',
      likesCount: 10,
      liked: false,
      replies: [
        {
          id: 'c4-r1',
          requestId: 'req-1',
          authorId: 'agent-100',
          authorName: 'Nour Khalil',
          authorAvatar: 'https://images.unsplash.com/photo-1704627363842-a169b9743309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
          authorVerified: false,
          authorRole: 'agent',
          text: 'Agreed! The flexible handover is a big plus. Makes negotiations much smoother.',
          createdAt: '15 min ago',
          likesCount: 3,
          liked: false,
        },
        {
          id: 'c4-r2',
          requestId: 'req-1',
          authorId: 'inv-2',
          authorName: 'Anwar Hosny',
          authorAvatar: 'https://images.unsplash.com/photo-1604346382498-34e8c19df705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
          authorVerified: true,
          authorRole: 'investor',
          text: 'Yes please! Would love to arrange a tour this weekend if possible.',
          createdAt: '10 min ago',
          likesCount: 0,
          liked: false,
        },
      ],
    },
  ],
  'req-2': [
    {
      id: 'c5',
      requestId: 'req-2',
      authorId: 'agent-95',
      authorName: 'Mohamed Salah',
      authorAvatar: 'https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
      authorVerified: true,
      authorRole: 'agent',
      text: 'Downtown 2BR with 7%+ ROI is very achievable. Burj Khalifa view units are moving fast though — suggest acting quickly.',
      createdAt: '30 min ago',
      likesCount: 14,
      liked: false,
      replies: [],
    },
  ],
};

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'agent-1',
    name: 'Mohamed Salah',
    avatar: 'https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    title: 'Pro Agent',
    rating: 4.9,
    reviews: 125,
    deals: 150,
    experience: '8 yrs',
    verified: true,
    reraVerified: true,
    bio: 'Specializing in high-yield off-plan developments and luxury secondary market portfolios. I provide data-driven insights to institutional and private investors looking to maximize their rental yield and capital appreciation in the Dubai market.',
    subtitle: 'Helps investors achieve 7–9% annual ROI in Dubai Hills & Downtown',
    expertise: ['Investment-focused', 'ROI-focused', 'Downtown Dubai', 'Dubai Hills', 'Portfolio Management'],
    badges: ['RANK 1# ON DUSEAT THIS MONTH', 'Hit 25 million sales on Duseat'],
    isOnline: true,
    rank: '#1',
  },
  {
    id: 'agent-2',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1769636929132-e4e7b50cfac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    title: 'Senior Agent',
    rating: 4.7,
    reviews: 98,
    deals: 120,
    experience: '6 yrs',
    verified: true,
    reraVerified: true,
    bio: 'Expert in luxury villa sales and premium apartment investments across Dubai Marina and Palm Jumeirah. Fluent in English, Arabic, and French with strong connections to international buyers.',
    subtitle: 'Luxury property specialist in Marina & Palm Jumeirah',
    expertise: ['Luxury Villas', 'Palm Jumeirah', 'Dubai Marina', 'International Clients'],
    badges: ['Top 5% Agent on Duseat'],
    isOnline: false,
    rank: '#2',
  },
  {
    id: 'agent-3',
    name: 'Khalid Al Hamdan',
    avatar: 'https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    title: 'Agent',
    rating: 4.5,
    reviews: 67,
    deals: 85,
    experience: '4 yrs',
    verified: true,
    reraVerified: false,
    bio: 'Commercial real estate specialist with a focus on Business Bay and DIFC. I help investors and businesses secure premium commercial spaces with strong rental yields and capital growth potential.',
    subtitle: 'Commercial real estate expert — Business Bay & DIFC',
    expertise: ['Commercial', 'Business Bay', 'DIFC', 'Corporate Leasing'],
    badges: ['Rising Star 2024'],
    isOnline: true,
    rank: '#3',
  },
  {
    id: 'agent-4',
    name: 'Anwar El-Tayeb',
    avatar: 'https://images.unsplash.com/photo-1763478958776-ebd04b6459ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    title: 'Pro Agent',
    rating: 4.8,
    reviews: 112,
    deals: 130,
    experience: '7 yrs',
    verified: true,
    reraVerified: true,
    bio: 'Off-plan development specialist with deep market knowledge in Emaar, Damac, and Aldar projects. I help investors identify high-appreciation opportunities before they hit the secondary market.',
    subtitle: 'Off-plan specialist with 7 years of market expertise',
    expertise: ['Off-Plan', 'Emaar Projects', 'Damac', 'Capital Appreciation'],
    badges: ['Top Off-Plan Agent 2024'],
    isOnline: true,
    rank: '#4',
  },
];