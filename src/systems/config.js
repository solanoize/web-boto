import {CREATE_PERMISSIONS, READ_PERMISSIONS} from "./permissions/states/constants.jsx";
import {CREATE_ROLES, READ_ROLES} from "./roles/states/constants.jsx";
import {CREATE_USERS, READ_USERS} from "./users/states/constants.jsx";

export const SYSTEM_MENU_CONFIG = [
  {
    title: "Permission Manager",
    permissions: [READ_PERMISSIONS, CREATE_PERMISSIONS],
    link: "/permissions",
  },
  {
    title: "Role Manager",
    permissions: [READ_ROLES, CREATE_ROLES, READ_PERMISSIONS],
    link: "/roles",
    or: true,
  },
  {
    title: "User Manager",
    permissions: [READ_USERS, CREATE_USERS, READ_ROLES],
    link: "/users",
    or: true,
  },
]