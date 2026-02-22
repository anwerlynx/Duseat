import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Search, MoreHorizontal, Plus, Pin, Archive, Check, Settings, CheckCheck, Mic, Video, FileText, Image } from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { BottomNav } from '../BottomNav';
import { useApp } from '../AppContext';

const AVATARS = [
  'https://images.unsplash.com/photo-1604346382498-34e8c19df705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
  'https://images.unsplash.com/photo-1744877952651-0e6e4b13e7cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
  'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100',
];

type MessageType = 'text' | 'voice' | 'video' | 'file' | 'photo';

interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
  role: string;
  lastMessageType: MessageType;
  lastMessage: string;
  lastMessageDuration?: string;
  time: string;
  unread: number;
  isOwn: boolean;
  online: boolean;
  pinned: boolean;
}

const CHATS: ChatItem[] = [
  {
    id: '1', name: 'Anwar hosny', avatar: AVATARS[0], verified: true,
    role: 'Rera verfied | Pro agent', lastMessageType: 'text',
    lastMessage: 'Thanks. Is the villa available for...', time: '11:23',
    unread: 0, isOwn: false, online: true, pinned: false,
  },
  {
    id: '2', name: 'Ahmed shahab', avatar: AVATARS[1], verified: true,
    role: 'Rera verfied | Pro agent', lastMessageType: 'voice',
    lastMessage: '0:25', time: '11:23',
    unread: 1, isOwn: true, online: true, pinned: false,
  },
  {
    id: '3', name: 'Ahmed Khalied', avatar: AVATARS[2], verified: true,
    role: 'Rera verfied | Pro agent', lastMessageType: 'video',
    lastMessage: 'Video', time: '11:23',
    unread: 0, isOwn: true, online: false, pinned: false,
  },
  {
    id: '4', name: 'Mohamed Alaify', avatar: AVATARS[3], verified: true,
    role: 'Rera verfied | Pro agent', lastMessageType: 'file',
    lastMessage: 'File', time: '11:23',
    unread: 1, isOwn: true, online: true, pinned: false,
  },
  {
    id: '5', name: 'Ahmed Yasser', avatar: AVATARS[4], verified: true,
    role: 'Rera verfied | Pro agent', lastMessageType: 'photo',
    lastMessage: 'Photo', time: '11:23',
    unread: 0, isOwn: true, online: true, pinned: false,
  },
];

type FilterTab = 'All' | 'Deals Completed';

/* ─── Message type icon ─── */
function MsgTypeIcon({ type }: { type: MessageType }) {
  const props = { size: 13, color: '#A6A6A6' };
  if (type === 'voice') return <Mic {...props} />;
  if (type === 'video') return <Video {...props} />;
  if (type === 'file') return <FileText {...props} />;
  if (type === 'photo') return <Image {...props} />;
  return null;
}

/* ─── Verified badge ─── */
function VerifiedBadge() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z" fill="#01CBD2" />
      <path d="M5.5 8L7 9.5L10.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Menu dropdown ─── */
function MenuDropdown({
  onClose, showArchive, onToggleArchive, showLabels, onToggleLabels,
  onSelectChat, onSelectAll,
}: {
  onClose: () => void; showArchive: boolean; onToggleArchive: () => void;
  showLabels: boolean; onToggleLabels: () => void;
  onSelectChat: () => void; onSelectAll: () => void;
}) {
  return (
    <div className="absolute top-12 right-3 z-50 bg-white rounded-[16px] w-64 overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.16)' }}>
      {[
        { icon: Settings, label: 'General Settings', action: onClose },
        { icon: Check, label: 'Select chat', action: () => { onSelectChat(); onClose(); } },
        { icon: CheckCheck, label: 'Select all as read', action: () => { onSelectAll(); onClose(); } },
      ].map(({ icon: Icon, label, action }) => (
        <button
          key={label}
          onClick={action}
          className="w-full flex items-center gap-3 px-4 py-4 border-b border-[#F8F8F8] last:border-0 hover:bg-[#F8F8F8]"
        >
          <Icon size={18} color="#050B2E" />
          <span style={{ fontSize: '15px', color: '#050B2E' }}>{label}</span>
        </button>
      ))}
      {[
        { label: 'Show Archive', value: showArchive, toggle: onToggleArchive },
        { label: 'Show Labels', value: showLabels, toggle: onToggleLabels },
      ].map(({ label, value, toggle }) => (
        <div key={label} className="flex items-center justify-between px-4 py-4 border-t border-[#F8F8F8]">
          <span style={{ fontSize: '15px', color: '#050B2E' }}>{label}</span>
          <button
            onClick={toggle}
            className="relative w-[46px] h-[26px] rounded-full transition-colors"
            style={{ background: value ? '#01CBD2' : '#D9D9D9' }}
          >
            <div
              className="absolute top-[3px] w-5 h-5 bg-white rounded-full shadow-sm transition-all"
              style={{ left: value ? '23px' : '3px' }}
            />
          </button>
        </div>
      ))}
    </div>
  );
}

/* ─── Create Label sheet ─── */
function CreateLabelSheet({ onClose }: { onClose: () => void }) {
  const [labelName, setLabelName] = useState('');
  const [step, setStep] = useState<'create' | 'select'>('create');
  const [selected, setSelected] = useState<string[]>([]);

  if (step === 'select') {
    return (
      <div className="absolute inset-0 z-40 bg-white flex flex-col">
        <StatusBar />
        <div className="flex items-center px-4 h-14 border-b border-[#F0F0F0]">
          <button
            onClick={() => setStep('create')}
            className="w-9 h-9 rounded-full border border-[#E8E8E8] flex items-center justify-center"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path d="M7 1L1 7L7 13" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex-1 mx-3 flex items-center bg-[#F8F8F8] rounded-full h-10 px-4 gap-2">
            <Search size={15} color="#CCC" />
            <input placeholder="Search" className="flex-1 bg-transparent outline-none text-[#050B2E]" style={{ fontSize: '14px' }} />
          </div>
          <button onClick={() => { onClose(); setStep('create'); }} className="w-9 h-9 rounded-full border border-[#E8E8E8] flex items-center justify-center">
            <Check size={16} color="#01CBD2" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {CHATS.map(chat => (
            <button
              key={chat.id}
              onClick={() => setSelected(p => p.includes(chat.id) ? p.filter(id => id !== chat.id) : [...p, chat.id])}
              className="w-full flex items-center px-4 py-3 border-b border-[#F8F8F8]"
            >
              <div
                className="w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center shrink-0"
                style={{ borderColor: selected.includes(chat.id) ? '#01CBD2' : '#CCC', background: selected.includes(chat.id) ? '#01CBD2' : 'white' }}
              >
                {selected.includes(chat.id) && <Check size={11} color="white" strokeWidth={3} />}
              </div>
              <div className="relative mr-3">
                <img src={chat.avatar} alt={chat.name} className="w-11 h-11 rounded-full object-cover" />
                {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#0ED221] rounded-full border-2 border-white" />}
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>{chat.name}</span>
                  {chat.verified && <VerifiedBadge />}
                </div>
                <p className="text-[#01CBD2]" style={{ fontSize: '12px' }}>{chat.role}</p>
                <p className="text-[#A6A6A6]" style={{ fontSize: '12px' }}>Preview</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-40 flex flex-col justify-end" style={{ background: 'rgba(0,0,0,0.4)' }} onClick={onClose}>
      <div className="bg-white rounded-t-[24px] px-5 pt-4 pb-8" onClick={e => e.stopPropagation()}>
        <div className="w-10 h-1 bg-[#050B2E] rounded-full mx-auto mb-5" />
        <p className="text-[#050B2E] text-center mb-6" style={{ fontSize: '18px', fontWeight: 600 }}>Create Label</p>

        <div className="mb-5">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[#050B2E]" style={{ fontSize: '15px', fontWeight: 600 }}>Label name</span>
            <span className="text-[#999]" style={{ fontSize: '12px' }}>(Min 2 characters)</span>
          </div>
          <input
            value={labelName}
            onChange={e => setLabelName(e.target.value)}
            placeholder="e.g. Top agents, Fast responders"
            className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 outline-none focus:border-[#01CBD2] bg-white"
            style={{ fontSize: '15px' }}
          />
        </div>

        <div className="mb-6">
          <p className="text-[#050B2E] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>Included investors</p>
          <button
            onClick={() => setStep('select')}
            className="w-full h-[52px] border border-[#E8E8E8] rounded-[12px] px-4 flex items-center gap-2 bg-white"
          >
            <Plus size={16} color="#A6A6A6" />
            <span className="text-[#A6A6A6]" style={{ fontSize: '15px' }}>Add agent</span>
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full h-12 rounded-full flex items-center justify-center"
          style={{
            background: labelName.length >= 2 ? '#01CBD2' : '#E8E8E8',
            fontSize: '16px',
            fontWeight: 600,
            color: labelName.length >= 2 ? 'white' : '#999',
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}

/* ─── Chat row with swipe ─── */
function ChatRow({
  chat, onPress, selected, selectionMode, onToggleSelect,
}: {
  chat: ChatItem; onPress: () => void; selected: boolean; selectionMode: boolean; onToggleSelect: () => void;
}) {
  const [swipeX, setSwipeX] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: { touches: { clientX: number }[] }) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: { touches: { clientX: number }[] }) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.touches[0].clientX;
    if (diff > 0) setSwipeX(Math.min(diff, 130));
    else setSwipeX(0);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    if (swipeX < 60) setSwipeX(0);
    else setSwipeX(130);
  };

  return (
    <div className="relative overflow-hidden" style={{ borderBottom: '1px solid #F8F8F8' }}>
      {/* Swipe actions */}
      <div className="absolute right-0 top-0 bottom-0 flex" style={{ width: 130 }}>
        <div className="w-[65px] bg-[#050B2E] flex flex-col items-center justify-center gap-1">
          <Archive size={20} color="#01CBD2" />
          <span className="text-[#01CBD2]" style={{ fontSize: '11px', fontWeight: 600 }}>Archive</span>
        </div>
        <div className="w-[65px] bg-[#01CBD2] flex flex-col items-center justify-center gap-1">
          <Pin size={20} color="white" />
          <span className="text-white" style={{ fontSize: '11px', fontWeight: 600 }}>Pin</span>
        </div>
      </div>

      {/* Row */}
      <div
        className="relative bg-white flex items-center px-4 py-3 gap-3 cursor-pointer"
        style={{ transform: `translateX(-${swipeX}px)`, transition: isDragging.current ? 'none' : 'transform 0.2s ease' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => selectionMode ? onToggleSelect() : (swipeX > 0 ? setSwipeX(0) : onPress())}
      >
        {/* Checkbox (selection mode) */}
        {selectionMode && (
          <div
            className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0"
            style={{ borderColor: selected ? '#01CBD2' : '#CCC', background: selected ? '#01CBD2' : 'white' }}
          >
            {selected && <Check size={12} color="white" strokeWidth={3} />}
          </div>
        )}

        {/* Avatar */}
        <div className="relative shrink-0">
          <img src={chat.avatar} alt={chat.name} className="w-[54px] h-[54px] rounded-full object-cover" />
          {chat.online && (
            <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#0ED221] rounded-full border-2 border-white" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[#050B2E]" style={{ fontSize: '16px', fontWeight: 600 }}>{chat.name}</span>
            {chat.verified && <VerifiedBadge />}
          </div>
          <p className="text-[#01CBD2]" style={{ fontSize: '12px' }}>{chat.role}</p>
          <div className="flex items-center gap-1 mt-0.5">
            {chat.isOwn && (
              <CheckCheck size={13} color={chat.unread === 0 ? '#01CBD2' : '#A6A6A6'} />
            )}
            <MsgTypeIcon type={chat.lastMessageType} />
            <span
              className="text-[#A6A6A6] truncate"
              style={{ fontSize: '13px', color: chat.unread > 0 && !chat.isOwn ? '#050B2E' : '#A6A6A6' }}
            >
              {chat.lastMessageType === 'voice' ? chat.lastMessageDuration || chat.lastMessage : chat.lastMessage}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span
            style={{ fontSize: '12px', color: chat.unread > 0 ? '#01CBD2' : '#A6A6A6', fontWeight: chat.unread > 0 ? 600 : 400 }}
          >
            {chat.time}
          </span>
          {chat.unread > 0 && (
            <div className="w-5 h-5 rounded-full bg-[#01CBD2] flex items-center justify-center">
              <span className="text-white" style={{ fontSize: '11px', fontWeight: 700 }}>{chat.unread}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ChatList() {
  const navigate = useNavigate();
  const { userType } = useApp();
  const base = userType === 'agent' ? '/agent' : '/investor';

  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [search, setSearch] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [showCreateLabel, setShowCreateLabel] = useState(false);

  const filtered = CHATS.filter(c =>
    !search || c.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (id: string) =>
    setSelectedIds(p => p.includes(id) ? p.filter(i => i !== id) : [...p, id]);

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <StatusBar />

      {/* Header */}
      <div className="relative flex items-center px-3 h-14 gap-2">
        <button
          onClick={() => selectionMode ? setSelectionMode(false) : navigate(-1)}
          className="w-9 h-9 rounded-full border border-[#E8E8E8] flex items-center justify-center shrink-0"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M7 1L1 7L7 13" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex-1 flex items-center bg-[#F8F8F8] rounded-full h-10 px-4 gap-2">
          <Search size={15} color="#CCC" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-[#050B2E]"
            style={{ fontSize: '14px' }}
          />
        </div>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-9 h-9 rounded-full border border-[#E8E8E8] flex items-center justify-center shrink-0"
        >
          <MoreHorizontal size={18} color="#050B2E" />
        </button>

        {showMenu && (
          <MenuDropdown
            onClose={() => setShowMenu(false)}
            showArchive={showArchive}
            onToggleArchive={() => setShowArchive(!showArchive)}
            showLabels={showLabels}
            onToggleLabels={() => setShowLabels(!showLabels)}
            onSelectChat={() => setSelectionMode(true)}
            onSelectAll={() => { setSelectionMode(true); setSelectedIds(CHATS.map(c => c.id)); }}
          />
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#F8F8F8]">
        {(['All', 'Deals Completed'] as FilterTab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="rounded-full px-3 py-1.5 transition-all"
            style={{
              background: activeTab === tab ? '#01CBD2' : '#F0F0F0',
              fontSize: '13px',
              fontWeight: activeTab === tab ? 600 : 400,
              color: activeTab === tab ? 'white' : '#050B2E',
            }}
          >
            {tab}
          </button>
        ))}
        <button
          onClick={() => setShowCreateLabel(true)}
          className="w-8 h-8 rounded-full bg-[#F0F0F0] flex items-center justify-center"
        >
          <Plus size={16} color="#050B2E" />
        </button>
      </div>

      {/* Selection mode actions */}
      {selectionMode && selectedIds.length > 0 && (
        <div className="bg-[#F8F8F8] px-4 py-2 flex items-center justify-between border-b border-[#F0F0F0]">
          <span style={{ fontSize: '14px', color: '#050B2E' }}>
            {selectedIds.length} selected
          </span>
          <div className="flex gap-3">
            <button className="text-[#01CBD2]" style={{ fontSize: '14px', fontWeight: 600 }}>
              Mark read
            </button>
            <button className="text-[#E31D1C]" style={{ fontSize: '14px', fontWeight: 600 }}>
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto" onClick={() => showMenu && setShowMenu(false)}>
        {filtered.map(chat => (
          <ChatRow
            key={chat.id}
            chat={chat}
            onPress={() => navigate(`${base}/chat/${chat.id}`)}
            selected={selectedIds.includes(chat.id)}
            selectionMode={selectionMode}
            onToggleSelect={() => toggleSelect(chat.id)}
          />
        ))}

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-[#F0FBFB] rounded-full flex items-center justify-center mb-4">
              <Search size={28} color="#01CBD2" />
            </div>
            <p className="text-[#050B2E]" style={{ fontSize: '16px', fontWeight: 600 }}>No chats found</p>
            <p className="text-[#A6A6A6]" style={{ fontSize: '14px' }}>Try a different search</p>
          </div>
        )}
      </div>

      {showCreateLabel && <CreateLabelSheet onClose={() => setShowCreateLabel(false)} />}

      <BottomNav userType={userType === 'agent' ? 'agent' : 'investor'} />
    </div>
  );
}
