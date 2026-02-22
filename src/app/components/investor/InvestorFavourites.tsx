import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Heart, MapPin, DollarSign, Building2, Trash2, MessageCircle } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';

const FONT = "'TT Commons', sans-serif";

interface SavedAgent {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
  specialization: string;
  area: string;
  rating: number;
  deals: number;
  online: boolean;
}

interface SavedProperty {
  id: string;
  title: string;
  area: string;
  price: string;
  type: string;
  agentName: string;
  agentAvatar: string;
  image: string;
}

const SAVED_AGENTS: SavedAgent[] = [
  {
    id: 'a1',
    name: 'Ahmed Al-Rashid',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
    verified: true,
    specialization: 'Luxury Villas & Off-Plan',
    area: 'Dubai Hills, Palm Jumeirah',
    rating: 4.9,
    deals: 47,
    online: true,
  },
  {
    id: 'a2',
    name: 'Sara Johnson',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
    verified: true,
    specialization: 'Investment Properties',
    area: 'Downtown, Business Bay',
    rating: 4.8,
    deals: 32,
    online: false,
  },
  {
    id: 'a3',
    name: 'Khalid Hassan',
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
    verified: false,
    specialization: 'Apartments & Studios',
    area: 'JBR, Dubai Marina',
    rating: 4.6,
    deals: 19,
    online: true,
  },
];

const SAVED_PROPERTIES: SavedProperty[] = [
  {
    id: 'p1',
    title: '4BR Villa with Pool — Stunning Views',
    area: 'Dubai Hills Estate',
    price: '5.2M AED',
    type: 'Villa',
    agentName: 'Ahmed Al-Rashid',
    agentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=60',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    id: 'p2',
    title: '2BR Apartment — High ROI Ready',
    area: 'Business Bay',
    price: '1.8M AED',
    type: 'Apartment',
    agentName: 'Sara Johnson',
    agentAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=60',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
  {
    id: 'p3',
    title: 'Luxury Penthouse — Sea View',
    area: 'Palm Jumeirah',
    price: '12.5M AED',
    type: 'Penthouse',
    agentName: 'Khalid Hassan',
    agentAvatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=60',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  },
];

type FavTab = 'Agents' | 'Properties';

export default function InvestorFavourites() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<FavTab>('Agents');
  const [savedAgents, setSavedAgents] = useState<string[]>(SAVED_AGENTS.map(a => a.id));
  const [savedProperties, setSavedProperties] = useState<string[]>(SAVED_PROPERTIES.map(p => p.id));

  const removeAgent = (id: string) => setSavedAgents(prev => prev.filter(a => a !== id));
  const removeProperty = (id: string) => setSavedProperties(prev => prev.filter(p => p !== id));

  const visibleAgents = SAVED_AGENTS.filter(a => savedAgents.includes(a.id));
  const visibleProperties = SAVED_PROPERTIES.filter(p => savedProperties.includes(p.id));

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col" style={{ fontFamily: FONT }}>
      {/* Header */}
      <div className="bg-white shrink-0">
        <StatusBar />
        <div className="px-4 pt-2 pb-3 border-b border-[rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between">
            <p style={{ fontSize: '22px', fontWeight: 700, color: '#050B2E', fontFamily: FONT }}>
              Favourites
            </p>
            <div className="flex items-center gap-1">
              <Heart size={16} fill="#01CBD2" color="#01CBD2" />
              <span style={{ fontSize: '13px', color: '#01CBD2', fontFamily: FONT }}>
                {activeTab === 'Agents' ? visibleAgents.length : visibleProperties.length} saved
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-3 bg-[#F8F8F8] rounded-full p-1">
            {(['Agents', 'Properties'] as FavTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 py-2 rounded-full transition-all"
                style={{
                  background: activeTab === tab ? '#050B2E' : 'transparent',
                  color: activeTab === tab ? 'white' : '#999',
                  fontSize: '14px',
                  fontWeight: activeTab === tab ? 600 : 400,
                  fontFamily: FONT,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {activeTab === 'Agents' ? (
          visibleAgents.length === 0 ? (
            <EmptyState type="agents" />
          ) : (
            visibleAgents.map(agent => (
              <div
                key={agent.id}
                className="bg-white rounded-[16px] p-4"
                style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <img
                      src={agent.avatar}
                      alt={agent.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {agent.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#0ED221] rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span style={{ fontSize: '15px', fontWeight: 600, color: '#050B2E', fontFamily: FONT }}>
                        {agent.name}
                      </span>
                      {agent.verified && (
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
                          <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <p style={{ fontSize: '12px', color: '#999', fontFamily: FONT }}>{agent.specialization}</p>
                  </div>
                  <button
                    onClick={() => removeAgent(agent.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FFF0F0]"
                  >
                    <Trash2 size={14} color="#E31D1C" />
                  </button>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <MapPin size={12} color="#999" />
                  <span style={{ fontSize: '12px', color: '#999', fontFamily: FONT }}>{agent.area}</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E', fontFamily: FONT }}>{agent.rating}</span>
                    <span style={{ fontSize: '11px', color: '#999', fontFamily: FONT }}>/5.0</span>
                    <span style={{ fontSize: '11px', color: '#999', fontFamily: FONT }}>Rating</span>
                  </div>
                  <div className="w-px h-3 bg-[#E8E8E8]" />
                  <div className="flex items-center gap-1">
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E', fontFamily: FONT }}>{agent.deals}</span>
                    <span style={{ fontSize: '11px', color: '#999', fontFamily: FONT }}>Closed deals</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/investor/chats')}
                  className="w-full h-10 rounded-[24px] flex items-center justify-center gap-2"
                  style={{ background: '#01CBD2' }}
                >
                  <MessageCircle size={14} color="white" />
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'white', fontFamily: FONT }}>Send Message</span>
                </button>
              </div>
            ))
          )
        ) : (
          visibleProperties.length === 0 ? (
            <EmptyState type="properties" />
          ) : (
            visibleProperties.map(prop => (
              <div
                key={prop.id}
                className="bg-white rounded-[16px] overflow-hidden"
                style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
              >
                <div className="relative h-40">
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                  <button
                    onClick={() => removeProperty(prop.id)}
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white"
                    style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
                  >
                    <Heart size={14} fill="#E31D1C" color="#E31D1C" />
                  </button>
                  <div
                    className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(5,11,46,0.8)' }}
                  >
                    <span style={{ fontSize: '11px', color: 'white', fontFamily: FONT }}>{prop.type}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p style={{ fontSize: '15px', fontWeight: 600, color: '#050B2E', fontFamily: FONT, marginBottom: '4px' }}>
                    {prop.title}
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin size={11} color="#999" />
                    <span style={{ fontSize: '12px', color: '#999', fontFamily: FONT }}>{prop.area}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <DollarSign size={13} color="#01CBD2" />
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#050B2E', fontFamily: FONT }}>{prop.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={prop.agentAvatar} alt={prop.agentName} className="w-5 h-5 rounded-full object-cover" />
                      <span style={{ fontSize: '11px', color: '#666', fontFamily: FONT }}>{prop.agentName}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>

      <BottomNav userType="investor" />
    </div>
  );
}

function EmptyState({ type }: { type: 'agents' | 'properties' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ background: 'rgba(1,203,210,0.1)' }}
      >
        {type === 'agents' ? (
          <Building2 size={28} color="#01CBD2" />
        ) : (
          <Heart size={28} color="#01CBD2" />
        )}
      </div>
      <p style={{ fontSize: '18px', fontWeight: 600, color: '#050B2E', fontFamily: FONT, marginBottom: '6px' }}>
        No saved {type} yet
      </p>
      <p style={{ fontSize: '14px', color: '#999', fontFamily: FONT, textAlign: 'center' }}>
        Browse and save {type === 'agents' ? 'agents you like' : 'properties of interest'} to see them here
      </p>
    </div>
  );
}
