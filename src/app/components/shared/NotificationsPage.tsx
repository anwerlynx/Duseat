import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Bell, CheckCheck, Trash2, MessageCircle, Send, Star, ShieldCheck, TrendingUp, Home } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { useApp } from '../AppContext';

const FONT = "'TT Commons', sans-serif";

type NotifType = 'offer' | 'chat' | 'deal' | 'system' | 'review' | 'match';
type FilterTab = 'All' | 'Unread' | 'Offers' | 'Chats';

interface Notification {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  time: string;
  read: boolean;
  avatar?: string;
  actionPath?: string;
}

const AGENT_AVATAR = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80';
const INV_AVATAR = 'https://images.unsplash.com/photo-1604346382498-34e8c19df705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80';
const INV_AVATAR2 = 'https://images.unsplash.com/photo-1744877952651-0e6e4b13e7cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80';

const AGENT_NOTIFS: Notification[] = [
  {
    id: 'n1',
    type: 'match',
    title: 'New high-match request!',
    body: 'Anwar Hosny posted a 4BR Villa in Al Barsha — 3.8M AED. 94% match with your profile.',
    time: '2 min ago',
    read: false,
    avatar: INV_AVATAR,
    actionPath: '/agent/request/req-1',
  },
  {
    id: 'n2',
    type: 'offer',
    title: 'Your offer was accepted 🎉',
    body: 'Sara Al Rashidi accepted your offer for Downtown 2BR Apartment. Chat is now open.',
    time: '15 min ago',
    read: false,
    avatar: INV_AVATAR2,
    actionPath: '/agent/chat/chat-1',
  },
  {
    id: 'n3',
    type: 'chat',
    title: 'New message from Mohamed Alaify',
    body: "Is the property still available? I'm very interested and can...",
    time: '1 hr ago',
    read: false,
    avatar: INV_AVATAR,
    actionPath: '/agent/chat/chat-1',
  },
  {
    id: 'n4',
    type: 'review',
    title: 'New 5-star review ⭐',
    body: 'Ahmed Khalied left you a review: "Best agent on Duseat, closed our deal in record time!"',
    time: '3 hrs ago',
    read: true,
    avatar: INV_AVATAR2,
    actionPath: '/agent/profile',
  },
  {
    id: 'n5',
    type: 'offer',
    title: 'Offer declined',
    body: 'Your offer for Palm Jumeirah 3BR was declined by the investor. Consider adjusting your price.',
    time: '5 hrs ago',
    read: true,
    actionPath: '/agent/my-offers',
  },
  {
    id: 'n6',
    type: 'system',
    title: '🏆 You ranked #1 this month!',
    body: 'Congratulations! You are the top agent on Duseat for February 2026.',
    time: '1 day ago',
    read: true,
    actionPath: '/agent/profile',
  },
  {
    id: 'n7',
    type: 'deal',
    title: 'Deal confirmation pending',
    body: 'Your deal with Khalid Al Mansouri needs confirmation. Tap to complete.',
    time: '2 days ago',
    read: true,
    avatar: INV_AVATAR,
    actionPath: '/deal/deal-1',
  },
  {
    id: 'n8',
    type: 'system',
    title: 'Verification approved ✅',
    body: 'Your RERA credentials have been verified. You now have full access.',
    time: '3 days ago',
    read: true,
    actionPath: '/agent/profile',
  },
];

const INVESTOR_NOTIFS: Notification[] = [
  {
    id: 'n1',
    type: 'offer',
    title: 'New offer received!',
    body: 'Sarah Johnson sent an offer for your 4BR Villa request — 4.3M AED.',
    time: '3 min ago',
    read: false,
    avatar: AGENT_AVATAR,
    actionPath: '/investor/offers/my-req-1',
  },
  {
    id: 'n2',
    type: 'offer',
    title: '5 new offers on your request',
    body: 'Your "2BR Marina for investment" request got 5 new offers in the last hour.',
    time: '30 min ago',
    read: false,
    actionPath: '/investor/offers/my-req-2',
  },
  {
    id: 'n3',
    type: 'chat',
    title: 'Message from Ahmed Hassan',
    body: 'The villa has a stunning golf view and the seller is very motivated to close...',
    time: '2 hrs ago',
    read: false,
    avatar: AGENT_AVATAR,
    actionPath: '/investor/chat/chat-1',
  },
  {
    id: 'n4',
    type: 'match',
    title: 'Agent interested in your request',
    body: 'Top-rated agent Mohamed Salah is interested in your Jumeirah Villa request.',
    time: '4 hrs ago',
    read: true,
    avatar: AGENT_AVATAR,
    actionPath: '/investor/offers/my-req-1',
  },
  {
    id: 'n5',
    type: 'deal',
    title: 'Deal confirmed! 🎉',
    body: 'Your deal with Sarah Johnson for the 4BR Villa has been confirmed successfully.',
    time: '1 day ago',
    read: true,
    avatar: AGENT_AVATAR,
    actionPath: '/deal/deal-1',
  },
  {
    id: 'n6',
    type: 'system',
    title: 'Your request is expiring soon',
    body: 'Your "2BR Marina" request expires in 2 days. Renew it to keep receiving offers.',
    time: '2 days ago',
    read: true,
    actionPath: '/investor/my-requests',
  },
  {
    id: 'n7',
    type: 'review',
    title: 'Leave a review for Sarah Johnson',
    body: 'How was your experience? Your feedback helps other investors find great agents.',
    time: '3 days ago',
    read: true,
    avatar: AGENT_AVATAR,
    actionPath: '/investor/chat/chat-1',
  },
];

function notifIcon(type: NotifType) {
  const base = 'w-10 h-10 rounded-full flex items-center justify-center shrink-0';
  if (type === 'offer') return { bg: '#F0FBFB', icon: <Send size={16} color="#01CBD2" /> };
  if (type === 'chat') return { bg: '#EEF2FF', icon: <MessageCircle size={16} color="#4F6EF6" /> };
  if (type === 'deal') return { bg: '#F0FFF0', icon: <CheckCheck size={16} color="#0ED221" /> };
  if (type === 'review') return { bg: '#FFF8E8', icon: <Star size={16} color="#F5A623" /> };
  if (type === 'match') return { bg: '#F0FBFB', icon: <TrendingUp size={16} color="#01CBD2" /> };
  return { bg: '#F8F8F8', icon: <Bell size={16} color="#666" /> };
}

function NotifItem({
  notif,
  onRead,
  onDelete,
  onClick,
}: {
  notif: Notification;
  onRead: (id: string) => void;
  onDelete: (id: string) => void;
  onClick: (notif: Notification) => void;
}) {
  const { bg, icon } = notifIcon(notif.type);

  return (
    <div
      className="relative flex items-start gap-3 px-4 py-3.5 cursor-pointer transition-colors"
      style={{
        background: notif.read ? 'white' : 'rgba(1,203,210,0.04)',
        borderBottom: '1px solid #F8F8F8',
      }}
      onClick={() => { onRead(notif.id); onClick(notif); }}
    >
      {/* Unread dot */}
      {!notif.read && (
        <div
          className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#01CBD2]"
        />
      )}

      {/* Icon / Avatar */}
      <div className="relative shrink-0 ml-2">
        {notif.avatar ? (
          <div className="relative">
            <img src={notif.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
            <div
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: bg, border: '1.5px solid white' }}
            >
              {icon}
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: bg }}>
            {icon}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          style={{
            fontSize: '14px',
            fontWeight: notif.read ? 500 : 700,
            color: '#050B2E',
            fontFamily: FONT,
            lineHeight: 1.3,
            marginBottom: '3px',
          }}
        >
          {notif.title}
        </p>
        <p
          style={{
            fontSize: '13px',
            color: '#666',
            fontFamily: FONT,
            lineHeight: 1.4,
            marginBottom: '4px',
          }}
          className="line-clamp-2"
        >
          {notif.body}
        </p>
        <p style={{ fontSize: '11px', color: '#A6A6A6', fontFamily: FONT }}>{notif.time}</p>
      </div>

      {/* Delete */}
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(notif.id); }}
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 hover:bg-[#FFF0F0] transition-colors"
        style={{ marginTop: '2px' }}
      >
        <Trash2 size={13} color="#CCC" />
      </button>
    </div>
  );
}

export default function NotificationsPage() {
  const navigate = useNavigate();
  const { userType } = useApp();
  const isAgent = userType === 'agent';
  const base = isAgent ? '/agent' : '/investor';

  const rawNotifs = isAgent ? AGENT_NOTIFS : INVESTOR_NOTIFS;
  const [notifs, setNotifs] = useState<Notification[]>(rawNotifs);
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const unreadCount = notifs.filter(n => !n.read).length;

  const markAllRead = () => setNotifs(prev => prev.map(n => ({ ...n, read: true })));
  const markRead = (id: string) => setNotifs(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  const deleteNotif = (id: string) => setNotifs(prev => prev.filter(n => n.id !== id));

  const handleClick = (notif: Notification) => {
    if (notif.actionPath) navigate(notif.actionPath);
  };

  const filtered = notifs.filter(n => {
    if (activeTab === 'Unread') return !n.read;
    if (activeTab === 'Offers') return n.type === 'offer' || n.type === 'match';
    if (activeTab === 'Chats') return n.type === 'chat';
    return true;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: FONT }}>
      {/* Header */}
      <div className="bg-white shrink-0 border-b border-[#F0F0F0]">
        <StatusBar />
        <div className="flex items-center px-4 h-14">
          <button
            onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F8F8F8]"
            style={{ boxShadow: 'inset 0px -1px 4px 0px #00a2a8, inset 0px 4px 4px 0px rgba(255,255,255,0.25)' }}
          >
            <ChevronLeft size={18} color="#333" />
          </button>
          <div className="flex-1 text-center">
            <p style={{ fontSize: '20px', fontWeight: 600, color: '#050B2E', fontFamily: FONT }}>
              Notifications
            </p>
          </div>
          {unreadCount > 0 ? (
            <button
              onClick={markAllRead}
              className="flex items-center gap-1"
            >
              <CheckCheck size={16} color="#01CBD2" />
              <span style={{ fontSize: '12px', color: '#01CBD2', fontFamily: FONT }}>All read</span>
            </button>
          ) : (
            <div className="w-9" />
          )}
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 px-4 pb-3 overflow-x-auto no-scrollbar">
          {(['All', 'Unread', 'Offers', 'Chats'] as FilterTab[]).map(tab => {
            const count = tab === 'Unread' ? unreadCount : 0;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all"
                style={{
                  background: activeTab === tab ? '#050B2E' : '#F0F0F0',
                  color: activeTab === tab ? 'white' : '#666',
                  fontSize: '13px',
                  fontWeight: activeTab === tab ? 600 : 400,
                  fontFamily: FONT,
                }}
              >
                {tab}
                {tab === 'Unread' && unreadCount > 0 && (
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: activeTab === tab ? '#01CBD2' : '#E8E8E8',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: activeTab === tab ? 'white' : '#666',
                    }}
                  >
                    {unreadCount}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'rgba(1,203,210,0.1)' }}
            >
              <Bell size={28} color="#01CBD2" />
            </div>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#050B2E', fontFamily: FONT, marginBottom: '6px', textAlign: 'center' }}>
              {activeTab === 'Unread' ? 'All caught up!' : 'No notifications'}
            </p>
            <p style={{ fontSize: '14px', color: '#999', fontFamily: FONT, textAlign: 'center' }}>
              {activeTab === 'Unread'
                ? 'You have no unread notifications.'
                : 'Notifications will appear here when you receive offers, messages, or updates.'}
            </p>
          </div>
        ) : (
          <>
            {/* Today group */}
            {filtered.some(n => ['2 min ago', '3 min ago', '15 min ago', '30 min ago', '1 hr ago', '2 hrs ago', '3 hrs ago', '4 hrs ago', '5 hrs ago'].some(t => n.time.includes(t.replace(' ago', '')))) && (
              <div className="px-4 py-2 bg-[#F8F8F8]">
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#999', fontFamily: FONT, letterSpacing: '0.5px' }}>TODAY</p>
              </div>
            )}
            {filtered.filter(n => !n.time.includes('day')).map(n => (
              <NotifItem
                key={n.id}
                notif={n}
                onRead={markRead}
                onDelete={deleteNotif}
                onClick={handleClick}
              />
            ))}

            {/* Earlier group */}
            {filtered.some(n => n.time.includes('day')) && (
              <div className="px-4 py-2 bg-[#F8F8F8]">
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#999', fontFamily: FONT, letterSpacing: '0.5px' }}>EARLIER</p>
              </div>
            )}
            {filtered.filter(n => n.time.includes('day')).map(n => (
              <NotifItem
                key={n.id}
                notif={n}
                onRead={markRead}
                onDelete={deleteNotif}
                onClick={handleClick}
              />
            ))}
          </>
        )}
        <div className="h-6" />
      </div>
    </div>
  );
}
