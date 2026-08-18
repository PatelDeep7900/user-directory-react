# Mini User Directory

A small React + Vite app that fetches a list of users from a public API and
lets you search through them by name.

## Features

- Fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Live search/filter by name
- Loading state while data is being fetched
- Error state if the request fails
- Responsive grid layout (3 columns → 2 → 1 as the screen narrows)

## Tech stack

- [React](https://react.dev/) 18+
- [Vite](https://vitejs.dev/) — dev server & build tool
- Plain CSS (no framework)

## Project structure

```
src/
├── api/
│   └── userApi.js        # API calls (fetch users)
├── hooks/
│   └── useUsers.js        # Custom hook: loading/error/data state
├── components/
│   ├── SearchBar.jsx       # Search input
│   ├── UserList.jsx        # Renders the grid of users
│   ├── UserCard.jsx        # A single user's info
│   ├── Loader.jsx          # Spinner shown while fetching
│   └── ErrorMessage.jsx    # Error display
├── styles/
│   ├── App.css
│   └── index.css
├── assets/                 # Images/icons
├── App.jsx                 # Top-level layout, wires everything together
└── main.jsx                 # React entry point
```

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## How it works

1. `useUsers()` (in `hooks/useUsers.js`) fetches the user list once on mount
   via `api/userApi.js`, and exposes `{ users, loading, error }`.
2. `App.jsx` reads that state and also tracks the current search text.
3. `filteredUsers` is derived from `users` + `search` with `useMemo`.
4. Depending on state, `App.jsx` renders a `Loader`, an `ErrorMessage`, or
   the `UserList` (which renders one `UserCard` per user).

## Possible next steps

- Add `PropTypes` or migrate to TypeScript for prop-shape safety.
- Move `BASE_URL` into an `.env` file via `import.meta.env`.
- Add pagination or infinite scroll for larger user lists.
- Add tests (e.g. Vitest + React Testing Library) for `useUsers` and
  `UserList`.
