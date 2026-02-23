import { createBrowserRouter, Outlet } from 'react-router';
import SplashScreen from './components/auth/SplashScreen';
import AuthScreen from './components/auth/AuthScreen';
import AgentFeed from './components/agent/AgentFeed';
import RequestDetails from './components/agent/RequestDetails';
import SubmitOffer from './components/agent/SubmitOffer';
import AgentOffers from './components/agent/AgentOffers';
import AgentProfilePage from './components/agent/AgentProfilePage';
import AgentVerification from './components/agent/AgentVerification';
import PlansPage from './components/agent/PlansPage';
import PaymentPage from './components/agent/PaymentPage';
import MySubscription from './components/agent/MySubscription';
import AgentFavourites from './components/agent/AgentFavourites';
import OfferSentPage from './components/agent/OfferSentPage';
import CommentsPage from './components/agent/CommentsPage';
import InvestorHome from './components/investor/InvestorHome';
import InvestorDashboard from './components/investor/InvestorDashboard';
import AddRequest from './components/investor/AddRequest';
import MyRequests from './components/investor/MyRequests';
import OffersList from './components/investor/OffersList';
import InvestorProfile from './components/investor/InvestorProfile';
import InvestorFavourites from './components/investor/InvestorFavourites';
import AgentProfileView from './components/investor/AgentProfileView';
import AgentsListPage from './components/investor/AgentsListPage';
import ChatScreen from './components/shared/ChatScreen';
import ChatList from './components/shared/ChatList';
import DealConfirmation from './components/shared/DealConfirmation';
import ProfileSettings from './components/shared/ProfileSettings';
import EditProfile from './components/shared/EditProfile';
import DeleteAccount from './components/shared/DeleteAccount';
import LanguageSettings from './components/shared/LanguageSettings';
import AppSettings from './components/shared/AppSettings';
import FaqPage from './components/shared/FaqPage';
import SupportPage from './components/shared/SupportPage';
import NotificationsPage from './components/shared/NotificationsPage';
import DuseatVerified from './components/shared/DuseatVerified';
import SystemSettings from './components/shared/SystemSettings';

function Root() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: SplashScreen },
      { path: 'auth', Component: AuthScreen },

      // ─── Agent routes ───────────────────────────────────
      { path: 'agent', Component: AgentFeed },
      { path: 'agent/request/:id', Component: RequestDetails },
      { path: 'agent/submit-offer/:requestId', Component: SubmitOffer },
      { path: 'agent/submit-offer', Component: SubmitOffer },
      { path: 'agent/offer-sent/:requestId', Component: OfferSentPage },
      { path: 'agent/my-offers', Component: AgentOffers },
      { path: 'agent/chats', Component: ChatList },
      { path: 'agent/chat', Component: ChatScreen },
      { path: 'agent/chat/:chatId', Component: ChatScreen },
      { path: 'agent/profile', Component: AgentProfilePage },
      { path: 'agent/verification', Component: AgentVerification },
      { path: 'agent/plans', Component: PlansPage },
      { path: 'agent/payment/:planId/:billing', Component: PaymentPage },
      { path: 'agent/payment/:planId', Component: PaymentPage },
      { path: 'agent/subscription', Component: MySubscription },
      { path: 'agent/favourites', Component: AgentFavourites },
      // Agent Settings group
      { path: 'agent/settings', Component: ProfileSettings },
      { path: 'agent/edit-profile', Component: EditProfile },
      { path: 'agent/delete-account', Component: DeleteAccount },
      { path: 'agent/languages', Component: LanguageSettings },
      { path: 'agent/app-settings', Component: AppSettings },
      { path: 'agent/faq', Component: FaqPage },
      { path: 'agent/support', Component: SupportPage },
      { path: 'agent/notifications', Component: NotificationsPage },
      { path: 'agent/comments/:requestId', Component: CommentsPage },
      { path: 'agent/verified', Component: DuseatVerified },
      { path: 'agent/system', Component: SystemSettings },

      // ─── Investor routes ─────────────────────────────────
      { path: 'investor', Component: InvestorHome },
      { path: 'investor/activity', Component: InvestorDashboard },
      { path: 'investor/add-request', Component: AddRequest },
      { path: 'investor/my-requests', Component: MyRequests },
      { path: 'investor/offers/:requestId', Component: OffersList },
      { path: 'investor/chats', Component: ChatList },
      { path: 'investor/chat', Component: ChatScreen },
      { path: 'investor/chat/:chatId', Component: ChatScreen },
      { path: 'investor/profile', Component: InvestorProfile },
      { path: 'investor/favourites', Component: InvestorFavourites },
      { path: 'investor/agents', Component: AgentsListPage },
      { path: 'investor/agent/:agentId', Component: AgentProfileView },
      { path: 'investor/edit-request/:requestId', Component: AddRequest },
      // Investor Settings group
      { path: 'investor/settings', Component: ProfileSettings },
      { path: 'investor/edit-profile', Component: EditProfile },
      { path: 'investor/delete-account', Component: DeleteAccount },
      { path: 'investor/languages', Component: LanguageSettings },
      { path: 'investor/app-settings', Component: AppSettings },
      { path: 'investor/faq', Component: FaqPage },
      { path: 'investor/support', Component: SupportPage },
      { path: 'investor/notifications', Component: NotificationsPage },
      { path: 'investor/verified', Component: DuseatVerified },
      { path: 'investor/system', Component: SystemSettings },

      // ─── Shared ──────────────────────────────────────────
      { path: 'deal/:id', Component: DealConfirmation },
    ],
  },
]);
