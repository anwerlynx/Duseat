import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
    ChevronLeft,
    Heart,
    MessageCircle,
    Send,
    Smile,
    MoreHorizontal,
    Clock,
    MapPin,
    Image as ImageIcon,
    Video,
    Paperclip,
    X,
    Play,
    FileText,
    Copy,
    Flag,
    Trash2,
    Share2,
} from 'lucide-react';
import { StatusBar } from '../StatusBar';
import { MOCK_REQUESTS, MOCK_COMMENTS, Comment } from '../MockData';

/* ─────────────────────────────── constants ─────────────────────────────── */

const CURRENT_USER_AVATAR =
    'https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200';
const CURRENT_USER_NAME = 'Mohamed Salah';
const EMOJIS = ['👍', '🔥', '💯', '🏠', '✅', '😊', '🤝', '💰', '📍', '⭐'];

const MOCK_LOCATIONS = [
    { id: 'loc1', name: 'Downtown Dubai', area: 'Dubai, UAE', emoji: '🏙️' },
    { id: 'loc2', name: 'Al Barsha', area: 'Dubai, UAE', emoji: '🌆' },
    { id: 'loc3', name: 'Palm Jumeirah', area: 'Dubai, UAE', emoji: '🌴' },
    { id: 'loc4', name: 'Business Bay', area: 'Dubai, UAE', emoji: '🏢' },
    { id: 'loc5', name: 'Jumeirah Golf Estates', area: 'Dubai, UAE', emoji: '⛳' },
    { id: 'loc6', name: 'Dubai Marina', area: 'Dubai, UAE', emoji: '⛵' },
    { id: 'loc7', name: 'DIFC', area: 'Dubai, UAE', emoji: '🏦' },
    { id: 'loc8', name: 'Jumeirah Village Circle', area: 'Dubai, UAE', emoji: '🏘️' },
];

/* ─────────────────────────────── types ────────────────────────────────── */

interface AttachmentMeta {
    type: 'image' | 'video' | 'file' | 'location';
    url?: string;           // object url for media
    fileName?: string;      // for file type
    fileSize?: string;      // for file type
    locationName?: string;  // for location type
    locationArea?: string;  // for location type
    locationEmoji?: string; // for location type
}

/* ─────────────────────────── helper components ─────────────────────────── */

function VerifiedBadge({ size = 14 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
            <path
                d="M8 0L9.8 1.6L12.2 1.1L13 3.4L15.3 4.2L14.8 6.6L16 8.7L14.2 10.3L14.2 12.7L11.8 13.3L10.5 15.3L8 14.6L5.5 15.3L4.2 13.3L1.8 12.7L1.8 10.3L0 8.7L1.2 6.6L0.7 4.2L3 3.4L3.8 1.1L6.2 1.6L8 0Z"
                fill="#01CBD2"
            />
            <path
                d="M5.5 8L7 9.5L10.5 6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/** Renders any attachment inside a comment bubble */
function AttachmentView({ att }: { att: AttachmentMeta }) {
    if (att.type === 'location') {
        return (
            <div
                className="mt-2 flex items-center gap-2 rounded-[10px] px-3 py-2"
                style={{ background: 'rgba(1,203,210,0.08)', border: '1px solid rgba(1,203,210,0.18)' }}
            >
                <MapPin size={14} color="#01CBD2" />
                <div>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: '#050B2E' }}>{att.locationName}</p>
                    <p style={{ fontSize: '10px', color: '#A6A6A6' }}>{att.locationArea}</p>
                </div>
            </div>
        );
    }

    if (att.type === 'image') {
        return (
            <div className="mt-2 rounded-[10px] overflow-hidden" style={{ maxHeight: 180 }}>
                <img src={att.url} alt="attachment" className="w-full object-cover" style={{ maxHeight: 180 }} />
            </div>
        );
    }

    if (att.type === 'video') {
        return (
            <div className="mt-2 rounded-[10px] overflow-hidden relative bg-black" style={{ height: 120 }}>
                <video src={att.url} className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,255,255,0.9)' }}
                    >
                        <Play size={18} color="#050B2E" fill="#050B2E" />
                    </div>
                </div>
            </div>
        );
    }

    if (att.type === 'file') {
        return (
            <div
                className="mt-2 flex items-center gap-2 rounded-[10px] px-3 py-2"
                style={{ background: 'rgba(5,11,46,0.04)', border: '1px solid rgba(5,11,46,0.08)' }}
            >
                <div
                    className="w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0"
                    style={{ background: '#01CBD2' }}
                >
                    <FileText size={16} color="white" />
                </div>
                <div className="min-w-0">
                    <p className="truncate" style={{ fontSize: '12px', fontWeight: 600, color: '#050B2E' }}>
                        {att.fileName}
                    </p>
                    <p style={{ fontSize: '10px', color: '#A6A6A6' }}>{att.fileSize}</p>
                </div>
            </div>
        );
    }

    return null;
}

/* ─────────────────────────────── CommentItem ───────────────────────────── */

function CommentItem({
    comment,
    isReply = false,
    onReply,
    onLike,
}: {
    comment: Comment & { attachments?: AttachmentMeta[] };
    isReply?: boolean;
    onReply: (comment: Comment) => void;
    onLike: (id: string) => void;
}) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div
            className={`flex gap-2.5 ${isReply ? 'pl-10 mt-2' : 'mt-4'}`}
            style={{ animation: 'fadeIn 0.25s ease' }}
        >
            {/* Avatar */}
            <div className="relative shrink-0">
                <img
                    src={comment.authorAvatar}
                    alt={comment.authorName}
                    className={`rounded-full object-cover ${isReply ? 'w-7 h-7' : 'w-9 h-9'}`}
                />
                <div
                    className="absolute -bottom-0.5 -right-0.5 rounded-full flex items-center justify-center"
                    style={{
                        width: isReply ? 12 : 14,
                        height: isReply ? 12 : 14,
                        background: comment.authorRole === 'agent' ? '#050B2E' : '#01CBD2',
                    }}
                >
                    <span style={{ fontSize: 7, color: 'white', fontWeight: 700 }}>
                        {comment.authorRole === 'agent' ? 'A' : 'I'}
                    </span>
                </div>
            </div>

            {/* Content bubble */}
            <div className="flex-1 min-w-0">
                <div
                    className="rounded-[14px] px-3 py-2.5"
                    style={{
                        background: isReply ? '#F0FFFE' : '#F8F8F8',
                        border: isReply ? '1px solid rgba(1,203,210,0.15)' : 'none',
                    }}
                >
                    {/* Author row */}
                    <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[#050B2E]" style={{ fontSize: isReply ? '12px' : '13px', fontWeight: 600 }}>
                            {comment.authorName}
                        </span>
                        {comment.authorVerified && <VerifiedBadge size={isReply ? 11 : 13} />}
                        <span
                            className="rounded-full px-1.5 py-0.5"
                            style={{
                                fontSize: '9px',
                                fontWeight: 600,
                                background: comment.authorRole === 'agent' ? 'rgba(5,11,46,0.07)' : 'rgba(1,203,210,0.1)',
                                color: comment.authorRole === 'agent' ? '#050B2E' : '#01CBD2',
                            }}
                        >
                            {comment.authorRole === 'agent' ? 'Agent' : 'Investor'}
                        </span>
                    </div>

                    {/* Comment text */}
                    {comment.text && (
                        <p className="text-[#333]" style={{ fontSize: isReply ? '12px' : '13px', lineHeight: 1.5 }}>
                            {comment.text}
                        </p>
                    )}

                    {/* Attachments */}
                    {(comment as any).attachments?.map((att: AttachmentMeta, i: number) => (
                        <AttachmentView key={i} att={att} />
                    ))}
                </div>

                {/* Actions row */}
                <div className="flex items-center gap-3 mt-1 pl-1">
                    <div className="flex items-center gap-0.5">
                        <Clock size={9} color="#CCC" />
                        <span style={{ fontSize: '10px', color: '#CCC' }}>{comment.createdAt}</span>
                    </div>

                    <button
                        onClick={() => onLike(comment.id)}
                        className="flex items-center gap-1"
                    >
                        <Heart
                            size={12}
                            color={comment.liked ? '#E31D1C' : '#CCC'}
                            fill={comment.liked ? '#E31D1C' : 'none'}
                            style={{ transition: 'all 0.2s' }}
                        />
                        {comment.likesCount > 0 && (
                            <span
                                style={{
                                    fontSize: '10px',
                                    color: comment.liked ? '#E31D1C' : '#CCC',
                                    fontWeight: comment.liked ? 600 : 400,
                                    transition: 'all 0.2s',
                                }}
                            >
                                {comment.likesCount}
                            </span>
                        )}
                    </button>

                    {!isReply && (
                        <button onClick={() => onReply(comment)} className="flex items-center gap-1">
                            <MessageCircle size={11} color="#CCC" />
                            <span style={{ fontSize: '10px', color: '#CCC' }}>Reply</span>
                        </button>
                    )}

                    <button className="ml-auto relative" onClick={() => setShowMore(!showMore)}>
                        <MoreHorizontal size={14} color={showMore ? '#01CBD2' : '#CCC'} />
                        {showMore && (
                            <div
                                className="absolute right-0 bottom-6 bg-white rounded-[14px] overflow-hidden"
                                style={{
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                    minWidth: 160,
                                    zIndex: 20,
                                    animation: 'fadeIn 0.15s ease',
                                }}
                            >
                                <button
                                    className="w-full flex items-center gap-2.5 px-4 py-3 border-b border-[#F8F8F8] hover:bg-[#F8F8F8]"
                                    onClick={(e) => { e.stopPropagation(); navigator.clipboard?.writeText(comment.text || ''); setShowMore(false); }}
                                >
                                    <Copy size={14} color="#050B2E" />
                                    <span style={{ fontSize: '13px', color: '#050B2E' }}>Copy text</span>
                                </button>
                                <button
                                    className="w-full flex items-center gap-2.5 px-4 py-3 border-b border-[#F8F8F8] hover:bg-[#F8F8F8]"
                                    onClick={(e) => { e.stopPropagation(); setShowMore(false); }}
                                >
                                    <Share2 size={14} color="#050B2E" />
                                    <span style={{ fontSize: '13px', color: '#050B2E' }}>Share</span>
                                </button>
                                <button
                                    className="w-full flex items-center gap-2.5 px-4 py-3 border-b border-[#F8F8F8] hover:bg-[#F8F8F8]"
                                    onClick={(e) => { e.stopPropagation(); setShowMore(false); }}
                                >
                                    <Flag size={14} color="#E31D1C" />
                                    <span style={{ fontSize: '13px', color: '#E31D1C' }}>Report</span>
                                </button>
                                <button
                                    className="w-full flex items-center gap-2.5 px-4 py-3 hover:bg-[#FFF5F5]"
                                    onClick={(e) => { e.stopPropagation(); setShowMore(false); }}
                                >
                                    <Trash2 size={14} color="#E31D1C" />
                                    <span style={{ fontSize: '13px', color: '#E31D1C' }}>Delete</span>
                                </button>
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────── Location Picker ───────────────────────────── */

function LocationPicker({
    onSelect,
    onClose,
}: {
    onSelect: (loc: typeof MOCK_LOCATIONS[0]) => void;
    onClose: () => void;
}) {
    const [query, setQuery] = useState('');
    const filtered = MOCK_LOCATIONS.filter(
        (l) =>
            l.name.toLowerCase().includes(query.toLowerCase()) ||
            l.area.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div
            className="absolute left-0 right-0 bg-white rounded-t-[20px] z-30"
            style={{
                bottom: 0,
                boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
                animation: 'slideUp 0.25s ease',
                maxHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Handle */}
            <div className="w-10 h-1 bg-[#E0E0E0] rounded-full mx-auto mt-3 mb-3" />

            {/* Header */}
            <div className="flex items-center justify-between px-4 mb-3">
                <div className="flex items-center gap-2">
                    <MapPin size={18} color="#01CBD2" />
                    <p style={{ fontSize: '16px', fontWeight: 700, color: '#050B2E' }}>Add Location</p>
                </div>
                <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center"
                >
                    <X size={16} color="#999" />
                </button>
            </div>

            {/* Search */}
            <div className="mx-4 mb-3 flex items-center gap-2 bg-[#F8F8F8] rounded-full h-10 px-4">
                <MapPin size={14} color="#CCC" />
                <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search location..."
                    className="flex-1 bg-transparent outline-none text-[#050B2E]"
                    style={{ fontSize: '13px' }}
                />
                {query && (
                    <button onClick={() => setQuery('')}>
                        <X size={13} color="#CCC" />
                    </button>
                )}
            </div>

            {/* Location list */}
            <div className="overflow-y-auto flex-1 px-4 pb-6">
                {filtered.map((loc) => (
                    <button
                        key={loc.id}
                        onClick={() => onSelect(loc)}
                        className="w-full flex items-center gap-3 py-3 border-b border-[#F8F8F8] last:border-0 text-left"
                    >
                        <div
                            className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(1,203,210,0.08)', fontSize: '20px' }}
                        >
                            {loc.emoji}
                        </div>
                        <div>
                            <p style={{ fontSize: '14px', fontWeight: 600, color: '#050B2E' }}>{loc.name}</p>
                            <p style={{ fontSize: '11px', color: '#A6A6A6' }}>{loc.area}</p>
                        </div>
                        <MapPin size={14} color="#CCC" className="ml-auto" />
                    </button>
                ))}
                {filtered.length === 0 && (
                    <p className="text-center py-8" style={{ fontSize: '13px', color: '#CCC' }}>
                        No locations found
                    </p>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────────── Attachment Tray ───────────────────────────── */

function AttachmentTray({
    onLocation,
    onImage,
    onVideo,
    onFile,
    onClose,
}: {
    onLocation: () => void;
    onImage: () => void;
    onVideo: () => void;
    onFile: () => void;
    onClose: () => void;
}) {
    const items = [
        { icon: MapPin, label: 'Location', color: '#01CBD2', bg: 'rgba(1,203,210,0.1)', action: onLocation },
        { icon: ImageIcon, label: 'Photo', color: '#4CAF50', bg: 'rgba(76,175,80,0.1)', action: onImage },
        { icon: Video, label: 'Video', color: '#9C27B0', bg: 'rgba(156,39,176,0.1)', action: onVideo },
        { icon: Paperclip, label: 'File', color: '#FF9800', bg: 'rgba(255,152,0,0.1)', action: onFile },
    ];

    return (
        <>
            {/* Backdrop */}
            <div
                className="absolute inset-0 z-20"
                style={{ background: 'rgba(0,0,0,0.04)' }}
                onClick={onClose}
            />
            {/* Tray */}
            <div
                className="absolute left-4 right-4 bg-white rounded-[18px] px-4 py-4"
                style={{
                    bottom: 78,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
                    animation: 'slideUp 0.2s ease',
                    zIndex: 25,
                }}
            >
                <div className="flex items-center justify-between mb-3">
                    <p style={{ fontSize: '13px', fontWeight: 600, color: '#050B2E' }}>Add to comment</p>
                    <button onClick={onClose}>
                        <X size={16} color="#CCC" />
                    </button>
                </div>
                <div className="flex gap-3">
                    {items.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => { item.action(); onClose(); }}
                            className="flex-1 flex flex-col items-center gap-2 py-3 rounded-[14px] transition-all active:scale-95"
                            style={{ background: item.bg }}
                        >
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ background: 'white', boxShadow: `0 2px 8px ${item.bg}` }}
                            >
                                <item.icon size={18} color={item.color} />
                            </div>
                            <span style={{ fontSize: '11px', fontWeight: 600, color: item.color }}>
                                {item.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

/* ─────────────────────────── Preview chips ────────────────────────────── */

function AttachmentPreviewChip({
    att,
    onRemove,
}: {
    att: AttachmentMeta;
    onRemove: () => void;
}) {
    const iconColor = att.type === 'location' ? '#01CBD2'
        : att.type === 'image' ? '#4CAF50'
            : att.type === 'video' ? '#9C27B0'
                : '#FF9800';

    const label =
        att.type === 'location' ? att.locationName!
            : att.type === 'image' ? 'Photo'
                : att.type === 'video' ? 'Video'
                    : att.fileName!;

    const Icon = att.type === 'location' ? MapPin
        : att.type === 'image' ? ImageIcon
            : att.type === 'video' ? Video
                : Paperclip;

    return (
        <div
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 shrink-0"
            style={{ background: `${iconColor}18`, border: `1px solid ${iconColor}33` }}
        >
            {att.type === 'image' && att.url ? (
                <img src={att.url} alt="" className="w-4 h-4 rounded-full object-cover" />
            ) : (
                <Icon size={12} color={iconColor} />
            )}
            <span className="truncate" style={{ fontSize: '11px', fontWeight: 600, color: iconColor, maxWidth: 80 }}>
                {label}
            </span>
            <button onClick={onRemove}>
                <X size={10} color={iconColor} />
            </button>
        </div>
    );
}

/* ─────────────────────────── Main Page ────────────────────────── */

export default function CommentsPage() {
    const navigate = useNavigate();
    const { requestId } = useParams();

    const req = MOCK_REQUESTS.find((r) => r.id === requestId) || MOCK_REQUESTS[0];
    const [comments, setComments] = useState<(Comment & { attachments?: AttachmentMeta[] })[]>(
        MOCK_COMMENTS[req.id] || []
    );

    const [inputText, setInputText] = useState('');
    const [replyingTo, setReplyingTo] = useState<Comment | null>(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showAttachTray, setShowAttachTray] = useState(false);
    const [showLocationPicker, setShowLocationPicker] = useState(false);
    const [pendingAttachments, setPendingAttachments] = useState<AttachmentMeta[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (replyingTo) inputRef.current?.focus();
    }, [replyingTo]);

    /* ── attachment handlers ── */
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setPendingAttachments((p) => [...p, { type: 'image', url, fileName: file.name }]);
        e.target.value = '';
    };

    const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setPendingAttachments((p) => [...p, { type: 'video', url, fileName: file.name }]);
        e.target.value = '';
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const mb = (file.size / 1024 / 1024).toFixed(1);
        setPendingAttachments((p) => [
            ...p,
            { type: 'file', fileName: file.name, fileSize: `${mb} MB` },
        ]);
        e.target.value = '';
    };

    const handleLocationSelect = (loc: typeof MOCK_LOCATIONS[0]) => {
        setPendingAttachments((p) => [
            ...p,
            {
                type: 'location',
                locationName: loc.name,
                locationArea: loc.area,
                locationEmoji: loc.emoji,
            },
        ]);
        setShowLocationPicker(false);
    };

    /* ── like handler ── */
    const handleLike = (commentId: string) => {
        setComments((prev) =>
            prev.map((c) => {
                if (c.id === commentId)
                    return { ...c, liked: !c.liked, likesCount: c.liked ? c.likesCount - 1 : c.likesCount + 1 };
                if (c.replies)
                    return {
                        ...c,
                        replies: c.replies.map((r) =>
                            r.id === commentId
                                ? { ...r, liked: !r.liked, likesCount: r.liked ? r.likesCount - 1 : r.likesCount + 1 }
                                : r
                        ),
                    };
                return c;
            })
        );
    };

    /* ── send handler ── */
    const handleSend = () => {
        const text = inputText.trim();
        if (!text && pendingAttachments.length === 0) return;

        const newComment: Comment & { attachments?: AttachmentMeta[] } = {
            id: `new-${Date.now()}`,
            requestId: req.id,
            authorId: 'current-user',
            authorName: CURRENT_USER_NAME,
            authorAvatar: CURRENT_USER_AVATAR,
            authorVerified: true,
            authorRole: 'agent',
            text,
            createdAt: 'Just now',
            likesCount: 0,
            liked: false,
            replies: [],
            attachments: pendingAttachments.length > 0 ? [...pendingAttachments] : undefined,
        };

        if (replyingTo) {
            setComments((prev) =>
                prev.map((c) =>
                    c.id === replyingTo.id ? { ...c, replies: [...(c.replies || []), newComment] } : c
                )
            );
            setReplyingTo(null);
        } else {
            setComments((prev) => [newComment, ...prev]);
        }

        setInputText('');
        setPendingAttachments([]);
        setShowEmojiPicker(false);
        setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    };

    const totalCount = comments.reduce((acc, c) => acc + 1 + (c.replies?.length || 0), 0);
    const hasContent = inputText.trim().length > 0 || pendingAttachments.length > 0;

    /* ─── input bar bottom padding ─── */
    const hasPending = pendingAttachments.length > 0;

    return (
        <div className="min-h-screen bg-[#F8F8F8] flex flex-col" style={{ position: 'relative' }}>

            {/* ── Header ── */}
            <div className="bg-white shrink-0" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <StatusBar />
                <div className="flex items-center px-4 h-14">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ boxShadow: 'inset 0 -1px 4px #00a2a8, inset 0 4px 4px rgba(255,255,255,0.25)' }}
                    >
                        <ChevronLeft size={18} color="#333" />
                    </button>
                    <div className="flex-1 text-center">
                        <p className="text-[#050B2E]" style={{ fontSize: '17px', fontWeight: 700 }}>Comments</p>
                        <p style={{ fontSize: '11px', color: '#A6A6A6' }}>
                            {totalCount} comment{totalCount !== 1 ? 's' : ''}
                        </p>
                    </div>
                    <div className="w-9 h-9" />
                </div>
            </div>

            {/* ── Request mini-card ── */}
            <div
                className="mx-4 mt-3 bg-white rounded-[14px] p-3 flex items-start gap-3"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
            >
                <img src={req.investorAvatar} alt={req.investorName} className="w-9 h-9 rounded-full object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-[#050B2E]" style={{ fontSize: '13px', fontWeight: 600 }}>
                            {req.investorName}
                        </span>
                        {req.investorVerified && <VerifiedBadge size={12} />}
                    </div>
                    <p style={{ fontSize: '12px', lineHeight: 1.4, color: '#666', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {req.title}
                    </p>
                </div>
                <div className="flex items-center gap-1 bg-[rgba(1,203,210,0.08)] rounded-full px-2 py-1 shrink-0">
                    <MessageCircle size={11} color="#01CBD2" />
                    <span style={{ fontSize: '11px', color: '#01CBD2', fontWeight: 600 }}>{totalCount}</span>
                </div>
            </div>

            {/* ── Comments list ── */}
            <div className="flex-1 overflow-y-auto px-4 pt-1" style={{ paddingBottom: hasPending ? 140 : 110 }}>
                {comments.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 gap-3">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(1,203,210,0.08)' }}>
                            <MessageCircle size={30} color="#01CBD2" />
                        </div>
                        <p className="text-[#A6A6A6]" style={{ fontSize: '14px' }}>No comments yet. Be the first!</p>
                    </div>
                ) : (
                    <>
                        {comments.map((comment) => (
                            <div key={comment.id}>
                                <CommentItem comment={comment} onReply={setReplyingTo} onLike={handleLike} />
                                {comment.replies && comment.replies.length > 0 && (
                                    <div>
                                        {comment.replies.map((reply) => (
                                            <CommentItem
                                                key={reply.id}
                                                comment={reply}
                                                isReply
                                                onReply={setReplyingTo}
                                                onLike={handleLike}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )}
                <div ref={bottomRef} />
            </div>

            {/* ── Overlays ── */}

            {/* Emoji picker */}
            {showEmojiPicker && (
                <div
                    className="absolute left-4 right-4 bg-white rounded-[16px] px-4 py-3 flex flex-wrap gap-2"
                    style={{ bottom: hasPending ? 152 : 86, boxShadow: '0 4px 20px rgba(0,0,0,0.12)', animation: 'slideUp 0.2s ease', zIndex: 22 }}
                >
                    {EMOJIS.map((emoji) => (
                        <button
                            key={emoji}
                            onClick={() => { setInputText((p) => p + emoji); setShowEmojiPicker(false); inputRef.current?.focus(); }}
                            className="text-2xl"
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
            )}

            {/* Attachment tray */}
            {showAttachTray && (
                <AttachmentTray
                    onLocation={() => setShowLocationPicker(true)}
                    onImage={() => imageInputRef.current?.click()}
                    onVideo={() => videoInputRef.current?.click()}
                    onFile={() => fileInputRef.current?.click()}
                    onClose={() => setShowAttachTray(false)}
                />
            )}

            {/* Location picker */}
            {showLocationPicker && (
                <>
                    <div
                        className="absolute inset-0 z-30"
                        style={{ background: 'rgba(0,0,0,0.35)' }}
                        onClick={() => setShowLocationPicker(false)}
                    />
                    <LocationPicker
                        onSelect={handleLocationSelect}
                        onClose={() => setShowLocationPicker(false)}
                    />
                </>
            )}

            {/* Hidden file inputs */}
            <input ref={imageInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            <input ref={videoInputRef} type="file" accept="video/*" className="hidden" onChange={handleVideoChange} />
            <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} />

            {/* ── Input bar ── */}
            <div
                className="absolute bottom-0 left-0 right-0 bg-white px-4 pt-2 pb-4"
                style={{ boxShadow: '0 -1px 8px rgba(0,0,0,0.07)', zIndex: 21 }}
            >
                {/* Reply-to banner */}
                {replyingTo && (
                    <div
                        className="flex items-center justify-between mb-2 px-3 py-1.5 rounded-[10px]"
                        style={{ background: 'rgba(1,203,210,0.06)', borderLeft: '3px solid #01CBD2' }}
                    >
                        <div>
                            <p style={{ fontSize: '10px', color: '#01CBD2', fontWeight: 600 }}>
                                Replying to {replyingTo.authorName}
                            </p>
                            <p className="truncate" style={{ fontSize: '11px', color: '#666', maxWidth: 220 }}>
                                {replyingTo.text}
                            </p>
                        </div>
                        <button onClick={() => setReplyingTo(null)}>
                            <span style={{ fontSize: '18px', color: '#CCC', lineHeight: 1 }}>×</span>
                        </button>
                    </div>
                )}

                {/* Pending attachments preview row */}
                {hasPending && (
                    <div
                        className="flex gap-2 mb-2 overflow-x-auto no-scrollbar py-1"
                        style={{ animation: 'slideUp 0.2s ease' }}
                    >
                        {pendingAttachments.map((att, i) => (
                            <AttachmentPreviewChip
                                key={i}
                                att={att}
                                onRemove={() => setPendingAttachments((p) => p.filter((_, idx) => idx !== i))}
                            />
                        ))}
                    </div>
                )}

                {/* Input row */}
                <div className="flex items-center gap-2">
                    <img src={CURRENT_USER_AVATAR} alt="Me" className="w-8 h-8 rounded-full object-cover shrink-0" />

                    {/* Attachment button */}
                    <button
                        onClick={() => { setShowAttachTray((p) => !p); setShowEmojiPicker(false); }}
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all"
                        style={{ background: showAttachTray ? 'rgba(1,203,210,0.1)' : '#F8F8F8' }}
                    >
                        <Paperclip size={16} color={showAttachTray ? '#01CBD2' : '#999'} />
                    </button>

                    {/* Text input */}
                    <div
                        className="flex-1 flex items-center gap-2 rounded-full px-3"
                        style={{
                            background: '#F8F8F8',
                            border: '1.5px solid',
                            borderColor: replyingTo ? '#01CBD2' : '#F0F0F0',
                            height: 42,
                            transition: 'border-color 0.2s',
                        }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                            placeholder={replyingTo ? `Reply to ${replyingTo.authorName}...` : 'Write a comment...'}
                            className="flex-1 bg-transparent outline-none text-[#050B2E]"
                            style={{ fontSize: '13px' }}
                        />
                        <button
                            onClick={() => { setShowEmojiPicker((p) => !p); setShowAttachTray(false); }}
                            className="shrink-0"
                        >
                            <Smile size={18} color={showEmojiPicker ? '#01CBD2' : '#CCC'} />
                        </button>
                    </div>

                    {/* Send button */}
                    <button
                        onClick={handleSend}
                        disabled={!hasContent}
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: hasContent ? '#01CBD2' : '#F0F0F0', transition: 'background 0.2s' }}
                    >
                        <Send size={16} color={hasContent ? 'white' : '#CCC'} />
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div>
    );
}
