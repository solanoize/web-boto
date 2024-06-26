## Environment

Create `.env.local` in your root project:

```
VITE_BASE_URL=http://localhost:3000
VITE_DETAIL_ID=_id
```

## Configuration Settings

Create file `settings.jsx` in `src` folder and paste this code:

```jsx
import {
  CREATE_PERMISSIONS,
  READ_PERMISSIONS,
} from "./permissions/states/constants";
import { CREATE_ROLES, READ_ROLES } from "./roles/states/constants";
import { CREATE_USERS, READ_USERS } from "./users/states/constants";

export const APP_TITLE = "Boto App";

export const MENUS = [
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
];
```
