# Next.js Project Setup and Basics

This repository is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs.

## Learning Objectives

By completing this project, you will:

- Understand how to scaffold a Next.js application with TypeScript and Tailwind CSS
- Learn to implement basic routing in Next.js using the Pages Router
- Create reusable components with TypeScript interfaces
- Implement interactive UI elements like modals and buttons
- Fetch and display data from external APIs
- Structure a Next.js project following best practices
- Work with component props and state management
- Build responsive layouts with navigation

## Requirements

- Node.js (v16 or later)
- npm or yarn package manager
- Basic knowledge of React and TypeScript
- Familiarity with HTML/CSS
- Git and GitHub account
- Code editor (VS Code recommended)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev -- -p 3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Features

- **Routing**: Pages Router implementation with navigation between pages
- **Reusable Components**: Card, Button, PostCard, UserCard, and PostModal components
- **API Integration**: Fetches data from JSONPlaceholder API for posts and users
- **TypeScript**: Full type safety with interfaces for all components
- **Tailwind CSS**: Modern, responsive styling throughout the application

## Pages

- `/` - Welcome page
- `/home` - Home page with Card components and PostModal
- `/about` - About page demonstrating Button component variations
- `/posts` - Posts page displaying posts from JSONPlaceholder API
- `/users` - Users page displaying users from JSONPlaceholder API

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
