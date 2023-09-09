import { VerticalNavItemsType } from '@/@core/layouts/types'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {
  Login,
  Table,
  CubeOutline,
  HomeOutline,
  FormatLetterCase,
  AccountCogOutline,
  CreditCardOutline,
  AccountPlusOutline,
  AlertCircleOutline,
  GoogleCirclesExtended,
  BookmarkRemove,
} from 'mdi-material-ui'
import {
  ManageAccounts,
  Key,
  AccountBalanceWallet,
  LockReset,
  History,
  VerifiedUser,
  Fingerprint,
  FormatColorFill,
  AccountTree,
  GroupWork,
  Assessment,
  East,
  ForkRight,
  EmojiEvents,
  Payment,
  AddCard,
  AttachMoney,
  AddLink,
  CancelPresentation,
  ConfirmationNumber,
  ForwardToInbox,
  Unarchive,
} from '@mui/icons-material'
import {
  faDollarSign,
  faUsersLine,
  faBook,
  faHandsBound,
  faTicket,
} from '@fortawesome/free-solid-svg-icons'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/',
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings',
    },
    {
      sectionTitle: 'Pages',
    },

    {
      colapsibleTitle: 'Profile',
      icon: faUser,
      colapsibleMenu: [
        {
          subMenu: 'Edit Profile',
          icon: ManageAccounts,
          path: '/profile/edit',
        },
        {
          subMenu: 'KYC Details',
          icon: Key,
          path: '/profile/kyc-details',
        },
        {
          subMenu: 'Edit Wallet Address',
          icon: AccountBalanceWallet,
          path: '/profile/edit-wallet-address',
        },
        {
          subMenu: 'Reset Password',
          icon: LockReset,
          path: '/profile/reset-password',
        },
        {
          subMenu: 'Wallet History',
          icon: History,
          path: '/profile/wallet-history',
        },
      ],
    },

    {
      colapsibleTitle: 'USDT Account',
      icon: faDollarSign,
      colapsibleMenu: [
        {
          subMenu: 'Activate Now',
          icon: VerifiedUser,
          path: '/usdt/activate-now',
        },
        {
          subMenu: 'Activation History',
          icon: History,
          path: '/usdt/activation-history',
        },
        {
          subMenu: 'Re-Activation History',
          icon: Fingerprint,
          path: '/usdt/re-activation-history',
        },
        {
          subMenu: 'Topup Wallet Statement',
          icon: FormatColorFill,
          path: '/usdt/topup-wallet-statement',
        },
      ],
    },

    {
      colapsibleTitle: 'Team Details',
      icon: faUsersLine,
      colapsibleMenu: [
        {
          subMenu: 'My Partner Tree',
          icon: AccountTree,
          path: '/team-details/my-partner-tree',
        },
        {
          subMenu: 'My Partner',
          icon: GroupWork,
          path: '/team-details/my-partner',
        },
        {
          subMenu: 'Level Report',
          icon: Assessment,
          path: '/team-details/level-report',
        },
      ],
    },

    {
      colapsibleTitle: 'Statement',
      icon: faBook,
      colapsibleMenu: [
        {
          subMenu: 'Direct Income',
          icon: East,
          path: '/statement/direct-income',
        },
        {
          subMenu: 'DTB Income',
          icon: ForkRight,
          path: '/statement/dtb-income',
        },
        {
          subMenu: 'Team Level Income',
          icon: GroupWork,
          path: '/statement/team-level-income',
        },
        {
          subMenu: 'Rewards Income',
          icon: EmojiEvents,
          path: '/statement/rewards-income',
        },
        {
          subMenu: 'Payout Summary',
          icon: Payment,
          path: '/statement/payout-summary',
        },
      ],
    },

    {
      colapsibleTitle: 'Fund Manager',
      icon: faHandsBound,
      colapsibleMenu: [
        {
          subMenu: 'Deposit VMC BEP20',
          icon: AddCard,
          path: '/fund-manager/deposit-vmc',
        },
        {
          subMenu: 'Fund Request History',
          icon: AttachMoney,
          path: '/fund-manager/fund-request-history',
        },
        {
          subMenu: 'Deposit Manually',
          icon: AddLink,
          path: '/fund-manager/deposit-manually',
        },
        {
          subMenu: 'Withdraw',
          icon: BookmarkRemove,
          path: '/fund-manager/withdraw',
        },
        {
          subMenu: 'VMC Clossing',
          icon: CancelPresentation,
          path: '/fund-manager/vmc-closing',
        },
        {
          subMenu: 'Fund History',
          icon: AttachMoney,
          path: '/fund-manager/fund-history',
        },
      ],
    },

    {
      colapsibleTitle: 'Support Ticket',
      icon: faTicket,
      colapsibleMenu: [
        {
          subMenu: 'Create Ticket',
          icon: ConfirmationNumber,
          path: '/support-ticket/create-ticket',
        },
        {
          subMenu: 'Inbox',
          icon: ForwardToInbox,
          path: '/support-ticket/inbox',
        },
        {
          subMenu: 'Outbox',
          icon: Unarchive,
          path: '/support-ticket/outbox',
        },
      ],
    },

    {
      title: 'Login',
      icon: Login,
      path: '/login',
      openInNewTab: true,
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/register',
      openInNewTab: true,
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/error',
      openInNewTab: true,
    },
    {
      sectionTitle: 'User Interface',
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography',
    },
    {
      title: 'Icons',
      icon: GoogleCirclesExtended,
      path: '/icons',
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards',
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables',
    },
    {
      title: 'Form Layouts',
      icon: CubeOutline,
      path: '/form-layouts',
    },
    // {
    //   title: 'Logout',
    //   icon: CubeOutline,
    //   path: '/form-layouts',
    // },
  ]
}

export default navigation
