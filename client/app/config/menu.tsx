import { Icons } from '@/constant';
import { PRIVATE_PATHS } from './path';

export interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  permit: string[];
  key: string;
}

export interface MenuSection {
  key: string;
  label: string;
  children: MenuItem[];
}

export const ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
  PARENT: 'parent'
};

const ALL_ROLES = [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT, ROLES.PARENT];
const ADMIN_TEACHER = [ROLES.ADMIN, ROLES.TEACHER];

// Menu structure
export const MENU_ITEMS: MenuSection[] = [
  {
    key: 'MENU',
    label: 'MENU',
    children: [
      {
        key: 'Dashboard',
        icon: <Icons.Home />,
        label: 'Dashboard',
        href: PRIVATE_PATHS.DASHBOARD,
        permit: ALL_ROLES
      },
      {
        key: 'Teachers',
        icon: <Icons.Team />,
        label: 'Teachers',
        href: PRIVATE_PATHS.TEACHERS,
        permit: ADMIN_TEACHER
      },
      {
        key: 'Students',
        icon: <Icons.User />,
        label: 'Students',
        href: PRIVATE_PATHS.STUDENTS,
        permit: ADMIN_TEACHER
      },
      {
        key: 'Parents',
        icon: <Icons.Solution />,
        label: 'Parents',
        href: PRIVATE_PATHS.PARENTS,
        permit: ADMIN_TEACHER
      },
      {
        key: 'Subjects',
        icon: <Icons.Book />,
        label: 'Subjects',
        href: PRIVATE_PATHS.SUBJECTS,
        permit: [ROLES.ADMIN]
      },
      {
        key: 'Classes',
        icon: <Icons.Read />,
        label: 'Classes',
        href: PRIVATE_PATHS.CLASSES,
        permit: ADMIN_TEACHER
      },
      {
        key: 'Lessons',
        icon: <Icons.FileText />,
        label: 'Lessons',
        href: PRIVATE_PATHS.LESSONS,
        permit: ADMIN_TEACHER
      },
      {
        key: 'Exams',
        icon: <Icons.FileDone />,
        label: 'Exams',
        href: PRIVATE_PATHS.EXAMS,
        permit: ALL_ROLES
      },
      {
        key: 'Results',
        icon: <Icons.FileDone />,
        label: 'Results',
        href: PRIVATE_PATHS.RESULTS,
        permit: ALL_ROLES
      },
      {
        key: 'Attendance',
        icon: <Icons.Schedule />,
        label: 'Attendance',
        href: PRIVATE_PATHS.ATTENDANCE,
        permit: ALL_ROLES
      },
      {
        key: 'Events',
        icon: <Icons.Calendar />,
        label: 'Events',
        href: PRIVATE_PATHS.EVENTS,
        permit: ALL_ROLES
      },
      {
        key: 'Messages',
        icon: <Icons.Mail />,
        label: 'Messages',
        href: PRIVATE_PATHS.MESSAGES,
        permit: ALL_ROLES
      },
      {
        key: 'Announcements',
        icon: <Icons.Notification />,
        label: 'Announcements',
        href: PRIVATE_PATHS.ANNOUNCEMENTS,
        permit: ALL_ROLES
      }
    ]
  },
  {
    key: 'OTHER',
    label: 'OTHER',
    children: [
      {
        key: 'Profile',
        icon: <Icons.User />,
        label: 'Profile',
        href: PRIVATE_PATHS.PROFILE,
        permit: ALL_ROLES
      },
      {
        key: 'Settings',
        icon: <Icons.Setting />,
        label: 'Settings',
        href: PRIVATE_PATHS.SETTINGS,
        permit: ALL_ROLES
      },
      {
        key: 'Logout',
        icon: <Icons.Logout />,
        label: 'Logout',
        href: PRIVATE_PATHS.LOGOUT,
        permit: ALL_ROLES
      }
    ]
  }
];
